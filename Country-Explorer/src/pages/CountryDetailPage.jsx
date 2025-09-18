import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CountryDetailPage() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/${countryName}?fullText=true")
      .then((res) => {
        setCountry(res.data[0]);
        setLoading(false);
      });
  }, [countryName]);

  if (loading) return <p>Loading...</p>;
  if (!country) return <p>Country not found</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.name.common} />
      <p><b>Native Name:</b> {Object.values(country.name.nativeName || {})[0]?.common || "N/A"}</p>
      <p><b>Subregion:</b> {country.subregion}</p>
      <p><b>Top Level Domain:</b> {country.tld?.join(", ")}</p>
      <p><b>Currencies:</b> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "N/A"}</p>
      <p><b>Languages:</b> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
    </div>
  );
}

export default CountryDetailPage;