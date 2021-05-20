import React from 'react';
import Highlighted from './Highlighted';

export default function Heading({ heading, searchText }) {
  const getHighlightedTitle = () =>
    heading.title.split(new RegExp(`(${searchText})`), 'gi').map((part, i) => (
      <span
        key={i}
        className={
          part.toLowerCase() === searchText.toLowerCase() ? 'bg-yellow' : ''
        }
      >
        {part}
      </span>
    ));

  console.log({ searchText, highlight: getHighlightedTitle() });

  return (
    <span>
      <a href={heading.url}>
        <Highlighted text={heading.title} highlight={searchText} />
      </a>
      <div className="ml-4">
        {(heading?.children ?? []).map((child) => (
          <Heading key={child.url} heading={child} searchText={searchText} />
        ))}
      </div>
    </span>
  );
}
