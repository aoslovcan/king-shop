import {GeneralApplicationParams, Product} from './types'

export const mergeRTKCache = (
    currentCache: {products : Array<Product>},
    newItems: {products : Array<Product>},
    arg: GeneralApplicationParams
) => {
    if (
        arg.sortBy ||
        arg.order || arg.limit
    ) {
        currentCache.products = newItems.products
        return
    }

    const existingItemIds = new Set(currentCache.products.map((item) => item.id))
    const filteredNewItems = newItems.products.filter(
        (item) => !existingItemIds.has(item.id)
    )

    currentCache.products.push(...filteredNewItems)
}
