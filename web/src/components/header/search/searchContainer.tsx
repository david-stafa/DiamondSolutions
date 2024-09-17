"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/client";
import { SEARCH_INPUT_QUERY } from "@/queries/queries";
import SearchInput from "./searchInput";

// TODO - Make PAGINATION

export default function SearchContainer() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchResults = useCallback(async () => {
    if (!query) {
      setSearchResult([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const results = await sanityFetch({
        query: SEARCH_INPUT_QUERY(query),
      });
      setSearchResult(results);
    } catch (err) {
      setError("Failed to fetch search results. Please try again.");
      setSearchResult([]);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return (
    <div className="ml-auto mr-1">
      <Suspense />
      <SearchInput
        placeholder="Search"
        searchResults={searchResult}
        isLoading={isLoading}
        error={error}
        query={query}
      />
      <Suspense />
    </div>
  );
}
