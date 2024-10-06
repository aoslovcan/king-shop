import {LoginFormFields, LoginFormLabels, LoginInputPlaceholders} from "./types.ts";

export const LoginInputFields = [
    {
        id: 1,
        name: LoginFormFields.USERNAME,
        label: LoginFormLabels.USERNAME,
        placeholder: LoginInputPlaceholders.USERNAME
    },
    {
        id: 2,
        name: LoginFormFields.PASSWORD,
        label: LoginFormLabels.PASSWORD,
        placeholder: LoginInputPlaceholders.PASSWORD
    }
];