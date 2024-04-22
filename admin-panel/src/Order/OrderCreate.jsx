import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
} from 'react-admin';

const OrdersCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
    <NumberInput source="id" />
      <TextInput source="status" />
      <TextInput source="content" />
    </SimpleForm>
  </Create>
);

export default OrdersCreate;
