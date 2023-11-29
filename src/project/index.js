import { Routes, Route, Navigate } from "react-router";
import NapsterSearch from "./napster-search";
import AlbumDetails from "./album-details";
import SignIn from "./users/signin";
import SignUp from "./users/signup";
import Account from "./users/account";
import UserList from "./users/list";
import UserDetail from "./users/details";
import Navigation from "./nav";
import store from "./store";
import { Provider } from "react-redux";
import RootComponent from "./rootComponent";
import ProtectedRoute from "./protectedRoute";

function Project() {
  return (
    <Provider store={store}>
      <RootComponent show={true}>
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
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:id" element={<UserDetail />} />
              <Route path="/napster-search" element={<NapsterSearch />} />
              <Route
                path="/album-details/:albumId"
                element={<AlbumDetails />}
              />
            </Routes>
          </div>
        </div>
      </RootComponent>
    </Provider>
  );
}

export default Project;
