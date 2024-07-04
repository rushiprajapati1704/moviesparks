import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from 'express';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categoryList:any[]=[];
  constructor(private mastersrv:MasterService){

  }
  ngOnInit(): void {
    this.loadAllFoodCategories();  
  }
  loadAllFoodCategories(){
    this.mastersrv.getAllFoodCategories().subscribe((res:any)=>{
      this.categoryList=res.data;
      console.log(res.data);
    })
  }
}
