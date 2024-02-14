import { useEffect, useState } from 'react'
import { useCategory, useSearch } from '../context'

export default function useNewsQuery() {
  const [newsData, setNewsData] = useState({})
  const [loading, setLoading] = useState({ state: false, message: '' })
  const [error, setError] = useState(null)
  const { category, setCategory } = useCategory()
  const { search } = useSearch()

  // fetch data from api
  const fetchNewsData = async (categoryName = null) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: 'Fetching news data...',
      })

      let response

      if (categoryName && categoryName !== 'all') {
        response = await fetch(
          `http://localhost:8000/v2/top-headlines?category=${categoryName}`
        )
      } else {
        response = await fetch('http://localhost:8000/v2/top-headlines')
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

  // fetch search data
  const fetchSearchData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: 'Fetch loading data...',
      })

      const response = await fetch(
        `http://localhost:8000/v2/search?q=${search}`
      )

      if (!response.ok) {
        const errorMsg = `Fetching news data failed: ${response.status}`
        throw new Error(errorMsg)
      }

      const data = await response.json()
      setCategory(null)
      setNewsData({
        articles: [...data.result],
      })
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

  // search
  useEffect(() => {
    if (search) {
      fetchSearchData()
    } else {
      fetchNewsData()
    }
  }, [search])

  // fetch data
  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: 'Fetching data...',
    })

    if (category) {
      fetchNewsData(category)
    } else if (category === 'all') {
      setCategory(null)
      fetchNewsData()
    }
  }, [category])

  return { error, loading, newsData }
}
