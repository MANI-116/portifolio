function InputField(props: { name: string }) {
  return (
    <>
      <label htmlFor="">
        {props.name}
        <input></input>
      </label>
    </>
  );
}

export default InputField;
