import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISanpham } from 'src/app/isanpham';
import { SanPhamService } from 'src/app/san-pham.service';

@Component({
  selector: 'app-product-sua',
  templateUrl: './product-sua.component.html',
  styleUrls: ['./product-sua.component.css'],
})
export class ProductSuaComponent implements OnInit {
  constructor(
    private spService: SanPhamService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}
  idSP: number = Number(this.activeRoute.snapshot.params['id']);
  sp: ISanpham = <ISanpham>{};

  ngOnInit(): void {
    let kq = this.spService.getMotSanPham(this.idSP);
    this.sp = kq as ISanpham;
  }

  capnhatSP(){
    this.spService.capnhatSanPham(this.sp);
    this.router.navigate(['/admin/sp']);
  }
}
