export default function Input({
  label,
  id,
  hasError,
  error,
  ...props
}) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}