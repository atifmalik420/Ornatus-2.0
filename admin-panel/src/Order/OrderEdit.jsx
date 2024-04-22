import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
} from 'react-admin';

const OrdersEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="status" />
      <TextInput source="content" />
    </SimpleForm>
  </Edit>
);

export default OrdersEdit;
