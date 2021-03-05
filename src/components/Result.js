import { DateTime } from "luxon";
import "../Result.css";

function Result(props) {
    const {
        dTimeUTC,
        aTimeUTC,
        cityFrom,
        cityTo,
        price,
        fly_duration,
        route,
        airlineName,
    } = props.result;
    return (
        <div className="flight-result">
            {console.log(props)}
            <h4>
                Flight no.: {route[0].airline}
                {route[0].flight_no}
            </h4>
            <p>
                {DateTime.fromSeconds(dTimeUTC).toFormat("dd.MM.y hh:mm")} -{" "}
                {DateTime.fromSeconds(aTimeUTC).toFormat("dd.MM.y hh:mm")}
            </p>
            <p>Price: €{price}</p>
            
            <p>Flight duration: {fly_duration}</p>
            <p>From: {cityFrom}</p>
            <p>To: {cityTo}</p>
            <p>Airline: {airlineName}</p>
            <p>Number of stopovers: {route.length - 1}</p>
        </div>
    );
}
export default Result;
