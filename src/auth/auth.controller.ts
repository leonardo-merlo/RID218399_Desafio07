import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('profile')
export class ProfileController {
  @Get()
  getProfile() {
    return { message: 'Rota protegida' };
  }

  @Get('settings')
  getSettings() {
    return { message: 'Também protegida' };
  }
}
