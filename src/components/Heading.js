import React from 'react';
import Highlighted from './Highlighted';

export default function Heading({ heading, searchText }) {
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
