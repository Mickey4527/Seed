import { Controller, Post, Req, Res } from '@nestjs/common';

@Controller('/api/login')
export class LoginController {
  constructor() {}

  @Post()
  async authLogin(@Req() req, @Res() res) {
    try {
      const { email, password } = req.body;

      if (email === 'completed@mail.com' && password === '123456') {
        res.status(200).send({ message: 'Login success' });
      } else {
        res.status(401).send({ message: 'Email or password is incorrect' });
      }
    } catch (e) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }
}
