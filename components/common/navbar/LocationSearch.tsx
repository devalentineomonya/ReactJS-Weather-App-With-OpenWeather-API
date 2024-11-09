"use client";
import React, { useState, useEffect, KeyboardEvent } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import citySearchHandler from "./citySearchAction";
import {LocationInfo} from "@/types/location"
import { SearchIcon } from "lucide-react";

const LocationSearch = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [citySuggestions, setCitySuggestions] = useState<LocationInfo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!value) {
      setCitySuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await citySearchHandler(value);
        if (Array.isArray(data)) {
          setCitySuggestions(data);
        }
      } catch (error) {
        console.error("Error fetching city data:", error);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  const handleSelect = (city:LocationInfo ) => () => {
    setValue(city);
    setOpen(false);
    console.log("Selected city:", city);
  };

  const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value) {
      handleSelect(value)();
    }
  };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="md:bg-gray-50 md:hover:bg-gray-100 md:dark:bg-gray-700 h-8 max-md:mr-3 rounded-md font-grotesk text-xs flex items-center justify-end md:justify-between w-full max-w-12 md:max-w-96 md:pl-5 px-1.5 cursor-pointer dark md:dark:hover:bg-gray-600"
      >
        <span className="max-md:hidden">Search Location ...</span>
        <kbd className="max-md:hidden pointer-events-none inline-flex h-5 select-none max-md:justify-end items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
        <SearchIcon size={16} className="inline-block md:hidden" />
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a city..."
          value={value}
          onValueChange={setValue}
          onKeyDown={handleKeyDown}
        />
        <CommandList>
          {loading ? (
            <CommandEmpty>Loading...</CommandEmpty>
          ) : (
            <CommandGroup heading="Suggestions">
              {citySuggestions.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : (
                citySuggestions.map((city, i) => (
                  <CommandItem
                    key={i}
                    onSelect={handleSelect(city)}
                  >
                    {city.display_name}
                  </CommandItem>
                ))
              )}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default LocationSearch;
