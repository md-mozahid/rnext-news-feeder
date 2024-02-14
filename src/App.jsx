import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Page from './page/Page'
import { CategoryProvider, NewsProvider, SearchProvider } from './provider'

function App() {
  return (
    <>
      <SearchProvider>
        <CategoryProvider>
          <NewsProvider>
            <Navbar />
            <Page />
            <Footer />
          </NewsProvider>
        </CategoryProvider>
      </SearchProvider>
    </>
  )
}

export default App
