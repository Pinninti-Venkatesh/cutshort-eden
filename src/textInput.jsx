export default function textInput({label,placeholder,name}) {
  return (
    <div className="input-control">
      <label for={name}>{label}</label>
      <input type="text" name={name} id="" placeholder={placeholder} />
    </div>
  );
};