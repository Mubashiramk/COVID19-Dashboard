import "./countryFilter.css";

const CountryFilter = (props) => {
  return (
    <div>
      <div className="filter-dropdown">
        <input
          list="countryInput"
          onChange={props.onchange}
          placeholder="Search Country"
        />
        <datalist id="countryInput">
          <option value="Worldwide">World Wide</option>
          {props.item.Countries &&
            props.item.Countries.map((country) => (
              <option key={country.ID} value={country.Country}>
                {country.Country}
              </option>
            ))}
        </datalist>
      </div>
    </div>
  );
};
export default CountryFilter;
