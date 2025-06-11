import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFormServiceBase } from "./base/userForm.service.base";

@Injectable()
export class UserFormService extends UserFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
