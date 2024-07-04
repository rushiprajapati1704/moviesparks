import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getAllFoodCategories()
  {
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory");
  }
  getFoodbyCategories(name:string){
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemOfRestaurantByCategory?category="+name);
  }
  Login(obj:any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/Login",obj);
  }
}
