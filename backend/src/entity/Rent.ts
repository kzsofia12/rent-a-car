import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Client } from "./Client";
import { Vehicle } from "./Vehicle";

export enum status {
    UNDER_RENTAL = "folyamatban",
    RENT_END = "befejezett",
}

@Entity()
export class Rent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rented_at: Date;

    @Column({nullable:true})
    rented_end: Date;

    @Column({nullable:true})
    is_damaged: boolean;

    @Column({
        type: 'enum',
        enum:status,
        default: status.UNDER_RENTAL
    })
    status: status;

    @Column({nullable: true})
    km:number;

    @Column({nullable:true})
    final_price:number; 

    @Column({name: "client_id"})
    clientId:number;

    @Column({name: "vehicle_id"})
    vehicleId:number;

    @ManyToOne(()=>Client)
    @JoinColumn({name: "client_id"})
    client: Client;

    @ManyToOne(()=>Vehicle)
    @JoinColumn({name: "vehicle_id"})
    car: Vehicle;
}