import { UserForm as TUserForm } from "../api/userForm/UserForm";

export const USERFORM_TITLE_FIELD = "name";

export const UserFormTitle = (record: TUserForm): string => {
  return record.name?.toString() || String(record.id);
};
