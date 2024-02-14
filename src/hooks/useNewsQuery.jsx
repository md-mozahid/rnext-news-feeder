import { useState, useEffect } from "react";

export default function useNewsQuery() {
  const [newsData, setNewsData] = useState({articles: null});
  // console.log(newsData);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);

  // fetch data from api
  const fetchNewsData = async () => {
    try {
      setLoading({ ...loading, state: true, message: "Fetching news data..." });

      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=sports`
      );

      if (!response.ok) {
        const errorMsg = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMsg);
      }
      const data = await response.json();

      const updatedData = {
        ...newsData,
        articles: data,
      };

      setNewsData(updatedData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Fetching data...",
    });
    fetchNewsData();
  }, []);

  return { error, loading, newsData };
}
