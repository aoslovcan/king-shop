import React from "react"
import { HeadingProps } from './types'
import { getHeadingClassNames } from './styles'

export const Heading1 = ({
    label = 'Heading 1',
    classNames,
    weight = 'regular',
}: HeadingProps) => {
    return (
        <h1 className={getHeadingClassNames('h1', classNames, weight)}>
            {label}
        </h1>
    )
}
