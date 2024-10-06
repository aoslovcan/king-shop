import {useGetCategoriesQuery} from "../api/productApi.ts";
import {useMemo} from "react";

export const useCategories = () => {
    const {data} = useGetCategoriesQuery()

    const categories = useMemo(() => {
        return data && data.length ? data : []
    }, [data])


    return{
        categories
    }
}