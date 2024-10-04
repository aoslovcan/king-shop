import {Input} from "shared/ui";
import {SearchIcon} from "shared/assets/icons";

export const Header = () => {
    return(
        <div className="w-full h-[30vh] bg-background-secondary rounded-md flex items-center justify-center mt-6">
            <div className="w-[70%] relative">
                <Input className="!rounded-2xl h-15" name="" type="search" value=""/>
                <span className="absolute right-[14px] top-[12px] bg-background-secondary p-2 rounded"><SearchIcon/></span>
            </div>
        </div>
    )
}