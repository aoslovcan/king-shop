import { HeadingProps } from './types'
import { getHeadingClassNames } from './styles'

export const Heading6 = ({
    label = 'Heading 6',
    classNames,
    weight = 'regular',
}: HeadingProps) => {
    return (
        <h6 className={getHeadingClassNames('h6', classNames, weight)}>
            {label}
        </h6>
    )
}
