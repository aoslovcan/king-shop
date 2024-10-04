import { GeneralApplicationParams } from './types'

export const mergeRTKCache = (
    currentCache: any,
    newItems: any,
    arg: GeneralApplicationParams
) => {
    if (
        arg.sortBy ||
        arg.order || arg.limit
    ) {
        currentCache.products = newItems.products
        currentCache.meta = newItems.meta
        return
    }

    const existingItemIds = new Set(currentCache.products.map((item) => item.id))
    const filteredNewItems = newItems.products.filter(
        (item) => !existingItemIds.has(item.id)
    )

    currentCache.products.push(...filteredNewItems)
    currentCache.meta = newItems.meta
}
