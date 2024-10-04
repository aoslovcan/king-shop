import {useGetProductsQuery} from "entities/products";


interface useProductsProps {
    limit: number
    search?: string
    orderBy?: string
}
export const useProducts = ({limit, searchValue, orderBy} : useProductsProps) => {

    let params = {limit: limit, search: searchValue, orderBy: orderBy}
    const {data, isLoading} = useGetProductsQuery(params)


    return{
        data,
        isLoading
    }
}