import { Component, Input, OnInit } from '@angular/core';
import { ISanpham } from 'src/app/isanpham';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  //productdetail.component.ts
  @Input() sp: ISanpham = {
    id: 0,
    tensp: '',
    code: '',
    giasp: 0,
    mota: '',
    urlImage: '',
    ngay: '',
    starRate: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
