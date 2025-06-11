import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserFormCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Pan" source="pan" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
