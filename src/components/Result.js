function Result(props) {
    const {
        flyFrom,
        flyTo,
        dateFrom,
        dateTo,
        flightNo,
        cityFrom,
        cityTo,
    } = props.result;
    return (
        <div className="flight-result">
            <h4>Flight no.: {flightNo}</h4>
            <p>
                {dateFrom} - {dateTo}
            </p>
            <p>From: {cityFrom}</p>
            <p>To: {cityTo}</p>
        </div>
    );
}

export default Result;
