import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function Labs() {
  return (
    <div className="container">
      <Nav />
      <Assignment3 />
      <Assignment4 />
      <Assignment5 />
    </div>
  );
}

export default Labs;
