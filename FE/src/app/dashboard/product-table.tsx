const products = [
    { id: "TR00091240", name: "Univet 516 - Safety Spectacles - Clear Lens", brand: "Univet", category: "Health & Personal Care" },
    { id: "TR00091258", name: "Univet - Black Neck Cord with Buckle", brand: "Univet", category: "Protective Eyewear" },
  ];
  
  export default function ProductTable() {
    return (
      <div className="bg-white p-4 shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th><input type="checkbox" /></th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Brand</th>
              <th>Product Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t">
                <td><input type="checkbox" /></td>
                <td>{product.name}</td>
                <td className="text-blue-600">{product.id}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>
                  <button className="text-blue-600 underline">More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }