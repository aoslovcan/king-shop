import React from "react";
import {Heading2} from "shared/ui/Heading";
import {Text} from "shared/ui";
import {TrashIcon} from "shared/assets/icons";
import {useCartContext} from "widget/Cart";

export const Cart = () => {

    const {cartData, totalPrice, removeFromCart} = useCartContext()

    return(
        <div className="backdrop-blur-xs inset-0 flex flex-col gap-2 overflow-y-auto p-6 h-[90vh]">
            {cartData && cartData.length ? cartData?.map(({id, thumbnail, title, price}) => (
                <div key={id} className="flex flex-row gap-2 items-center justify-between w-full border-b">
                    <div className="flex flex-row items-center gap-2 p-4">
                        <img className="w-24 h-24 bg-background-secondary" src={thumbnail} alt={title}/>
                        <div>
                            <Heading2 label={title}/>
                            <span className="text-3xl font-primary font-bold text-background-secondary">
                {price} €
            </span>
                        </div>
                    </div>

                    <div className="flex flex-row justify-end">
                        <span onClick={() => removeFromCart(id)} className="cursor-pointer"><TrashIcon/></span>
                    </div>
                </div>
            )) : <Text className="text-2xl font-primary font-normal text-color-primaryText text-center" text="No items" variant="contained"/>}

            {cartData && cartData.length ? (<Text className="text-3xl font-primary font-bold text-background-secondary" text={`Ukupno: ${totalPrice} €`}
                  variant="contained"/>) : null}
        </div>
    )
}