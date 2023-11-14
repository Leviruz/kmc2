const FormRow = ({ type, name,defaultValue ,labelText }) => {
  return (
      <form>
        <label htmlFor={name} className="form-label">
          {labelText||name}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className="form-input"
          defaultValue={defaultValue||""}
          required
        />
      </form>
  );
};
export default FormRow;
