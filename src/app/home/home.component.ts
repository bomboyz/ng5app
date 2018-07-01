import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//ตัวแปรหรือ properties
itemCount:number=4; //1 way binding
additem:string="เพิ่มรายการใหม่"; //1 way binding
listText:string='รายการเริ่มต้น'; //2 way binding การทำโมเดล
listall =[];
  
constructor() { }

  ngOnInit() {
    //นับจำนวนรายการเริ่มต้น
    this.itemCount=this.listall.length;
  }
  addItem()
  {
    //ตรวจค่าว่าง
    if(this.listText != "")
  //รับค่าจาก  from และบันทึกลง array listall
  this.listall.push(this.listText);
  //เคลียร๋ค่าในฟอร์ม
  this.listText="";
//นับจำนวนล่าสุด
this.itemCount=this.listall.length;

 }
}