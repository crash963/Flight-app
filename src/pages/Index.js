import { useEffect, useState } from "react";
import Result from "../components/Result";
import Search from "../components/Search";

function Index() {
  const [result, setResult] = useState({});

  async function fetchData(flightSearch) {
    console.log(flightSearch);
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=${flightSearch.flyFrom}&fly_to=${flightSearch.flyTo}&date_from=${flightSearch.dateFrom}&date_to=${flightSearch.dateTo}&partner=picky`
    );
    const data = await response.json();

    setResult(data.data[0]);
  }

  return (
    <div>
      <Search fetchData={fetchData} />
      <div className="results">
        <Result result={result} />
      </div>
    </div>
  );
}

export default Index;
