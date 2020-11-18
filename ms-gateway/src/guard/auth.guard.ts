import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Request } from 'express';
import { Observable } from 'rxjs'
import { Token } from 'src/data/dto/token';

import hmacSHA512 from 'crypto-js/hmac-sha512';

/**
 * 负责请求的鉴权
 */
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>()
    const tokenStr = request.headers.authorization.replace('MS-TOKEN', '')

    // 忽略当前的地址
    const ignores = [
        'POST:/auth/signin'
    ]

    const url =`${request.method.toUpperCase()}:${request.url}`
    if (ignores.includes(url)) return true;

    try {
        // 如果登入信息是签名的信息,那么就返回，否则就拦截
        const token: Token = JSON.parse(btoa(tokenStr))
        const hash = hmacSHA512(token.data, process.env.HMAC_KEY)
        // 验证用户的签名
        return hash === token.signature
    } catch (error) {
        return false;
    }
  }
}