import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import { NextPage } from 'next';
import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Select, SelectField } from '@chakra-ui/react';

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string,
  clientId: number;
  companyId: number;
}

const Hello: NextPage = () => {

  const initValues: MyFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    clientId: 0,
    companyId: 0
  };

  const onSubmit = (values: MyFormValues, actions: FormikHelpers<MyFormValues>) => {
    console.log({ values, actions });

    alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
  }

  return (
    <Flex h="full" w="full" alignItems="center" justifyContent="center">
      <Formik
        initialValues={initValues}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <VStack>
              <Heading>Create new user</Heading>

              <FormControl id="firstName" isRequired>
                <FormLabel>First name</FormLabel>
                <Input name="firstName" type="text" />
                <FormHelperText>First name</FormHelperText>
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl id="lastName" isRequired>
                <FormLabel>Last name</FormLabel>
                <Input name="lastName" type="text" />
                <FormHelperText>Last name</FormHelperText>
                <FormErrorMessage>{errors.lastName}</FormErrorMessage>
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input name="email" type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl id="companyId" isRequired>
                <FormLabel>Company</FormLabel>
                <Select name="companyId" placeholder="Select option">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Select>
                <FormHelperText>Company</FormHelperText>
                <FormErrorMessage>{errors.companyId}</FormErrorMessage>
              </FormControl>

              <FormControl id="clientId" isRequired>
                <FormLabel>Client</FormLabel>

                <Select name="clientId" placeholder="Select option">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Select>

                <FormHelperText>Client</FormHelperText>
                <FormErrorMessage>{errors.clientId}</FormErrorMessage>
              </FormControl>

              <Button type="submit">Submit</Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default Hello;