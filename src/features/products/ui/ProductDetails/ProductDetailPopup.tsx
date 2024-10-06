import React from "react"
import {Modal} from "shared/ui";
import {ProductDetails} from "./ProductDetails.tsx";
import {Product} from "entities/products";

interface ProductDetailPopupProps {
    isOpen: boolean
    onCloseModal: () => void
    productData: Product
}

export const ProductDetailPopup = ({isOpen, onCloseModal, productData}: ProductDetailPopupProps) => {

    return (
        <Modal
            className="fixed left-2/4 top-2/4 z-[9999] max-h-[90vh] max-w-[1200px] -translate-x-2/4 -translate-y-2/4 transform"
            content={
                <ProductDetails
                    data={productData?.[0]}/>}
            isOpen={isOpen}
            onCloseModal={onCloseModal}/>
    )
}