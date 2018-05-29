import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interface/IBook.class';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  isViewList:boolean = false;
  keyword:String = '';
  constructor() { }

  ngOnInit() {
  }
  books:IBook[] = [
    { cover : '../../../assets/images/asset-0.png',name : 'RESTful API với NODEJS',link : ''},
    { cover : '../../../assets/images/asset-2.png',name : 'LẬP TRÌNH C',link : ''},
    { cover : '../../../assets/images/asset-1.png',name : 'FRONT-END CƠ BẢN',link : ''},
    { cover : '../../../assets/images/asset-3.png',name : 'ANGULAR CƠ BẢN',link : ''},
    { cover : '../../../assets/images/asset-4.png',name : 'RESTful API với NODEJS',link : ''},
    { cover : '../../../assets/images/asset-5.png',name : 'mongoDB TOÀN TẬP',link : ''},
  ];
  
  changeOption(change:boolean){
    this.isViewList = change;
  }
}
