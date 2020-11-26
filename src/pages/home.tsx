import React from "react";
import { Link } from "gatsby";

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      Just another Page
      <Link to="/">Back</Link>
    </div>
  );
};

export default Home;
