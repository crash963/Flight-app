function Result(props) {
    const { flyFrom, flyTo, dateFrom, dateTo, flightNo } = props.result;
    return (
        <div className="flight-result">
            <h4>Flight no.: {flightNo}</h4>
            <p>
                {dateFrom} - {dateTo}
            </p>
            <p>From:{flyFrom}</p>
            <p>To: {flyTo}</p>
        </div>
    );
}

export default Result;
