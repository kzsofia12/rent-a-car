import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export enum status {
    FREE = "szabad",
    RENTED = "kikölcsönzött",
    SCRAPPED = "selejtezett"
}

export enum type {
    CAR = "auto",
    WATERCRAFT = "vizijármű",
}

@Entity()
export class Vehicle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: type,
        default: type.CAR
    })
    type: type;

    @Column()
    brand: string;

    @Column()
    brand_type: string;

    @Column({
        type: 'enum',
        enum:status,
        default: status.FREE
    })
    status: status;

    @Column()
    km: number;

    @Column()
    license_plate_number: string;

    @Column()
    procurement_date:Date;

    @Column()
    daily_price:number;

    @Column()
    km_price: number;
}