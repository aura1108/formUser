import * as graphql from "@nestjs/graphql";
import { UserFormResolverBase } from "./base/userForm.resolver.base";
import { UserForm } from "./base/UserForm";
import { UserFormService } from "./userForm.service";

@graphql.Resolver(() => UserForm)
export class UserFormResolver extends UserFormResolverBase {
  constructor(protected readonly service: UserFormService) {
    super(service);
  }
}
