export interface CheckboxProps {
    id: string
    isChecked: boolean
    label?: string | React.ReactNode
    checkedIcon?: React.ReactNode
    variant?: 'light' | 'dark'
    classNames?: string | undefined
    labelClassNames?: string | undefined
    handleChecked?: (event: boolean) => boolean | void
    disabled?: boolean

}
