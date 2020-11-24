import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

/**
 * 用户的性别信息
 */
enum Sex {
    // 男
    MAN,
    // 女
    WOMAN,
    // 保密
    SECRET
}

/**
 * 用户基础信息
 */
@Entity()
export class MSUserBase {

    @PrimaryGeneratedColumn()
    id: number

    /**
     * 邮箱
     */
    @Column()
    email: string

    /**
     * 电话号码
     */
    @Column()
    phone: string

    /**
     * 用户昵称
     */
    @Column()
    nickname: string

    /**
     * 用户密码
     */
    @Column()
    password: string

    /**
     * 当前用户选择的语言
     */
    @Column()
    i18n: string

    /**
     * 用户性别
     */
    @Column('int')
    sex: Sex

    /**
     * 创建日期
     */
    @Column()
    createAt: Date
}