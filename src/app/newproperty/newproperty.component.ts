import { Component, OnInit } from '@angular/core';
import {PropertyModel} from '../home/property.model';
import{PropertyService} from '../property.service';
  import { from } from 'rxjs';
import{Router,ActivatedRoute} from '@angular/router';
// import { FormBuilder,Validators } from '@angular/forms';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-newproperty',
  templateUrl: './newproperty.component.html',
  styleUrls: ['./newproperty.component.css']
})
export class NewpropertyComponent implements OnInit {
  x=0;
  propertyitem=new PropertyModel(null,null,null,null,null,null,null,null);

  constructor(private propertyservice:PropertyService, private route:Router, private router:ActivatedRoute, private fb:FormBuilder) { }

  newForm=this.fb.group({


      propertyName:['',Validators.required],
     propertyCode:['',Validators.required],
        description:['',Validators.required],
       rent:['',Validators.required],
      starrating:['',Validators.required],
      imageUrl:['',Validators.required],
      address:['',Validators.required],
      contactnumber:['',Validators.required]
   


  })

get propertyName(){

  return this.newForm.get('propertyName');

}

get propertyCode(){

return this.newForm.get('propertyCode');

}


get description(){


return this.newForm.get('description');

}


get rent(){

return this.newForm.get('rent');

}

 get starrating(){

return this.newForm.get('starrating');

 }

 get imageUrl(){

return this.newForm.get('imageUrl');



 }

 get address(){

return this.newForm.get('address');

 }

 get contactnumber(){


return this.newForm.get('contactnumber');

 }

  ngOnInit(): void {
  }
  newproperty(){
    this.propertyservice.newProperty(this.propertyitem);
    console.log("calls");
    alert("success");
    this.route.navigate(['/']);
    
 this.x=this.x+1;
  console.log(this.x);
  }

}
