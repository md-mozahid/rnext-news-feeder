import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./page/Page";
import { NewsProvider, CategoryProvider, SearchProvider } from "./provider";
import "./App.css";

function App() {
  return (
    <>
      <NewsProvider>
        <CategoryProvider>
          <SearchProvider>
            <Navbar />
            <Page />
            <Footer />
          </SearchProvider>
        </CategoryProvider>
      </NewsProvider>
    </>
  );
}

export default App;
