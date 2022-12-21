import { useState } from "react";
import SearchResults from "./SearchResults";

export default function Search() {
  const [searchPhrase, setSearchPhrase] = useState("");
  /*whenever the search phrase changes, this function activates */
  function handleSearchPhraseChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setSearchPhrase(event.target.value);
  } /*This function calls the searchPhrase function which changes the value
    in searchPhrase to the value of the event.*/
  return (
    <div className="App">
      <h1>Youtube Search</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={searchPhrase}
            onChange={handleSearchPhraseChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <SearchResults searchPhrase={searchPhrase} />
    </div>
  );
}
