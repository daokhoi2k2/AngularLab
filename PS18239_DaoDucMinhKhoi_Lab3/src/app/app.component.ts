import { Component } from '@angular/core';
import { ISanpham } from './isanpham';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PS18239_DaoDucMinhKhoi_Lab3';
  searchValue: string = '';
  chucNang: string = '';
  spDangXem: any = null;

  handleChangeKeyword(e: any) {
    this.searchValue = e.target.value;
  }

  ghiNhanCN(cn: string = '') {
    this.chucNang = cn;
    this.spDangXem = null;
    if (this.chucNang != 'ct') this.spDangXem = null;
  }

  ganSP(sp: ISanpham) {
    this.spDangXem = sp;
    this.chucNang = 'ct';
  }
}
