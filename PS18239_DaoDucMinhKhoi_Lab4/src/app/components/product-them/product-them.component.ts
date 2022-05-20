import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISanpham } from 'src/app/isanpham';
import { SanPhamService } from 'src/app/san-pham.service';

@Component({
  selector: 'app-product-them',
  templateUrl: './product-them.component.html',
  styleUrls: ['./product-them.component.css'],
})
export class ProductThemComponent implements OnInit {
  sp: ISanpham = <ISanpham>{};
  themSP() {
    this.spService.themSanPham(this.sp);
    this.router.navigate(['/admin/sp']);
  }
  constructor(private spService: SanPhamService, private router: Router) {}

  ngOnInit(): void {}
}
