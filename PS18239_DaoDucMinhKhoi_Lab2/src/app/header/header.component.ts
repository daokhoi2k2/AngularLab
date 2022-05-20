import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() searchKeyword: string = '';
  @Output() onSearchKeyword = new EventEmitter();

  handleUpdateSearch = (e: any) => {
    this.onSearchKeyword.emit(e.target.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
