import { GeneralApplicationParams } from './types'

export const mergeRTKCache = (
    currentCache: any,
    newItems: any,
    arg: GeneralApplicationParams
) => {
    if (
        arg.search
    ) {
        currentCache.items = newItems.items
        currentCache.meta = newItems.meta
        return
    }

    const existingItemIds = new Set(currentCache.items.map((item) => item.id))
    const filteredNewItems = newItems.items.filter(
        (item) => !existingItemIds.has(item.id)
    )

    currentCache.items.push(...filteredNewItems)
    currentCache.meta = newItems.meta
}
