import { useState } from 'react';
import Heading from './components/Heading';
import useSearch from './hooks/useSearch';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const headings = useSearch(searchText);

  return (
    <div className="p-4">
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border"
          autoFocus
        />
      </div>
      {headings.map((heading) => (
        <Heading key={heading.url} heading={heading} />
      ))}
    </div>
  );
}
