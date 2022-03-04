import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userWithEmailAlreadyExists = this.usersRepository.findByEmail(email);
    if (userWithEmailAlreadyExists) {
      throw new Error("User with this email already exists");
    }
    const userCrated = this.usersRepository.create({ name, email });
    return userCrated;
  }
}

export { CreateUserUseCase };
