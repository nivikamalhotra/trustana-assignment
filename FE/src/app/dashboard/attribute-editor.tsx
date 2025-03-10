import { useState } from "react";

export default function AttributeEditor() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Edit Attributes
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Edit Home Areas</h2>
            <ul className="border p-2">
              <li>KITCHEN</li>
              <li>BATHROOM</li>
              <li>GARDEN</li>
            </ul>
            <button onClick={() => setIsOpen(false)} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}