import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;
      const userSaved = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(userSaved);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { CreateUserController };
