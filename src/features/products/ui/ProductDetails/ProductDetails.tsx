import React from "react";
import {Product} from "entities/products";
import {Button, Text} from "shared/ui";
import {Heading2} from "shared/ui/Heading";
import {CartIcon} from "shared/assets/icons";
import {useCallback} from "react";
import {useCartContext} from "widget/Cart"

interface ProductDetailsProps {
    data: Product
}

export const ProductDetails = ({data} : ProductDetailsProps) => {

    const { addToCart } = useCartContext();
    const {title, price, category, images, shippingInformation, availabilityStatus, brand, description} = data

    const handleAdd = useCallback(() => {
        if (data) {
           addToCart(data)
        }
    }, [data])
    return(
        <div className="flex flex-row align-center gap-6">
            <div className="w-1/2">
               <img className="border p-6 bg-[#EEEDF0] rounded-md " src={images[0]} alt={title}/>
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <span className="text-color-primaryText text-xs opacity-70 capitalize">{category}</span>
                    <span className="text-color-primaryText text-xs uppercase tracking-widest">{brand}</span>

                    <Heading2 label={title}/>
                    <span
                        className="text-3xl font-primary font-bold text-background-secondary">{price} €</span>

                    <Text className="text-color-primaryText text-sm font-semibold" color="primary" text="About:"
                          variant="contained"/>
                    <Text className="text-color-primaryText text-sm font-normal" color="primary" text={description}
                          variant="contained"/>
                    <span className="text-color-primaryText opacity-70 uppercase">{availabilityStatus}</span>

                    <Text className="text-color-primaryText font-semibold" color="primary" text={shippingInformation}
                          variant="contained"/>
                </div>


                <div className="w-full flex justify-center">
                    <Button size="md"
                            onClick={handleAdd}
                            iconAfter={<CartIcon/>}
                            label="Add to cart"
                            variant="contained"
                            color="primary" shape="square"/>
                </div>

            </div>

        </div>
    )
}