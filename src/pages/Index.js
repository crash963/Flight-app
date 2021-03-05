import { useEffect, useState } from "react";
import Result from "../components/Result";
import Search from "../components/Search";

function Index() {
  const [result, setResult] = useState(null);

  async function fetchData(flightSearch) {
    console.log(flightSearch);
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=${flightSearch.flyFrom}&fly_to=${flightSearch.flyTo}&date_from=${flightSearch.dateFrom}&date_to=${flightSearch.dateTo}&partner=picky&sort=date`
    );
    const data = await response.json();
    console.log(data.data);
    setResult(data.data[0]);
  }

  return (
    <div>
      <Search fetchData={fetchData} />
      <div className="results">
        {result ? <Result result={result} /> : null}
      </div>
    </div>
  );
}

export default Index;
