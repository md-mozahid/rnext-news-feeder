import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/header/Navbar";
import NewsWrapper from "./components/newsContent/NewsWrapper";
import { CategoryProvider, NewsProvider, SearchProvider } from "./provider";

function App() {
  return (
    <>
      <SearchProvider>
        <CategoryProvider>
          <NewsProvider>
            <Navbar />
            <NewsWrapper />
            <Footer />
          </NewsProvider>
        </CategoryProvider>
      </SearchProvider>
    </>
  );
}

export default App;
