import {useForm} from "react-hook-form";

export const useSearch = () => {
    const {
        control,
        watch,
        setValue,
    } = useForm({
        defaultValues: {value: ""},
        mode: 'onChange',
    })


    const searchValue = watch("value");

    const handleSearchChange = (inputValue: string) => {
        if (inputValue.length >= 2 || inputValue.length === 0) {
            // Use setValue to update the form's value state
            setValue('value', inputValue);
        }
    };

    return{
        control,
        searchValue,
        handleSearchChange
    }
}