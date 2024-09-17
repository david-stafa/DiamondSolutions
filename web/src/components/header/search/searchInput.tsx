"use client";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useRef, useState } from "react";
import SearchResults from "./searchResults";

const SearchInput = ({
  placeholder,
  searchResults,
  isLoading,
  error,
  query,
}: {
  placeholder: string;
  searchResults: products[];
  isLoading: boolean;
  error: string | null;
  query: string;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const params = new URLSearchParams(searchParams);
  const containerRef = useRef<HTMLDivElement>(null);

  // ads query string to url from user input
  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  // handles deleting query when user closes search
  const closeSearch = () => {
    setShowSearch(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    params.delete("query");
    replace(pathname);
  };

  // close seacrh input when user click on target
  const handleClick = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      closeSearch();
    }
  };

  // Function to close search input when user click out of a div - i placed it on wrong element - needs correction
  //   useEffect(() => {
  //     const handleClickOutside = (event: MouseEvent) => {
  //       if (
  //         containerRef.current &&
  //         !containerRef.current.contains(event.target as Node)
  //       ) {
  //         closeSearch();
  //       }
  //     };

  //     if (showSearch) {
  //       document.addEventListener("mousedown", handleClickOutside);
  //     }

  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [showSearch]);

  // Focus on input when user opens it
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div ref={containerRef} className="flex max-h-[37.5px] items-center">
      <input
        ref={inputRef}
        type="text"
        className={`mr-1 w-full max-w-80 rounded-md py-[8px] pl-3 text-sm outline transition-all delay-150 ease-linear placeholder:text-gray-500 md:w-80 ${showSearch ? "block" : "hidden"}`}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        placeholder={showSearch ? placeholder : ""}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <span onClick={handleClick}>
        {showSearch ? <CloseIcon /> : <SearchIcon />}
      </span>
      {/* SEARCH RESULTS */}
      {query && showSearch && (
        <SearchResults
          products={searchResults}
          inputRef={inputRef}
          setShowSearch={setShowSearch}
          query={query}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
};

export default SearchInput;
