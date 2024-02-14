import { useContext, useEffect, useState } from 'react'
import { CategoryContext } from '../context'

export default function useNewsQuery() {
  const [newsData, setNewsData] = useState({})
  const [loading, setLoading] = useState({ state: false, message: '' })
  const [error, setError] = useState(null)
  const { category, setCategory } = useContext(CategoryContext)

  // fetch data from api
  const fetchNewsData = async (categoryName = null) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: 'Fetching news data...',
      })

      let response

      if (categoryName) {
        response = await fetch(
          `http://localhost:8000/v2/top-headlines?category=${categoryName}`
        )
      } else {
        response = await fetch(`http://localhost:8000/v2/top-headlines`)
      }

      if (!response.ok) {
        const errorMsg = `Fetching news data failed: ${response.status}`
        throw new Error(errorMsg)
      }
      const data = await response.json()

      setNewsData({ ...data })
    } catch (err) {
      setError(err)
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: '',
      })
    }
  }

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: 'Fetching data...',
    })
    if (category) {
      fetchNewsData(category)
    } else if (category === 'all') {
      fetchNewsData()
    }
  }, [category])

  return { error, loading, newsData }
}
