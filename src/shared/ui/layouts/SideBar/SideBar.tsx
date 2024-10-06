import React from "react";
import {cn} from "shared/utils";
import {getPosition, SideBarContainer} from "./SideBar.styles.ts";
import {CloseIcon} from "shared/assets/icons";
interface SideBarProps {
    children: React.ReactNode
    position: "left" | "right"
    isOpen: boolean
    handleClose: () => void
}

export const SideBar = ({children, position, isOpen, handleClose}: SideBarProps) => {


    if (!isOpen) return null; // If not open, do not render the sidebar

    return(
        <div className={cn(SideBarContainer, getPosition(position))}>
            <div onClick={handleClose} className="w-full flex justify-end cursor-pointer"><CloseIcon/></div>
            {children}
        </div>
    )
}