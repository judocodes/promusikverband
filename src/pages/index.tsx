import React from "react";
import { Link } from "gatsby";

import Layout from "../containers/Layout";
import DesktopShell from "../containers/DesktopShell";
import NavBar from "../components/navbar/NavBar";
import Hero from "../components/Hero";
import Goals from "../components/Goals";
import Newsletter from "../components/Newsletter";

interface Props {}

const App = (props: Props) => {
  return (
    <Layout>
      <NavBar />
      <DesktopShell>
        <Hero />
        <Goals />
        <Newsletter />
      </DesktopShell>
    </Layout>
  );
};

export default App;
