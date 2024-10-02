import { HeadingProps } from './types'
import { getHeadingClassNames } from './styles'

export const Heading5 = ({
    label = 'Heading 5',
    classNames,
    weight = 'regular',
}: HeadingProps) => {
    return (
        <h5 className={getHeadingClassNames('h5', classNames, weight)}>
            {label}
        </h5>
    )
}
