import {ProductSort} from "./types.ts";

export const SortOptions = [
    {
        id: 1,
        label: "Highest price",
        value: ProductSort.HIGHEST_PRICE
    },
    {
        id: 2,
        label: "Lowest price",
        value: ProductSort.LOWEST_PRICE
    },
    {
        id: 3,
        label: "A-Z",
        value: ProductSort.ASC
    },
    {
        id: 3,
        label: "Z-A",
        value: ProductSort.DESC
    },

]