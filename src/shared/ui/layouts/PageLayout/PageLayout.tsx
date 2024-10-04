import React from "react";
interface PageLayoutProps {
    children : React.ReactNode
}
export const PageLayout = ({children} : PageLayoutProps) => {
    return (
        <>
            <div>Navigation</div>
            <div className="flex flex-col p-6">
                <div>Header</div>
                <div className="flex flex-row mt-[60px]">
                    <div className="w-1/5">
                        This is sidebar
                    </div>
                    <div className="w-4/5">
                        {children}
                    </div>
                </div>
            </div>
        </>

    )
}