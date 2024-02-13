import { NewsContext } from "../context/NewsContext";
import { useNewsContents } from "../hooks";

const NewsProvider = ({ children }) => {
  const { newsData, error, loading } = useNewsContents();
  return (
    <NewsContext.Provider value={{ newsData, error, loading }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
