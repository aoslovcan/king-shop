import {Button, Checkbox, CustomRangeSlider} from "shared/ui";
import {
    Controller,
    useForm,
} from 'react-hook-form'
import {useCallback, useEffect} from "react";
interface ProductFilterProps {
    handleValue: (data : {min: number, max: number}) => void
    categories: Array<string>
}
export const ProductFilter = ({handleValue, categories}: ProductFilterProps) => {

    const {
        control,
        watch,
        reset,
        formState: { errors, dirtyFields },
    } = useForm({
        defaultValues: {range: "", categories: []},
        mode: 'onChange',
    })

    const range = watch("range");
    const category = watch("categories");

    useEffect(() => {
        if(range || category){
            handleValue && handleValue({range:range, categories: category})
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
                render={({ field: { value, onChange } }) => (
                    <CustomRangeSlider handleValue={onChange} min={50} max={1000}/>
                )}
            />

            {categories?.map((item) => (
            <Controller
                key={item}
                name="categories"
                control={control}
                render={({ field: { value = [], onChange } }) => (
                    <Checkbox
                        isChecked={value?.includes(item)}
                        id={item}
                        label={item}
                        variant="light"
                        classNames="mr-0"
                        handleChecked={(checked) => {
                            const updateCategories = checked
                                ? [...value, item] // Add item if checked
                                : value.filter((id) => id !== item);
                            onChange(updateCategories)
                        }}
                    />
                )}
            />
            ))}

            {(range || category) && <Button size="md" shape="square" onClick={handleReset} label="Reset"/>}
        </div>
    )

}