import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto";

@Injectable()
export class UserService {
  users: CreateUserDto[] = []
  create(user: CreateUserDto) {
    this.users.push(user)
  }
  getAll() {
    return this.users
  }
}