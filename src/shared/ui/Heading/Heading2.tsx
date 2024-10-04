import React from "react"
import { HeadingProps } from './types'
import { getHeadingClassNames } from './styles'

export const Heading2 = ({
    label = 'Heading 2',
    classNames,
    weight = 'regular',
}: HeadingProps) => {
    return (
        <h2 className={getHeadingClassNames('h2', classNames, weight)}>
            {label}
        </h2>
    )
}
