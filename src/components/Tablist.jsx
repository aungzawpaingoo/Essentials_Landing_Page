export default function Tablist({children, onSelect}) {
  
  return (
  <button onClick={onSelect}>{children}</button>
  
  );
  }