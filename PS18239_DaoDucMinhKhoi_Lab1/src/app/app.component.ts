import { Component } from '@angular/core';
import { Nhakhoahoc } from './nhakhoahoc';
import { ISanpham } from './ISanpham';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bài lab 1';
  student = {
    hoten: 'Đào Đức Minh Khôi',
    phai: 0,
    ngaysinh: '2002-06-05',
    hinh: 'hinh1.png',
    diem: 6,
  };
  listNhaKH: Nhakhoahoc[] = [
    { id: 1, ho: 'Tạ Quang', ten: 'Bửu', sinh: 1910, mat: 1986 },
    { id: 2, ho: 'Trần Đại', ten: 'Nghĩa', sinh: 1913, mat: 1997 },
    { id: 3, ho: 'Lê Văn', ten: 'Thiêm', sinh: 1918, mat: 1991 },
    { id: 4, ho: 'Nguyễn Văn', ten: 'Hiệu', sinh: 1938, mat: 2022 },
    { id: 5, ho: 'Hoàng', ten: 'Tụy', sinh: 1927, mat: 2019 },
  ];

  show(codehtml: string) {
    var kq = document.querySelector('#ds') as HTMLElement;
    kq.innerHTML = codehtml;
  }
  render() {
    let codehtml = this.listNhaKH
      .map((nkh) => {
        return `
        <p> ${nkh.id}. ${nkh.ho.toUpperCase()} ${nkh.ten.toUpperCase()} (${
          nkh.sinh
        } - ${nkh.mat}) - Hưởng dương: ${nkh.mat - nkh.sinh} tuổi</p>
      `;
      })
      .join('');
    this.show(codehtml);
  }
  listSP: ISanpham[] = [
    {
      id: 1,
      tensp: 'Xiaomi Redmi Note 11',
      code: 'GDN-0011',
      giasp: 5490000,
      mota: 'Xiaomi Redmi Note 11 đlc xem nh chilc smartphone có giá tm trung In tng, vli 1clu hình mOnh, cm camera xin sò, pin khle, slc nhanh mà giá 10i rīt phli chăng.',
      urlImage:
        'https://cdn.tgdd.vn/Products/Images/42/245261/Xiaomi-redmi-note-11-blue-600x600.jpg',
      ngay: '2022-04-01',
      starRate: 3.2,
    },
    {
      id: 2,
      tensp: 'Phone 13 Pro Max 128GB ',
      code: 'GDN-0015',
      giasp: 33490000,
      mota: 'Máy thiltkkhông mly đt phá khi so vli ngli tiln nhi m, màn hình siêuđp, tin so quét nâng cp lên 120 Hz mIt mà, cm biln camera có kích thc10n hữn',
      urlImage:
        'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg',
      ngay: '2022-04-02',
      starRate: 3.5,
    },
    {
      id: 3,
      tensp: 'Vivo Y33s',
      code: 'GDN-0018',
      giasp: 6990000,
      mota: 'Vivo Y33s thilt ko tro trung vi màu đen tráng gng và xanh mng m. Phiên bữn màu đen đc ph 1p tráng gIng sáng bóng, có th tr thành chilc gIng tiln 10i',
      urlImage:
        'https://cdn.tgdd.vn/Products/Images/42/249102/Vivo-y33s-yellow-thumb-600x600.jpg',
      ngay: '2022-04-03',
      starRate: 3.5,
    },
    {
      id: 4,
      tensp: 'OPPO Reno7z5G',
      code: 'GDN-0020',
      giasp: 10490000,
      mota: 'SIn phmcó thilt ko OPPO Glow đlc quyn, camera mang hilu Ong nh máy DSLR chuyên nghiOp cùng vin sáng kép, có clu hình mOnhmvà đt ch ng nhn xp hngAvođ0 mt.',
      urlImage:
        'https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-1-1-600x600.jpg',
      ngay: '2022-04-04',
      starRate: 3.3,
    },
    {
      id: 5,
      tensp: 'Samsung Galaxy A03 3GB',
      code: 'GDN-0022',
      giasp: 2990000,
      mota: 'Là điện thoại Galaxy A đầu tiên của nhà Samsung trong năm 2022 tại VN. Sản phẩm có giá dễ tiếp cận, camera chính đến 48 MP, pin 5000 mAh thoải mái sử dụng cả ngày.',
      urlImage:
        'https://cdn.tgdd.vn/Products/Images/42/251856/samsung-galaxy-a03-xanh-thumb-600x600.jpg',
      ngay: '2022-04-02',
      starRate: 3.2,
    },
    {
      id: 6,
      tensp: 'Samsung Galaxy A52s 5G 128GB',
      code: 'GDN-0023',
      giasp: 10990000,
      mota: 'Điện thoại Galaxy A52s 5G là phiên bản nâng cấp của Galaxy A52 5G, với ngoại hình không đổi nhưng được nâng cấp đáng kể về thông số cấu hình bên trong.',
      urlImage:
        'https://cdn.tgdd.vn/Products/Images/42/247507/samsung-galaxy-a52s-5g-mint-600x600.jpg',
      ngay: ';2022-04-03',
      starRate: 3.8,
    },
  ];

  showSP(codehtml: string) {
    var kq = document.querySelector('#listSP') as HTMLElement;
    kq.innerHTML = codehtml;
  }
  renderSP() {
    let codehtml = '';
    this.listSP.forEach((sp) => {
      codehtml += `
       <div class='card text-center sp'>
         <div class='card-header h5'> ${sp.tensp} </div>
         <div class='card-body'>
             <img class='hinhsp mb-4' src="${sp.urlImage}">
            <p class="card-text" >${sp.mota}</p>
             <a href="#" class="btn btn-primary">Xem chi tiết</a>
           </div>
         <div class='card-footer'> ${sp.giasp}</div>
       </div>
       `;
    });
    this.showSP(codehtml);
  }
}
