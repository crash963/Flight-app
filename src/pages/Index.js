import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Result from "../components/Result";
import Search from "../components/Search";

function Index() {
  const [result, setResult] = useState([]);
  const [oldFlight, setOldFlight] = useState(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchData(flightSearch) {
    if (flightSearch === null) {
      console.log("flightSearch is null");
      return;
    }
    setLoading(true);
    const response = await fetch(
      `https://api.skypicker.com/flights?fly_from=city:${
        flightSearch.flyFrom
      }&fly_to=city:${flightSearch.flyTo}&date_from=${
        flightSearch.dateFrom
      }&date_to=${flightSearch.dateTo}&partner=picky&limit=100&sort=date${
        flightSearch.directFlight ? `&max_stopovers=0` : ""
      }`
    );

    const data = await response.json();

    const response2 = await fetch("https://api.skypicker.com/carriers");
    const carriers = await response2.json();
    data.data.forEach((item) => {
      const id = item.route[0].airline;
      const airlineName = carriers.find((carrier) => carrier.id === id);
      item.airlineName = airlineName.name;
    });

    setLoading(false);

    console.log(data.data);
    setOldFlight(flightSearch);
    setResult(data.data.slice(offset, offset + 8));
  }

  useEffect(() => {
    if (result) {
      fetchData(oldFlight);
    }
  }, [offset]);

  return (
    <div>
      <Search fetchData={fetchData} setOffset={setOffset} />
      {offset === 0 ? null : (
        <button
          onClick={() => {
            setOffset(offset - 8);
          }}
          className="pageBtn"
        >
          Previous
        </button>
      )}
      {result.length < 8 ? null : (
        <button
          onClick={() => {
            setOffset(offset + 8);
          }}
          className="pageBtn"
        >
          Next
        </button>
      )}
      {loading ? <Loader /> : null}
      {result ? (
        <div className="results">
          {result
            ? result.map((el, key) => <Result key={key} result={el} />)
            : null}
        </div>
      ) : null}
    </div>
  );
}

export default Index;
