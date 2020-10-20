import React from "react"
import Countries from "./Countries"

export default function Result(props) {
  const { searchValue, data, searchResult } = props
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Flag</th>
            <th className="text-left">Country</th>
            <th>Cases</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Last Checked</th>
          </tr>
        </thead>
        <tbody>
          {searchValue.length > 0 ? (
            searchResult.length > 0 ? (
              <Countries result={searchResult} />
            ) : (
              <tr>
                <td>No result!</td>
              </tr>
            )
          ) : (
            <Countries result={data} />
          )}
        </tbody>
      </table>
    </div>
  )
}
