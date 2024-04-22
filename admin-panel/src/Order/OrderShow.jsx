import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
} from 'react-admin';

const OrdersShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="status" />
      <TextField source="content" />
    </SimpleShowLayout>
  </Show>
);

export default OrdersShow;
