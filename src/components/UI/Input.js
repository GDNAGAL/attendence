import "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input {...props.input} onChange={props.onChangHandler} />
    </>
  );
};

export default Input;
