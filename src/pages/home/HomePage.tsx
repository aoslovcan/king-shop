import {ProductList} from "features/products";
import {PageSideBar} from "../../shared/ui/layouts/PageSideBar/PageSideBar.tsx";
import React, {useState} from "react";

export const HomePage = () => {

    const [filterValue, setFilterValue] = useState<string | undefined>();

    return (

        <div className="flex flex-row mt-[60px] h-full gap-4">
            <div className="w-1/5 h-[100vh] sticky top-16">
                <PageSideBar handleFilterValue={setFilterValue}/>
            </div>
            <div className="w-4/5 h-full">
                <ProductList filter={filterValue}/>
            </div>
        </div>

)

};
