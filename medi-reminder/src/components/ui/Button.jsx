const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
