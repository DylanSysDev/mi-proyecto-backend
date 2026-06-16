import { Body, Controller, Post , Req} from '@nestjs/common';

import { AuthService } from './auth.service';

import { LoginDto } from './dto/login.dto';
import type { Request } from 'express';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

/*  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
*/
    //
  @Post('login')
  login(@Body() loginDto:LoginDto,@Req() req: Request,) {
    return this.authService.login(loginDto,req,);
  }
  @Post('register')
  register(@Body() body: any) {
    return this.authService.register(body);
  }
}




 //   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aut molestiae velit exercitationem dolorem. Nam eius eveniet minus libero dolores deserunt laborum vitae expedita incidunt! Dolore sapiente minima sit iste?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aut molestiae velit exercitationem dolorem. Nam eius eveniet minus libero dolores deserunt laborum vitae expedita incidunt! Dolore sapiente minima sit iste?

