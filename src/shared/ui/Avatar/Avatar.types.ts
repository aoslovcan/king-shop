export interface AvatarProps {
    size: Size
    imgSrc?: string
    nameInitials?: string
    className?: string | undefined
    textClassName?: string | undefined
    bgColor?: string
}

export type Size = 'sm' | 'lg'
export type Variant = 'rounded' | 'square'
