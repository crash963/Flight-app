import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { DateTime } from "luxon";

function Search(props) {
  const [flyFrom, setFlyFrom] = useState("");
  const [flyTo, setFlyTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
    <form>
      <label htmlFor="flyFrom">From: </label>
      <input
        onChange={(e) => {
          setFlyFrom(e.target.value);
        }}
        type="text"
        name="from"
      />
      <label htmlFor="flyTo">To: </label>
      <input
        onChange={(e) => {
          setFlyTo(e.target.value);
          console.log(flyTo);
        }}
        type="text"
        name="to"
      />
      <label htmlFor="dateFrom">Date From: </label>
      <input
        onChange={(e) => {
          setDateFrom(DateTime.fromISO(e.target.value).toFormat("dd/MM/yyyy"));
        }}
        type="date"
        name="dateFrom"
      />
      <label htmlFor="dateTo">Date To: </label>
      <input
        onChange={(e) => {
          setDateTo(DateTime.fromISO(e.target.value).toFormat("dd/MM/yyyy"));
        }}
        type="date"
        name="dateTo"
      />
      <input
        type="submit"
        value="find"
        onClick={(e) => {
          e.preventDefault();
          props.fetchData({
            flyFrom: flyFrom,
            flyTo: flyTo,
            dateFrom: dateFrom,
            dateTo: dateTo,
          });
        }}
      />
    </form>
  );
}

export default Search;
