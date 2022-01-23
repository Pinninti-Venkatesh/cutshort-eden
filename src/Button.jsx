export function Button({name,clickHandler}) {
  return (
    <div className="button" onClick={clickHandler}>
      {name}
    </div>
  );
};