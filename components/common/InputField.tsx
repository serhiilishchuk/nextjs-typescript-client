import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik"
import React, { FC } from "react"

interface ICustomFieldProps {
    label: string;
}

export const InputField: FC<FieldHookConfig<string> & ICustomFieldProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <FormControl isInvalid={meta.touched && !!meta.error}>
            <FormLabel>
                {label}
            </FormLabel>
            <Input {...field} />
        </FormControl>
    );
}

// Case 2:

// interface ICustomFieldProps extends JSX.IntrinsicElements['input'] {
//     label: string;
// }

//export const InputField: FC<ICustomFieldProps> = ({ label, ...props }) => { }