import { Body, Controller, Post } from '@nestjs/common'
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger'


class SigninParams {
    
    @ApiProperty({
        description: '用户名'
    })
    name: string

    @ApiProperty({
        description: '密码'
    })
    password: string
}

@ApiTags('identity')
@Controller('identity')
export class IdentityController {
    
    @Post("signin")
    @ApiResponse({ status: 201, description: '用户登入系统成功'})
    @ApiResponse({ status: 401, description: '认证失败, 无法提供身份信息'})
    signin(@Body() param: SigninParams): string {
        return JSON.stringify(param)
    }
}