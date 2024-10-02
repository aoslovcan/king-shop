import { HeadingProps } from './types'
import { getHeadingClassNames } from './styles'

export const Heading4 = ({
    label = 'Heading 4',
    classNames,
    weight = 'regular',
}: HeadingProps) => {
    return (
        <h4 className={getHeadingClassNames('h4', classNames, weight)}>
            {label}
        </h4>
    )
}
