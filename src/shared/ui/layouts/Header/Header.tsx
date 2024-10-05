import {Search} from "features/search";

export const Header = () => {
    return(
        <div className="w-full h-[30vh] bg-background-secondary rounded-md flex items-center justify-center mt-6">
            <Search />
        </div>
    )
}