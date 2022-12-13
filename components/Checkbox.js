export default function Checkbox({type, id, name, onChange}) {
  return (
    <>
      <input onChange={onChange} type={type} id={id} name={name} />
    </>
  );
}
