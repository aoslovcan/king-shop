import React from "react"
import { HeadingProps } from './types'
import { getHeadingClassNames } from './styles'

export const Heading3 = ({
    label = 'Heading 3',
    classNames,
    weight = 'regular',
}: HeadingProps) => {
    return (
        <h3 className={getHeadingClassNames('h3', classNames, weight)}>
            {label}
        </h3>
    )
}
