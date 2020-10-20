import React from "react"
import moment from "moment"

export default function Countries(props) {
  return props.result.map(item => {
    const { updated, countryInfo, country, cases, deaths, recovered, active } = item

    return (
      <tr key={country}>
        <td className="flag">
          <img className="img-fluid" src={countryInfo.flag} alt={country} />
        </td>
        <td className="text-left">
          <b>{country}</b>
        </td>
        <td className="bg-secondary">{cases}</td>
        <td className="bg-warning">{active}</td>
        <td className="bg-success">{recovered}</td>
        <td className="bg-danger">{deaths}</td>
        <td className="small">{moment(new Date(updated)).fromNow()}</td>
      </tr>
    )
  })
}
