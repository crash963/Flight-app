import { useState } from "react";

function Search() {
  const [searchFlight, setSearchFlight] = useState({
    flyFrom: "",
    flyTo: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(e) {}

  return (
    <form>
      <label htmlFor="flyFrom">From: </label>
      <input onChange={handleChange} type="text" name="from" />
      <label htmlFor="flyTo">To: </label>
      <input onChange={handleChange} type="text" name="to" />
      <label htmlFor="dateFrom">Date From: </label>
      <input onChange={handleChange} type="date" name="dateFrom" />
      <label htmlFor="dateTo">Date To: </label>
      <input onChange={handleChange} type="date" name="dateTo" />
      <input type="submit" value="find" />
    </form>
  );
}

export default Search;
