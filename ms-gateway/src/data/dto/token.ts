import { ApiProperty } from '@nestjs/swagger'
import { MSUserBase } from '../dao/identity'

/**
 * 当前用户签名的基础数据
 */
export class TokenData extends MSUserBase{
    // 签发时间
    issuanceTime: number
    // 失效时间
    expirationTime: number
    // 当前登入的ip地址
    ip: string
}

/**
 * 当前用户的签名信息
 */
export class Token {

    @ApiProperty({
        description: 'TokenData 的base64 编码字段'
    })
    data: string 
   
    // 签名信息
    @ApiProperty({
        description: '用户的签名信息'
    })
    signature: string
}

