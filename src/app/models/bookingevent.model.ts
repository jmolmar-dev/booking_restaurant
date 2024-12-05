import { Booking } from "./booking.model";

export class BookingEvent {

    action : string;
    bookingId : number;

    constructor (action : string, bookingId : number){
        this.action = action;
        this.bookingId = bookingId;
    }


}