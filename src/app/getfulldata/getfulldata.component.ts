import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../property.service';
import {PropertyModel} from '../home/property.model';
  import { from } from 'rxjs';
  import {Router,ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-getfulldata',
  templateUrl: './getfulldata.component.html',
  styleUrls: ['./getfulldata.component.css']
})
export class GetfulldataComponent implements OnInit {

  product=new PropertyModel(null,null,null,null,null,null,null,null);
  id='';
  item='';
  propertyitem=<any>('');

  constructor(private propertyservice: PropertyService, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
     });
      
      this.propertyservice.getdata(this.id).subscribe((data)=>{
        this.product=JSON.parse(JSON.stringify(data));
        console.log("Placed");
        console.log(this.product);
        
       })
  }

}
