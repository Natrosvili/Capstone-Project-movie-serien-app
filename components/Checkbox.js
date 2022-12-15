export default function Checkbox({id, name, onChange}) {
  return <input type="checkbox" onChange={onChange} id={id} name={name} />;
}
