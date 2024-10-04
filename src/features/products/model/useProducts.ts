import {useGetProductsQuery} from "entities/products";


interface useProductsProps {
    limit: number
    search?: string
    order?: string
    sortBy?: string
}
export const useProducts = ({limit, searchValue, order, sortBy} : useProductsProps) => {



    let params = {limit: limit, search: searchValue, order: order, sortBy: sortBy}
    const {data, isLoading} = useGetProductsQuery(params)


    return{
        data,
        isLoading
    }
}