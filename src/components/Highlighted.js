export default function Highlighted({ text = '', highlight = '' }) {
  if (!highlight.trim()) {
    return text;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-yellow">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </>
  );
}
