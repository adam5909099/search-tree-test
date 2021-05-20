import React from 'react';

export default function Heading({ heading }) {
  return (
    <>
      <a href={heading.url}>{heading.title}</a>
      <div className="ml-4">
        {(heading?.children ?? []).map((child) => (
          <Heading key={child.url} heading={child} />
        ))}
      </div>
    </>
  );
}
