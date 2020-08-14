import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../property.service';
import {PropertyModel} from '../home/property.model';
  import { from } from 'rxjs';
  import {Router,ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
// import{HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {

  // product:PropertyModel[];
  product=new PropertyModel(null,null,null,null,null,null,null,null);
  id='';
  item='';
  propertyitem=<any>('');

  constructor(private propertyservice: PropertyService, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   console.log(this.id);
    //  });
      
    //  this.propertyservice.getproduct(this.id,this.propertyitem).subscribe((data)=>{
    //   this. proper=JSON.parse(JSON.stringify(data));

    //   console.log(this. proper);
    //    })
     
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
     });
      
      this.propertyservice.editProduct(this.id).subscribe((data)=>{
        this.product=JSON.parse(JSON.stringify(data));
        console.log("Placed");
        console.log(this.product);
        
       })

 }

  update(){

       console.log(this.id);
    this.propertyservice.updateProduct(this.product,this.id);
    console.log("Called");
    alert("success");

    this.router.navigate(['/']);
  }

  }
  
  
//   getproduct(){
//  console.log(this.id);
//  console.log(this.products);
//  this.propertyservice.getproduct(this.id, this.products).subscribe(data=>{
// console.log(data);

//  })

//   }
// getOne(id){

//   this.propertyservice.editProduct(id).subscribe(data=>{
//     console.log(data);
//   })



// }

