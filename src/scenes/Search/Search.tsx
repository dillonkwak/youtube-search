import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <div className="App">
      <h1>Youtube Search</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <SearchResults />
    </div>
  );
}
