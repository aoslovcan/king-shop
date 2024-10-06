import React from "react";
import {Navigation} from "../Navigation/Navigation.tsx";
import {Header} from "../Header/Header.tsx";
interface PageLayoutProps {
    children : React.ReactNode
}
export const PageLayout = ({children} : PageLayoutProps) => {

    return (
        <>
            <Navigation/>
            <div className="flex flex-col p-6 pt-16">
                <Header/>
                {children}
            </div>
            <div className="bg-background-secondary h-[10vh] w-full items-center justify-center"></div>
        </>

    )
}