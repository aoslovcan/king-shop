import { createContext } from 'react'
import { ModalContextProps } from '../provider/types'

export const ModalContext = createContext<ModalContextProps | undefined>(
    undefined
)
