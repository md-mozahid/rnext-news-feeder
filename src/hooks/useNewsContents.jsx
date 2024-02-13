import { useEffect } from "react";
import { useState } from "react";

export default function useNewsContents() {
  const [newsData, setNewsData] = useState({ articles: null, search: "" });
  console.log(newsData);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);

  // fetch data from api
  const fetchNewsData = async () => {
    try {
      setLoading({ ...loading, state: true, message: "Fetching news data..." });

      const response = await fetch(
        "http://localhost:8000/v2/top-headlines?category=general"
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
