import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);
    if (userExists) {
      if (userExists.admin) {
        return this.usersRepository.list();
      }
    }
    throw new Error("User not exists or not is admin");
  }
}

export { ListAllUsersUseCase };
