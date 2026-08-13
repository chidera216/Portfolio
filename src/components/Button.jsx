const Button = ({ text, className = "", onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={`px-5 py-2.5 ${className}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
