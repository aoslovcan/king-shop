import {useProductList} from "../model/useProductList.ts";
import {Button, Loading, ProductCard, Select} from "shared/ui";
import {ArrowRightIcon} from "shared/assets/icons";
import {trimTextToFullSentence} from "shared/utils";
import {SortOptions} from "../model/consts.ts";
import {ProductFilter} from "features/products";
import {useModal} from "app/modal";
import {ProductDetailPopup} from "./ProductDetails/ProductDetailPopup.tsx";

interface ProductListProps {
    filter: ProductFilter
}

export const ProductList = ({filter}: ProductListProps) => {

    const {modals, closeModal} = useModal()
    const {
        productList,
        handleChange,
        loadMore,
        isLoading,
        handleOpenDetails, currentProduct
    }
        = useProductList({filter})

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-end">
                <Select handleOnChange={handleChange} className="flex-shrink-0 w-[200px]" options={SortOptions}/>
            </div>

            <div className=" flex flex-wrap xl:gap-4 lg:gap-2 md:gap-0 justify-between">
                {
                    productList?.map(({id, thumbnail, title, price, description}) => (
                        <ProductCard
                            key={id}
                            imgSrc={thumbnail}
                            title={title}
                            content={
                                <div className="flex flex-col gap-2">
                                        <span
                                            className="text-2xl font-primary text-background-secondary">{price} €</span>
                                    <p>{trimTextToFullSentence(description, 100)}</p>
                                    <div className="w-full flex justify-center ">
                                        <Button size="md"
                                                onClick={() => handleOpenDetails(id)}
                                                iconAfter={<ArrowRightIcon/>}
                                                label="See more"
                                                variant="contained"
                                                color="primary" shape="square"/>
                                    </div>
                                </div>
                            }
                        />
                    ))
                }
            </div>

            <div className="w-full flex justify-center">
                <Button isLoading={isLoading} onClick={loadMore} label="Load more" variant="contained"
                        color="primary" shape="square"/>
            </div>

            {modals.productDetail && (
                <ProductDetailPopup
                    productData={currentProduct}
                    isOpen={modals.productDetail}
                    onCloseModal={() => closeModal("productDetail")}/>
            )}
        </div>
    )
}