export interface GeneralApplicationParams  {
    sortBy?: string
    order?: string
    search?: string
    limit: number
}

export interface DataWithMeta<T> {
    /** The list of items. */
    items: T[]
    /** The metadata associated with the data. */
    meta: Meta
}

export interface Meta {
    /** The current page number. */
    total: number
    /** The limit of items per page. */
    skip: number
    /** The total number of items. */
    limit: number
    /** The total number of pages. */
}

export type Product = {
    id: number,
    title: string,
    description: string
    category: string,
    price: number
    tags: Array<string>
    brand: string,
    images: Array<string>
    thumbnail: Array<string>
    shippingInformation: string
}