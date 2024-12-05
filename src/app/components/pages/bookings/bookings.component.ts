import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Booking } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';
import { BookingResumeComponent } from "../../booking/booking-resume/booking-resume.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BookingResumeComponent, CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

  booking : Booking | null = null;
  bookingList : Booking [] = [];

  constructor (private bookingService : BookingService){

  }

  /*Obtenemos la lista de reservas desde el servicio*/
  ngOnInit () : void {
    this.bookingList = this.bookingService.getBookings();
  }

  deleteBooking (id : number){
    this.bookingService.deleteBooking(id);
  }




}
