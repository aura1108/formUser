import { Module } from "@nestjs/common";
import { UserFormModuleBase } from "./base/userForm.module.base";
import { UserFormService } from "./userForm.service";
import { UserFormController } from "./userForm.controller";
import { UserFormResolver } from "./userForm.resolver";

@Module({
  imports: [UserFormModuleBase],
  controllers: [UserFormController],
  providers: [UserFormService, UserFormResolver],
  exports: [UserFormService],
})
export class UserFormModule {}
