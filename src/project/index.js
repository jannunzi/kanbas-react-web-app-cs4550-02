import { Routes, Route, Navigate } from "react-router";
import NapsterSearch from "./napster-search";
import AlbumDetails from "./album-details";

function Project() {
  return (
    <div className="container-fluid">
      <h1>Project</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/project/napster-search" />} />
        <Route path="/napster-search" element={<NapsterSearch />} />
        <Route path="/album-details/:albumId" element={<AlbumDetails />} />
      </Routes>
    </div>
  );
}

export default Project;
