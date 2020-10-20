import { useState, useEffect } from "react"

/* useFetch Custom Hook returns 
  - Data
  - Loading a flag to check if the data is still not ready.
  - Error if there is any
*/

function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState("")

  useEffect(() => {
    async function dataFetch(api) {
      await fetch(api)
        .then(res => res.json())
        .then(a => {
          setData(a)
          setLoading(false)
        })
        .catch(error => {
          setLoading(false)
          setError(`Error: ${error}`)
        })
    }
    dataFetch(url)
  }, [url])

  return { isError, isLoading, data }
}

export default useFetch
