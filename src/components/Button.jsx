const Button = (props) => {
  return (
    <div>
      <button className={`px-5 py-2.5 ${props.className}`}>{props.text}</button>
    </div>
  );
};

export default Button;
