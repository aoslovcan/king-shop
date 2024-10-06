import {useGetProductsQuery, useSearchForProductQuery} from "entities/products";


interface useProductsProps {
    limit: number
    search?: string
    order?: string
    sortBy?: string
}

export const useProducts = ({limit, search, order, sortBy}: useProductsProps) => {

    const params = {limit: limit, order: order, sortBy: sortBy}

    const {data, isLoading} = useGetProductsQuery(params)
    const {data: searchedData} = useSearchForProductQuery({q: search}, {skip: !search})

    return {
        data: search ? searchedData : data,
        isLoading
    }
}