import { useMemo } from 'react';
import mockData from '../mockData.json';

const search = (headings, loweredSearchText) => {
  const result = [];

  for (const heading of headings) {
    if (heading.title.toLowerCase().includes(loweredSearchText)) {
      result.push(heading);
      continue;
    }

    const searchedChildren = search(heading?.children ?? [], loweredSearchText);
    if (searchedChildren.length) {
      result.push({ ...heading, children: searchedChildren });
    }
  }

  return result;
};

export default function useSearch(searchText) {
  return useMemo(
    () => search(mockData, searchText.toLowerCase()),
    [searchText]
  );
}
