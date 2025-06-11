import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserFormEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Pan" source="pan" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
