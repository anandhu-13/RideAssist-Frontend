import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {RideService} from '../services/ride.service'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {

  customer:any

  constructor(private router:ActivatedRoute, private service:RideService){
    

    let id = this.router.snapshot.params["id"]
    this.service.retrieveCustomer(id).subscribe(data=>{
      console.log(data);

      this.customer=data
      
    })
  }

}
