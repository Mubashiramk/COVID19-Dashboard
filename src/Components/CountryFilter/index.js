import "./countryFilter.css";

const CountryFilter = (props) => {
  return (
    <div>
      <select onChange={props.onchange}>
        <option value="worldwide">Worldwide</option>
        {props.item.Countries &&
          props.item.Countries.map((country) => (
            <option key={country.ID} value={country.Country}>
              {country.Country}
            </option>
          ))}
      </select>
    </div>
  );
};
export default CountryFilter;
