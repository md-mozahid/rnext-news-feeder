import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./page/Page";
// import "./App.css";
import NewsProvider from "./provider/NewsProvider";

function App() {
  return (
    <>
      <NewsProvider>
        <Navbar />
        <Page />
        <Footer />
      </NewsProvider>
    </>
  );
}

export default App;
