import {ProductList} from "features/products";
import {PageSideBar} from "../../shared/ui/layouts/PageSideBar/PageSideBar.tsx";
import React, {useState} from "react";
import {FilterIcon} from "../../shared/assets/icons";
import {SideBar} from "../../shared/ui";
import {ProductFilter} from "../../widget";

export const HomePage = () => {

    const [filterValue, setFilterValue] = useState<string | undefined>();
    const [isSidebar, setIsSideBar] = useState(false);

    return (
        <>

            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col mt-[60px] h-full gap-4">
                <div className="w-1/5 h-[100vh] sticky top-16 xl:block lg:block md:block hidden">
                    <PageSideBar handleFilterValue={setFilterValue}/>
                </div>


                <div className="w-4/5 h-full sm:w-full xs:w-full">
                    <span onClick={() => setIsSideBar(true)} className="block lg:hidden xl:hidden md:hidden cursor-pointer"><FilterIcon/></span>
                    <ProductList filter={filterValue}/>
                </div>
            </div>

            {isSidebar && (<SideBar position="left" isOpen={isSidebar} handleClose={() => setIsSideBar(false)}>
                <ProductFilter handleValue={setFilterValue}/>
            </SideBar>)}


        </>


    )
};
