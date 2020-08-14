import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{HttpParams} from '@angular/common/http';
import{FormsModule} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }
  getproperty(){
    return this.http.get("http://localhost:3000/property");
  }

newProperty(item){
  return this.http.post("http://localhost:3000/newproperty",{"property":item})
  .subscribe((data)=>{console.log(data)});
}

editProduct(_id)  {
  // console.log(id);
   
    // let params = new HttpParams();
    // params = params.append('_id', item);
   
   

//this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { headers: headers, search: params })
return this.http.get<any>('http://localhost:3000/readmore'+`/${_id}`);
}

getUser(){
return this.http.get("http://localhost:3000/register");

}

getdata(_id){


  return this.http.get<any>('http://localhost:3000/getfulldata'+`/${_id}`);

}
updateProduct(item,id)
  {
    console.log(item);
    return this.http.put<any>("http://localhost:3000/update"+`/${id}`,item)
    .subscribe(data=>{console.log(data)})
  }

 
  deleteproductdata(id){
    return this.http.post("http://localhost:3000/delete",{"id":id})
    .subscribe(data=>{console.log(data)});
  }

  newLogin(){

    return this.http.get("http://localhost:3000/login");
    


}

}
