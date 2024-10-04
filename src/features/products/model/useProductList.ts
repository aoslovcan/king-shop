import { useProducts } from "features/products";
import { useCallback, useMemo, useState } from "react";
import {Option} from "shared/utils";
import {ProductSort} from "./types.ts";

export const useProductList = () => {
    const [sortByValue, setSortByValue] = useState<string | undefined>();
    const [order, setOrder] = useState<ProductSort.ASC | ProductSort.DESC | undefined>();
    const [limit, setLimit] = useState<number>(20)
    const { data, isLoading } = useProducts({ limit: limit, sortBy: sortByValue, order: order });

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

    const loadMore = useCallback(() => {
        setLimit(limit + 20)
    }, [limit])

    return {
        productList,
        handleChange,
        sortByValue,
        order,
        loadMore,
        isLoading
    };
};
