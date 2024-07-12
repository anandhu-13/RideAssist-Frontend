import { Component } from '@angular/core';
import { RideService } from '../services/ride.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn:boolean =false
  constructor(private service: RideService, private router:Router){
    this.service.loggedInSubject.subscribe((data:any)=>this.isLoggedIn=data)
  }

  signout(){
    localStorage.clear()
    this.router.navigateByUrl("")
  }

}
