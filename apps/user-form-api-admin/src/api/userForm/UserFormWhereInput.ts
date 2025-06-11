import { StringFilter } from "../../util/StringFilter";

export type UserFormWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  pan?: StringFilter;
  phone?: StringFilter;
};
