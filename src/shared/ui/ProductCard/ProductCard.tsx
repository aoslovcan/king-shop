import React from "react";
import {Heading2} from "../Heading";

interface CardProps {
    imgSrc: string,
    title?: string,
    content?: React.ReactNode
}

export const ProductCard = ({imgSrc, title, content}: CardProps) => {
    return (
        <div className="flex flex-col gap-2 xl:max-w-[23%] lg:max-w-[23%] md:max-w-[30%] sm:max-w-[33%] overflow-hidden font-primary rounded-md p-2">
            {/* Product Image */}
            <img src={imgSrc} alt="" className="w-full rounded-lg h-64 object-cover bg-background-primary"/>

            <div>
                {title ? (<Heading2 label={title}/>) : null}
                {content && content}
            </div>

        </div>
    )
}