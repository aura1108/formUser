import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserFormService } from "./userForm.service";
import { UserFormControllerBase } from "./base/userForm.controller.base";

@swagger.ApiTags("userForms")
@common.Controller("userForms")
export class UserFormController extends UserFormControllerBase {
  constructor(protected readonly service: UserFormService) {
    super(service);
  }
}
