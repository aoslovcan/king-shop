import React from "react";
import {Navigation} from "../Navigation/Navigation.tsx";
interface PageLayoutProps {
    children : React.ReactNode
}
export const PageLayout = ({children} : PageLayoutProps) => {
    return (
        <>
            <Navigation/>
            <div className="flex flex-col p-6 pt-16">
                <div>Header</div>
                <div className="flex flex-row mt-[60px] h-full gap-4">
                    <div className="w-1/5 h-[100vh]">
                        This is sidebar
                    </div>
                    <div className="w-4/5 h-full">
                        {children}
                    </div>
                </div>
            </div>
        </>

    )
}