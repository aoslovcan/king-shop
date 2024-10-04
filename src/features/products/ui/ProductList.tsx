import {useProductList} from "../model/useProductList.ts";
import {Button, ProductCard, Select} from "shared/ui";
import {ArrowRightIcon} from "shared/assets/icons";
import {trimTextToFullSentence} from "shared/utils";
import {SortOptions} from "../model/consts.ts";

export const ProductList = () => {

    const {productList, handleChange} = useProductList()

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-end">
                <Select handleOnChange={ handleChange} className="flex-shrink-0 w-[200px]" options={SortOptions} />
            </div>

            <div className=" flex flex-wrap gap-4 justify-between">
                {
                    productList?.map(({id, thumbnail, title, price, description}) => (
                        <ProductCard
                            key={id}
                            imgSrc={thumbnail}
                            title={title}
                            content={
                                <div className="flex flex-col gap-2">
                                    <span className="text-2xl font-primary text-background-secondary">{price} €</span>
                                    <p>{trimTextToFullSentence(description, 100)}</p>
                                    <div className="w-full flex justify-center ">
                                        <Button size="md" iconAfter={<ArrowRightIcon/>} label="See more"
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
                <Button label="Load more" variant="contained" color="primary" shape="square"/>
            </div>
        </div>

    )
}