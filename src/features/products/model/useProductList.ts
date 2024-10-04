import { useProducts } from "features/products";
import { useCallback, useMemo, useState } from "react";
import {Option} from "shared/utils";
import {ProductSort} from "./types.ts";

export const useProductList = () => {
    const [sortByValue, setSortByValue] = useState<string | undefined>();
    const [order, setOrder] = useState<ProductSort.ASC | ProductSort.DESC | undefined>();
    const { data } = useProducts({ limit: 20, sortBy: sortByValue, order: order });

    const productList = useMemo(() => {
        return data?.products || [];
    }, [data]);

    const handleChange = useCallback((value: Option) => {
        switch (value.value) {
            case ProductSort.HIGHEST_PRICE:
                setSortByValue("price");
                setOrder(ProductSort.DESC);
                break;
            case ProductSort.LOWEST_PRICE:
                setSortByValue("price");
                setOrder(ProductSort.ASC);
                break;
            case ProductSort.ASC:
                setSortByValue("title");
                setOrder(ProductSort.ASC);
                break;
            case ProductSort.DESC:
                setSortByValue("title");
                setOrder(ProductSort.DESC);
                break;
            default:
                break;
        }
    }, []);

    return {
        productList,
        handleChange,
        sortByValue, // Include this if needed for display or further manipulation
        order // Include this if needed for display or further manipulation
    };
};
