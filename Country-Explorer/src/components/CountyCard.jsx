import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router";

function CountryCard({name, population, region, capital, flag}) {
    const {theme} = useTheme();

    return(
      <Link 
      to={`country/${name.common}`}
      style={{textDecoration: "none"}}>
        <div>
            <img src={flag} alt={name.common} style={{width:"100px", height: "150px", objectFit: "cover"}}/>
            <h2>{name.common}</h2>
            <p><b>Populatoin</b> { population.toLocaleString()}</p>
            <p><b>Region</b>{region}</p>
            <p><b>Capital</b>{capital ?.[0] || "N/A"}</p>
        </div>
      </Link>
    )
}
export default CountryCard