export default function Navbar() {
    return (
      <nav className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-semibold">AI Product Hub</h1>
        <div className="flex gap-2">
          <button className="bg-gray-200 px-4 py-2 rounded">Bulk Import</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add New Product</button>
        </div>
      </nav>
    );
  }