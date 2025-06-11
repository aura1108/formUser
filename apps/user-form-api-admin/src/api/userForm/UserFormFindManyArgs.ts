import { UserFormWhereInput } from "./UserFormWhereInput";
import { UserFormOrderByInput } from "./UserFormOrderByInput";

export type UserFormFindManyArgs = {
  where?: UserFormWhereInput;
  orderBy?: Array<UserFormOrderByInput>;
  skip?: number;
  take?: number;
};
