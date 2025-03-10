import Filter from "./filter";
import ProductList from "./product-list";

export default function Dashboard() {
  return (
    <div className="flex-1 p-4">
        <Filter />
        <ProductList />
    </div>
  );
}