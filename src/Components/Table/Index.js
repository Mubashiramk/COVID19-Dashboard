import "./table.css";
const DataTable = (props) => {
  const summary = props.item;

  return (
    <div className="table-div">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>New Confirmed</th>
            <th>Total Confirmed</th>
            <th>Total Recovered</th>
            <th>Total Deaths</th>
          </tr>
        </thead>
        <tbody>
          {summary.Countries &&
            summary.Countries.map((post) => {
              return (
                <tr key={post.ID}>
                  <td>{post.Country}</td>
                  <td>{post.NewConfirmed}</td>
                  <td>{post.TotalConfirmed}</td>
                  <td>{post.TotalRecovered}</td>
                  <td>{post.TotalDeaths}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
