export interface Rental{
 id?: number;
 rented_at: Date;
 rented_end: Date;
 is_damaged: boolean;
 km:number;
 status: string;
 final_price: number;
 clientId: number;
 vehicleId: number;
}
