import { useEffect, useState } from "react";
import Result from "../components/Result";
import Search from "../components/Search";

function Index() {
    const [result, setResult] = useState(null);
    const [oldFlight, setOldFlight] = useState(null);
    const [offset, setOffset] = useState(0);

    async function fetchData(flightSearch) {
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
        console.log(data.data);
        setOldFlight(flightSearch);
        setResult(data.data.slice(offset, offset + 5));
        console.log(result);
    }

    useEffect(() => {
        if (result) {
            fetchData(oldFlight);
        }
    }, [offset]);

    return (
        <div>
            <Search fetchData={fetchData} />
            {offset === 0 ? null : (
                <button
                    onClick={() => {
                        setOffset(offset - 5);
                    }}
                >
                    Back
                </button>
            )}
            {offset === 95 ? null : (
                <button
                    onClick={() => {
                        setOffset(offset - 5);
                    }}
                >
                    Next
                </button>
            )}
            {result ? (
                <div className="results">
                    {result
                        ? result.map((el, key) => (
                              <Result key={key} result={el} />
                          ))
                        : null}
                </div>
            ) : null}
        </div>
    );
}

export default Index;
