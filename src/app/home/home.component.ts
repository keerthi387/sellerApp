import { Component, OnInit } from '@angular/core';
import{PropertyService} from '../property.service';
import{PropertyModel} from './property.model';
import { from } from 'rxjs';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:String="PROPERTY RENTAL";
 property:PropertyModel[];
 id:any;
 products:any;
  constructor(private propertyservice:PropertyService,private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.propertyservice.getproperty().subscribe((data)=>{
  this.property=JSON.parse(JSON.stringify(data));
 console.log(this.property);
    });
  }
  
  // getProduct(id){
   
  //   console.log(id);
  
  //   this.propertyservice.getproduct(id,this.products).subscribe((data)=>{
  //     this.products=JSON.parse(JSON.stringify(data));
  //     console.log(data);
  //   })
  //   console.log("call");
  //   // location.reload();ng 

  // }

// id:any;
//  products = <any>('');
//   constructor(private propertyservice: PropertyService, private router: Router, 
//     private route: ActivatedRoute) { }

//   ngOnInit(): void {

//     this.route.params.subscribe(params => {
//       this.id = params['id'];
//       console.log(this.id);
     
//     })

//     this.propertyservice.getproduct(this.id, this.products).subscribe((data)=>{
//       this. products=JSON.parse(JSON.stringify(data));

//       console.log(this. products);

//     })

  
  
//   }
readmore(id){
  console.log(id);
  this.router.navigate(['/readmore',id]);
}


deleteProduct(id){

  console.log(id);
  this.propertyservice.deleteproductdata(id);
  console.log("called");
  location.reload();
}

getData(id){
  console.log(id);
  this.router.navigate(['/getfulldata',id]);
}

}




