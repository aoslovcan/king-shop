import {ProductFilter, useProducts} from "features/products";
import { useCallback, useMemo, useState } from "react";
import {Option} from "shared/utils";
import {ProductSort} from "./types.ts";
import {useSelector} from "react-redux";
import {useModal} from "app/modal";

interface useProductListProps {
    filter: ProductFilter
}

export const useProductList = ({filter} : useProductListProps) => {
    const [currentProduct, setCurrentProduct] = useState(null)
    const [sortByValue, setSortByValue] = useState<string | undefined>();
    const [order, setOrder] = useState<ProductSort.ASC | ProductSort.DESC | undefined>();
    const [limit, setLimit] = useState<number>(20)

    const searchByValue = useSelector(
        (state) => state?.searchReducer.searchValue
    )

    const { data, isLoading } = useProducts({ limit: limit, sortBy: sortByValue, order: order, search: searchByValue });

    const {openModal} = useModal()
    const productList = useMemo(() => {
        if(filter?.range.length){
            const min = filter.range[0]
            const max = filter.range[1]

            return data?.products.filter(({price}) => price >= min && price <=max )
        }

        if(filter?.categories.length){
            return data?.products.filter(({category}) => filter.categories.includes(category) )
        }
        return data?.products || [];
    }, [data, filter]);

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

    const handleOpenDetails = useCallback((id: number) => {
        if(id && productList){
            setCurrentProduct(productList.filter((item) => item.id === id))
            openModal("productDetail")

        }
    },[productList])

    return {
        handleOpenDetails,
        productList,
        currentProduct,
        handleChange,
        sortByValue,
        order,
        loadMore,
        isLoading
    };
};
