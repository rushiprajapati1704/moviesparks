import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-resturant-items',
  templateUrl: './resturant-items.component.html',
  styleUrl: './resturant-items.component.css'
})
export class ResturantItemsComponent {
  constructor(private mastersrv:MasterService){}
  loadFooditemBycategoryes(name :string)
  {
    this.mastersrv.getFoodbyCategories(name).subscribe((res:any)=>{
      
    })
  }
}
