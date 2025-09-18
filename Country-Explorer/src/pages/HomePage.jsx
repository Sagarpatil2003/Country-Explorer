import { useEffect, useState } from "react";
import axios from 'axios'
import CountryCard from "../components/CountyCard";

function HomePage () {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
       axios.get(`https://restcountries.com/v3.1/region/europe`)
       .then((res) => {
          setCountries(res.data)
          setLoading(false)
       }).catch((err) => {
        setError("Failed to fetch countries")
        setLoading(false)
       })
    }, [])


    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    return (
        <div>
            {countries.map((country) => {
                <CountryCard
                 key={country.cc3}
                 name={country.name}
                 population={country.population}
                 region={country.region}
                 capital={country.capital}
                 flag={country.flags.png}
                />
            })}
        </div>
    )
}

export default HomePage