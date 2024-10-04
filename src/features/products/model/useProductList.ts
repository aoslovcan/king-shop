import {useProducts} from "features/products";
import {useMemo} from "react";

export const useProductList = () => {
    const {data} = useProducts({limit: 20})

    const productList = useMemo(() => {
        return data && data?.products ? data.products : []
    }, [data])


    return{
        productList
    }
}