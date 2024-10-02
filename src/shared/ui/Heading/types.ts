import React from "react";
export interface HeadingProps {
    label: string | React.ReactNode
    classNames?: string | undefined
    weight?: FontWeight
}

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type FontWeight = 'regular' | 'medium' | 'bold' | 'black' | 'semibold'
