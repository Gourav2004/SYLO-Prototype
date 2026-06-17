export default function SearchBox({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="search-box">
      <svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4" /><path d="M10 10l3 3" /></svg>
      <input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
