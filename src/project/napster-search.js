import { fullTextSearch, albumImageUrl } from "./napster-service";
import { useState } from "react";
import { Link } from "react-router-dom";

function NapsterSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    const response = await fullTextSearch(searchTerm);
    setResults(response);
  };

  return (
    <div>
      <h1>Napster Search</h1>
      <input
        type="text"
        value={searchTerm}
        className="form-control"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-primary" onClick={search}>
        Search
      </button>
      {results &&
        results.search &&
        results.search.data &&
        results.search.data.albums &&
        results.search.data.albums.length > 0 &&
        results.search.data.albums.map((album) => (
          <div key={album.id}>
            <Link to={`/project/album-details/${album.id}`}>
              <img src={albumImageUrl(album)} />
              <h2>{album.name}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default NapsterSearch;
