import Result from "../components/Result";
import Search from "../components/Search";

function Index() {
  async function fetchData() {}
  return (
    <div>
      <Search />
      <div className="results">
        <Result />
      </div>
    </div>
  );
}

export default Index;
