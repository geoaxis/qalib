import { useState } from "react";
import {
  Create,
  Datagrid,
  DateField,
  Edit,
  EditButton,
  List,
  required,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";


const defaultQuery = "listTemplates";


export const TemplateList = (props) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <List {...props}>
      <Datagrid>
        <TextField
          source="id"
          sortable={false}
        />
        <TextField source="name" sortable={false} />
        <DateField source="createdAt" sortable={false} />
        <DateField source="updatedAt" sortable={false} />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const TemplateShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="template" />

      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

const validateName = [required()];
const validateTemplate = [required()];


export const TemplateEdit = (props) => (
  <Edit
    {...props}
    transform={(data) => {
      const { templates, ...rest } = data;
      return rest;
    }}
  >
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" validate={validateName} />
      <TextInput source="template" validate={validateName} />

    </SimpleForm>
  </Edit>
);

export const TemplateCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={validateName} />
      <TextInput source="template" validate={validateTemplate} />
    </SimpleForm>
  </Create>
);