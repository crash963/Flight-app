function Search() {
  return (
    <form>
      <label htmlFor="from"></label>
      <input type="text" name="from" />
      <label htmlFor="to"></label>
      <input type="text" name="to" />
      <label htmlFor="dateFrom"></label>
      <input type="text" name="dateFrom" />
      <label htmlFor="dateTo"></label>
      <input type="text" name="dateTo" />
    </form>
  );
}

export default Search;
