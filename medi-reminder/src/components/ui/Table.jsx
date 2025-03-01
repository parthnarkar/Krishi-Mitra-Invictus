const Table = ({ headers, data, onDelete }) => {
  return (
    <div className="mt-6">
      <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 text-left">{header}</th>
            ))}
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={headers.length + 1} className="text-center py-4">No Medicines Added</td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-2 px-4">{row.name}</td>
                <td className="py-2 px-4">{row.time}</td>
                <td className="py-2 px-4">{row.meal}</td> {/* NEW: Meal Timing Column */}
                <td className="py-2 px-4">
                  <button
                    onClick={() => onDelete(rowIndex)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
