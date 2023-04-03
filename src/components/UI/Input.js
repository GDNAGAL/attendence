import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input {...props.input} />
    </>
  );
};

export default Input;
