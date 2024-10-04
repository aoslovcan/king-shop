import {ProductFilter} from "widget";

export const PageSideBar = ({handleFilterValue}: { handleFilterValue: (value: string) => void }) => {
    return (
        <div className="border-r border-green h-[100vh] px-4 flex flex-col gap-2">
            <ProductFilter handleValue={handleFilterValue} categories={["beauty", "fragrances", "furniture"]}/>
        </div>
    )
}