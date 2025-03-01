const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      {children}
    </div>
  );
};

export default Card;
