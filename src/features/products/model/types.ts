export enum ProductSort {
    HIGHEST_PRICE = "highest-price",
    LOWEST_PRICE = "lowest-price",
    ASC = "asc",
    DESC = "desc"
}

export type ProductFilter = {
    categories: Array<string>
    range: Array<number>
}