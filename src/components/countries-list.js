//import countriesData from '../countries.json'

import { Link } from 'react-router-dom'

//import { useState } from "react"


function CountriesList (props) {

    // const [countries, setCountries] = useState(countriesData)


    return (

<div className="col-5" style={{
    maxHeight: "90vh",
    overflow: "scroll",
    }}>
        <div className='list-group'>
        {props.countries.map(singleCountry => {
            return <Link className="list-group-item list-group-item-action"to={`/${singleCountry.alpha3Code}`}>{singleCountry.name.common}</Link>
        })}

        </div>

</div>

    )
}

export default CountriesList