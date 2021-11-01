import { render } from '@testing-library/react';
import React from 'react'
import { InputField } from '../components/common/InputField'
import { Formik } from 'formik';

describe("Input field component", () => {

    it("should render correctly", () => {
        const initialValues = {
            field: ''
        };

        const onSubmit = () => {
            return undefined;
        };

        render(
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <InputField />
            </Formik>
        )
    });

});
