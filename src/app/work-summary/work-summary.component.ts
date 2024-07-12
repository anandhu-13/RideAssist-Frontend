import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-work-summary',
  templateUrl: './work-summary.component.html',
  styleUrls: ['./work-summary.component.css']
})
export class WorkSummaryComponent {

  custId:any

  constructor(private route:ActivatedRoute, private service:RideService){

    this.service.isAuthenticated()

    this.custId = this.route.snapshot.params["id"]
    
    console.log(this.custId);
    
  }

}
