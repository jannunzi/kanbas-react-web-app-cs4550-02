import { Routes, Route, Navigate } from "react-router";
import NapsterSearch from "./napster-search";
import AlbumDetails from "./album-details";
import SignIn from "./users/signin";
import SignUp from "./users/signup";
import Account from "./users/account";
import UserList from "./users/list";
import UserDetail from "./users/details";
import Navigation from "./nav";

function Project() {
  return (
    <div className="container-fluid row">
      <div className="col-2">
        <Navigation />
      </div>
      <div className="col-10">
        <h1>Project</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/project/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/napster-search" element={<NapsterSearch />} />
          <Route path="/album-details/:albumId" element={<AlbumDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default Project;
