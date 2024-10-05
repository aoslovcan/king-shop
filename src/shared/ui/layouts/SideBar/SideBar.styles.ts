import {VariantClassesProps} from "shared/utils";

export const SideBarContainer = "fixed top-0 left-0 h-full w-[70%] bg-white z-50 p-6 shadow-base";


export const getPosition = (position : "left" | "right") => {

    const map : VariantClassesProps = {
        "left" : "left-0",
        "right": "right-0"
    }

    return map[position]

}