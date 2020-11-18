import { Controller, Get } from '@nestjs/common';




@Controller('auth')
export class AuthController {
    
    @Get("signin")
    signin(): string {
        return 'This action returns all cats';
    }
}