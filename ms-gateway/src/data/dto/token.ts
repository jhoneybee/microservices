/**
 * 当前用户签名的基础数据
 */
export class TokenData {
    // 签发时间
    issuanceTime: number
    // 失效时间
    expirationTime: number
    
}

/**
 * 当前用户的签名信息
 */
export class Token {
    data: string    
    // 签名信息
    signature: string
}

