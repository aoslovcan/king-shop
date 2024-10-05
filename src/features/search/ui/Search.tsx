import { Input } from "shared/ui";
import React, { useEffect } from "react";
import { SearchIcon } from "shared/assets/icons";
import { Controller } from "react-hook-form";
import { useSearch } from "features/search";
import {useDispatch} from "react-redux";
import {handleValue} from "features/search";


export const Search = () => {
    const { searchValue, control, handleSearchChange } = useSearch();  // Hook returning control and the searchValue

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(handleValue(searchValue))
    }, [searchValue]);

    return (
        <Controller
            name="value"
            control={control}
            render={({ field: { value, onChange } }) => (
                <div className="w-[70%] relative">
                    <Input
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="!rounded-2xl h-15"
                        type="search"
                    />
                    <span className="absolute right-[14px] top-[12px] bg-background-secondary p-2 rounded">
                        <SearchIcon />
                    </span>
                </div>
            )}
        />
    );
};
