const Input = ({ placeholder, value, onChange, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 w-full bg-gray-100 rounded-lg border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-400 focus:outline-none ${className}`}
    />
  );
};

export default Input;
