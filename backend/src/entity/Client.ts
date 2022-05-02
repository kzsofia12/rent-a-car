import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    idNumber: string;

    @Column()
    phoneNumber: string;
}