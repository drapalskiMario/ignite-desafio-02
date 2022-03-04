import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExists = this.usersRepository.findById(user_id);
    if (userExists) {
      this.usersRepository.turnAdmin(userExists);
      return userExists;
    }
    throw new Error("User with this id not exists");
  }
}

export { TurnUserAdminUseCase };
