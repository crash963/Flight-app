import { useEffect, useState } from "react";
import Result from "../components/Result";
import Search from "../components/Search";

function Index() {
    const [result, setResult] = useState({});
    async function fetchData() {
        const response = await fetch(
            "https://api.skypicker.com/flights?fly_from=PRG&fly_to=JFK&date_from=03/04/2021&date_to=15/04/2021"
        );
        const data = await response.json();
        console.log(data);
        setResult(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Search />
            <div className="results">
                <Result result={result} />
            </div>
        </div>
    );
}

export default Index;
