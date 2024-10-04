import React from "react";
import {Navigation} from "../Navigation/Navigation.tsx";
import {Header} from "../Header/Header.tsx";
import {PageSideBar} from "../PageSideBar/PageSideBar.tsx";
interface PageLayoutProps {
    children : React.ReactNode
}
export const PageLayout = ({children} : PageLayoutProps) => {
    return (
        <>
            <Navigation/>
            <div className="flex flex-col p-6 pt-16">
                <Header/>
                <div className="flex flex-row mt-[60px] h-full gap-4">
                    <div className="w-1/5 h-[100vh] sticky top-16">
                        <PageSideBar/>
                    </div>
                    <div className="w-4/5 h-full">
                        {children}
                    </div>
                </div>
            </div>
            <div className="bg-background-secondary h-[10vh] w-full items-center justify-center"></div>

        </>

    )
}