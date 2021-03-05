import { DateTime } from "luxon";

function Result(props) {
  const {
    flyFrom,
    flyTo,
    dTimeUTC,
    aTimeUTC,
    flightNo,
    cityFrom,
    cityTo,
    price,
    airline,
    flight_no,
    fly_duration,
  } = props.result;
  return (
    <div className="flight-result">
      <h4>Flight no.: {flight_no}</h4>
      <p>Price: €{price}</p>
      <p>
        {DateTime.fromSeconds(dTimeUTC).toFormat("dd.MM.y hh:mm")} -{" "}
        {DateTime.fromSeconds(aTimeUTC).toFormat("dd.MM.y hh:mm")}
      </p>
      <p>Flight duration: {fly_duration}</p>
      <p>From: {cityFrom}</p>
      <p>To: {cityTo}</p>
    </div>
  );
}
export default Result;
