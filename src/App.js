import React, { useState } from "react"
import useFetch from "./Hooks/useFetch"
import Loading from "./Components/Loading"
import Result from "./Components/Result"
import "./App.css"

const url = "https://corona.lmao.ninja/v3/covid-19/countries"

export default function App() {
  const { isError, isLoading, data } = useFetch(url)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const handleChange = e => {
    const { value } = e.target
    const countries = data
    setSearchQuery(value)

    if (value.length > 0) {
      const matchList = countries.filter(({ country }) => country.toLowerCase().indexOf(value.toLowerCase()) === 0)
      if (matchList) {
        setSearchResult(matchList)
      }
    } else {
      setSearchResult([])
    }
  }

  if (isError) return <h1>Error: {isError}</h1>
  if (isLoading) return <Loading fullwidth />

  return (
    <div className="container">
      <div className="form-group">
        <input value={searchQuery} onChange={handleChange} className="form-control" placeholder="Filter by country.." />
      </div>

      <Result searchValue={searchQuery} data={data} searchResult={searchResult} />
    </div>
  )
}
