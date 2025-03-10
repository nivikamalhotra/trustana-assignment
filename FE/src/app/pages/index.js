import Head from "next/head";
import Filters from "../components/Filters";
import ProductTable from "../components/ProductTable";
import AttributesTable from "../components/AttributesTable";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AI Product Hub</title>
      </Head>
      
      <h1>AI Product Hub</h1>
      
      <Filters />
      <ProductTable />
      <AttributesTable />
    </div>
  );
}