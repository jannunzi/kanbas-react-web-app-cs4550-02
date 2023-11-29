import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const { currentUser } = useSelector((state) => state.user);
  const screens = ["signin", "signup", "account", "users", "napster-search"];
  const anomymousScreens = ["signin", "signup"];
  const signedinScreens = ["account", "users"];
  const anyoneScreens = ["napster-search"];
  return (
    <>
      <div className="list-group">
        {!currentUser &&
          anomymousScreens.map((screen) => (
            <Link
              key={screen}
              to={`/project/${screen}`}
              className="list-group-item"
            >
              {screen}
            </Link>
          ))}
        {currentUser &&
          signedinScreens.map((screen) => (
            <Link
              key={screen}
              to={`/project/${screen}`}
              className="list-group-item"
            >
              {screen}
            </Link>
          ))}
        {anyoneScreens.map((screen) => (
          <Link
            key={screen}
            to={`/project/${screen}`}
            className="list-group-item"
          >
            {screen}
          </Link>
        ))}
      </div>
      {JSON.stringify(currentUser)}
    </>
  );
}

export default Navigation;
