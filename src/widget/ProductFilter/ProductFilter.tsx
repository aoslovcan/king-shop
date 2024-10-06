import React from "react";
import {Button, Checkbox, CustomRangeSlider} from "shared/ui";
import {
    Controller,
    useForm,
} from 'react-hook-form'
import {useCallback, useEffect} from "react";
import {useCategories} from "entities/products";
import {ProductFilter} from "features/products";
interface ProductFilterProps {
    handleValue: (data : ProductFilter) => void
}
export const ProductFilter = ({handleValue}: ProductFilterProps) => {

    const {categories} = useCategories()

    const {
        control,
        watch,
        reset,
    } = useForm({
        defaultValues: {range: "", categories: []},
        mode: 'onChange',
    })

    const range = watch("range");
    const category = watch("categories");

    useEffect(() => {
        if(range || category){
            if(handleValue){
                handleValue({range:range, categories: category})
            }
        }
    }, [range, category]);

    const handleReset = useCallback(() => {
        reset()
    }, [])

    return(
        <div className="flex flex-col gap-4">
            <h2>Filter</h2>

            <Controller
                name="range"
                control={control}
                render={({ field: { onChange } }) => (
                    <CustomRangeSlider handleValue={onChange} min={50} max={1000}/>
                )}
            />

            <div className="overflow-y-auto">
                {categories?.map(({name, slug}) => (
                    <Controller
                        key={slug}
                        name="categories"
                        control={control}
                        render={({ field: { value = [], onChange } }) => (
                            <Checkbox
                                isChecked={value?.includes(slug)}
                                id={slug}
                                label={name}
                                variant="light"
                                classNames="mr-0"
                                handleChecked={(checked) => {
                                    const updateCategories = checked
                                        ? [...value, slug] // Add item if checked
                                        : value.filter((id) => id !== slug);
                                    onChange(updateCategories)
                                }}
                            />
                        )}
                    />
                ))}

            </div>


            {(range || category.length > 0) && (
                <Button size="md" shape="square" onClick={handleReset} label="Reset" />
            )}
        </div>
    )

}