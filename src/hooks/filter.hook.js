// hooks/useDiplomas.js
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

export function useFilter(queryKey, queryFn, key, sortKey) {
  const [term, setTerm] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [sortedData, setSortedData] = useState(null);

  const { isLoading, data } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  });

  const displayData = useMemo(() => {
    let result = sortedData || data?.[key] || [];

    if (term) {
      result = result.filter((item) =>
        item?.[sortKey].toLowerCase().includes(term.toLowerCase()),
      );
    }

    return result;
  }, [sortedData, data, term]);

  function getInputValue(e) {
    setInputValue(e.target.value);
  }

  function applySearch() {
    setTerm(inputValue);
  }

  function clearFun() {
    setInputValue("");
    setTerm("");
    setSortedData(null);
  }

  function ascending() {
    setSortedData(
      [...data?.[key]].sort((b, a) => b[sortKey].localeCompare(a[sortKey])),
    );
  }

  function descending() {
    setSortedData(
      [...data?.[key]].sort((a, b) => b[sortKey].localeCompare(a[sortKey])),
    );
  }

  function sortByNewest() {
    setSortedData(
      [...data?.[key]].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      ),
    );
  }

  function sortByOldest() {
    setSortedData(
      [...data?.[key]].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      ),
    );
  }

  console.log(data);
  

  return {
    isLoading,
    displayData,
    inputValue,
    getInputValue,
    applySearch,
    clearFun,
    ascending,
    descending,
    sortByNewest,
    sortByOldest,
  };
}
