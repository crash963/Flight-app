import { useState } from "react";

function Search() {
  const [searchFlight, setSearchFlight] = useState({});

  return (
    <form>
      <label htmlFor="from">From: </label>
      <input type="text" name="from" />
      <label htmlFor="to">To: </label>
      <input type="text" name="to" />
      <label htmlFor="dateFrom">Date From: </label>
      <input type="text" name="dateFrom" />
      <label htmlFor="dateTo">Date To:</label>
      <input type="text" name="dateTo" />
    </form>
  );
}

export default Search;
