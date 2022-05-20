import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchKeyword: string = "";

  handleChangeSearchKeyword = (value: any) => {
    this.searchKeyword = value;
  }
  title = 'lab2_DaoDucMinhKhoi';
}
