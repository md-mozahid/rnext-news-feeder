import { useEffect, useRef } from 'react'

const useDebounce = (callback, delay) => {
  const timeoutId = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }
    }
  }, [])

  const debounceCallback = (...arg) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    timeoutId.current = setTimeout(() => {
      callback(...arg)
    }, delay)
  }
  return debounceCallback
}

export default useDebounce
