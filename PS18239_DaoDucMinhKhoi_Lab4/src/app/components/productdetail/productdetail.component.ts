import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISanpham } from 'src/app/isanpham';
import { SanPhamService } from 'src/app/san-pham.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private spService: SanPhamService
  ) {}
  idSP: number = Number(this.route.snapshot.params['id']);
  sp = <ISanpham>{};

  ngOnInit(): void {
    if (this.idSP < 0) return;
    const kq = this.spService.getMotSanPham(this.idSP);
    if (kq == null) {
      this.sp = {} as ISanpham;
    } else {
      this.sp = kq as ISanpham;
    }
    console.log(kq);
  }

  // ngOnInit(): void {}
}
