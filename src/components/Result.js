import { DateTime } from "luxon";

function Result(props) {
    const {
        flyFrom,
        flyTo,
        dTime,
        aTime,
        flightNo,
        cityFrom,
        cityTo,
    } = props.result;
    return (
        <div className="flight-result">
            <h4>Flight no.: {flightNo}</h4>
            <p>
                {DateTime.fromSeconds(dTime).toFormat("dd.MM.y hh:mm")} -{" "}
                {DateTime.fromSeconds(aTime).toFormat("dd.MM.y hh:mm")}
            </p>
            <p>From: {cityFrom}</p>
            <p>To: {cityTo}</p>
        </div>
    );
}

export default Result;
