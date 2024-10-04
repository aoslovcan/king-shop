import { VariantClassesProps, cn } from 'shared/utils'
import { FontWeight, HeadingVariant } from './types'

export const getHeadingSize = (variant: HeadingVariant) => {
    const headingVariant: VariantClassesProps = {
        h1: 'text-3xl',
        h2: 'text-2xl',
        h3: 'text-xl',
        h4: 'text-lg',
        h5: 'text-base',
        h6: 'text-sm',
    }

    return headingVariant[variant]
}

export const getFontVariant = (fontWeight: FontWeight) => {
    const fontVariant: VariantClassesProps = {
        regular: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold',
        black: 'font-black',
    }

    return fontVariant[fontWeight]
}

export const getHeadingClassNames = (
    variant: HeadingVariant,
    classNames: string | undefined,
    fontWeight: FontWeight
) => {
    return cn(
        'gap-6 font-sans text-color-text',
        getHeadingSize(variant),
        getFontVariant(fontWeight),
        classNames
    )
}
