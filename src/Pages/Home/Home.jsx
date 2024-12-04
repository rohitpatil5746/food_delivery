import React from "react";
import Layout from "../../Components/Layouts/Layout";
import "../../Styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

export default function Home() {
  return (
    <div>
      <Layout>
        {/* home section hero banner  */}
        <Section1 />
        {/* home section about */}
        <Section2 />
        {/* home section menu */}
        <Section3 />
        {/* home section Promotion */}
        <Section4 />
        {/* home section Shop */}
        <Section5 />
        <Section6 />
        <Section7 />
      </Layout>
    </div>
  );
}
