import { Product, ShopInfo } from './types';

export const SHOP_INFO: ShopInfo = {
  "name": "Linh's Fashion",
  "policies": {
    "exchange": "Đổi size trong 7 ngày nếu sản phẩm còn nguyên tag.",
    "shipping": "Giao hàng toàn quốc. Nội thành 1-2 ngày, tỉnh 2-5 ngày.",
    "freeShipThreshold": 500000
  }
};

export const MOCK_PRODUCTS: Product[] = [
  {
    "id": "v1",
    "name": "Váy Lụa Gấm Sang Trọng",
    "price": 450000,
    "description": "Váy thiết kế dáng suông, chất liệu lụa gấm mềm mịn, có độ bóng tự nhiên.",
    "materials": [
      "Lụa gấm",
      "Phi lụa"
    ],
    "colors": [
      "Đỏ đô",
      "Vàng mỡ gà",
      "Đen"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeGuide": "S < 48kg, M 48-54kg, L 55-60kg, XL > 60kg",
    "stylingTips": "Phối cùng cao gót và túi xách nhỏ để đi tiệc.",
    "imageUrl": "https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "a1",
    "name": "Áo Blazer Công Sở",
    "price": 550000,
    "description": "Áo blazer 2 lớp, form đứng, tùng áo có đệm vai.",
    "materials": [
      "Kaki thun",
      "Vải tuyết mưa"
    ],
    "colors": [
      "Be",
      "Xám",
      "Xanh đen"
    ],
    "sizes": [
      "Freesize < 65kg"
    ],
    "sizeGuide": "Freesize từ 45kg đến 65kg mặc đẹp.",
    "stylingTips": "Mặc cùng quần tây hoặc chân váy bút chì cho phong cách chuyên nghiệp.",
    "imageUrl": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "q1",
    "name": "Quần Jean Ống Rộng",
    "price": 320000,
    "description": "Quần jean denim chất dày dặn, thấm hút mồ hôi tốt, ống rộng trẻ trung.",
    "materials": [
      "Denim cao cấp"
    ],
    "colors": [
      "Xanh nhạt",
      "Xanh đậm"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "sizeGuide": "S (eo 64), M (eo 68), L (eo 72)",
    "stylingTips": "Phối với áo thun ôm hoặc áo crop-top.",
    "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v2",
    "name": "Đầm Xòe Floral Mùa Hạ",
    "price": 380000,
    "description": "Họa tiết hoa nhí nữ tính, chất voan tơ bay bổng.",
    "materials": [
      "Voan tơ nội địa"
    ],
    "colors": [
      "Xanh mint",
      "Hồng phấn"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "sizeGuide": "S < 47kg, M 48-53kg, L 54-59kg",
    "stylingTips": "Kết hợp với sandal quai mảnh và mũ cói khi đi biển.",
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "a2",
    "name": "Áo Sơ Mi Lụa Cổ Đức",
    "price": 290000,
    "description": "Chất lụa ngọc trai mềm mát, chống nhăn cực tốt.",
    "materials": [
      "Lụa ngọc trai"
    ],
    "colors": [
      "Trắng",
      "Xanh cốm",
      "Nâu tây"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeGuide": "Form chuẩn, chị chọn đúng size hay mặc là đẹp.",
    "stylingTips": "Sơ vin cùng quần tây cạp cao để tôn dáng.",
    "imageUrl": "https://images.unsplash.com/photo-1598033129183-c4f50c717658?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v3",
    "name": "Váy Body Trễ Vai",
    "price": 420000,
    "description": "Chất len tăm co giãn 4 chiều, ôm sát đường cong quyến rũ.",
    "materials": [
      "Len tăm cao cấp"
    ],
    "colors": [
      "Đen",
      "Nâu đậm"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "sizeGuide": "S < 50kg, M 51-56kg",
    "stylingTips": "Đi kèm vòng cổ ngọc trai và giày gót nhọn.",
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v4",
    "name": "Set Dạ Tweed Sang Chảnh",
    "price": 850000,
    "description": "Bộ gồm áo khoác dạ và chân váy chữ A, lót lụa bên trong.",
    "materials": [
      "Dạ Tweed"
    ],
    "colors": [
      "Trắng kem",
      "Đen phối trắng"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "sizeGuide": "S 45-50kg, M 51-55kg, L 56-60kg",
    "stylingTips": "Phù hợp cho các buổi tiệc cuối năm hoặc đi làm cao cấp.",
    "imageUrl": "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "a3",
    "name": "Áo Thun Polo Basic",
    "price": 190000,
    "description": "Chất cotton cá sấu thoáng mát, logo thêu tinh tế.",
    "materials": [
      "Cotton 100%"
    ],
    "colors": [
      "Trắng",
      "Xanh biển",
      "Hồng"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "sizeGuide": "Form unisex rộng rãi.",
    "stylingTips": "Năng động khi phối cùng quần short hoặc chân váy tennis.",
    "imageUrl": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v5",
    "name": "Váy Maxi Đi Biển",
    "price": 490000,
    "description": "Hở lưng quyến rũ, tùng váy xòe rộng 360 độ.",
    "materials": [
      "Chiffon cao cấp"
    ],
    "colors": [
      "Vàng rực",
      "Xanh dương"
    ],
    "sizes": [
      "Freesize"
    ],
    "sizeGuide": "Dây buộc điều chỉnh theo dáng người.",
    "stylingTips": "Chụp ảnh sống ảo cực đẹp tại bãi biển.",
    "imageUrl": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "q2",
    "name": "Chân Váy Xếp Ly Dài",
    "price": 250000,
    "description": "Xếp ly nhỏ đều đặn, cạp chun co giãn thoải mái.",
    "materials": [
      "Lụa satin"
    ],
    "colors": [
      "Ghi",
      "Đen",
      "Be"
    ],
    "sizes": [
      "Freesize"
    ],
    "sizeGuide": "Eo từ 60cm đến 85cm đều vừa.",
    "stylingTips": "Kết hợp với áo len mỏng cho mùa thu lãng mạn.",
    "imageUrl": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v6",
    "name": "Váy Nhung Đen Cổ Vuông",
    "price": 520000,
    "description": "Chất nhung tuyết bắt sáng, thiết kế cổ vuông cổ điển.",
    "materials": [
      "Nhung tuyết"
    ],
    "colors": [
      "Đen"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "sizeGuide": "S < 48kg, M 49-54kg, L 55-60kg",
    "stylingTips": "Đặc biệt tôn da, phù hợp đi tiệc tối.",
    "imageUrl": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "a4",
    "name": "Áo Hoodie Form Rộng",
    "price": 350000,
    "description": "Nỉ ngoại dày dặn, mặt trong lót bông mềm.",
    "materials": [
      "Nỉ chân cua"
    ],
    "colors": [
      "Xanh lá",
      "Xám tiêu",
      "Đen"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "sizeGuide": "M < 55kg, L 56-65kg, XL > 65kg",
    "stylingTips": "Streetstyle khi phối cùng quần biker hoặc legging.",
    "imageUrl": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v7",
    "name": "Set Áo Cardigan & Váy Dây",
    "price": 460000,
    "description": "Sự kết hợp ngọt ngào giữa len dệt kim và lụa.",
    "materials": [
      "Len dệt kim",
      "Lụa"
    ],
    "colors": [
      "Tím pastel",
      "Xanh baby"
    ],
    "sizes": [
      "Freesize"
    ],
    "sizeGuide": "Dưới 58kg mặc xinh nhất.",
    "stylingTips": "Phong cách tiểu thư nhẹ nhàng.",
    "imageUrl": "https://images.unsplash.com/photo-1624222247344-550fb80d78d1?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v8",
    "name": "Váy Denim Cổ Polo",
    "price": 390000,
    "description": "Denim mềm, dáng chữ A năng động, có túi hai bên.",
    "materials": [
      "Denim mỏng"
    ],
    "colors": [
      "Xanh jean"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "sizeGuide": "S 45-50kg, M 51-55kg, L 56-60kg",
    "stylingTips": "Phối cùng giày sneaker trắng rất trẻ trung.",
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "a5",
    "name": "Áo Croptop Cổ Tim",
    "price": 150000,
    "description": "Chất thun gân ôm body, tôn vòng 1.",
    "materials": [
      "Thun gân"
    ],
    "colors": [
      "Trắng",
      "Đen",
      "Đỏ",
      "Xanh"
    ],
    "sizes": [
      "Freesize"
    ],
    "sizeGuide": "Dưới 52kg mặc đẹp.",
    "stylingTips": "Mặc cùng quần cạp cao để 'hack' chiều dài đôi chân.",
    "imageUrl": "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v9",
    "name": "Đầm Ren Trắng Công Chúa",
    "price": 680000,
    "description": "Ren thêu thủ công cầu kỳ, có lót lụa kín đáo.",
    "materials": [
      "Ren cao cấp"
    ],
    "colors": [
      "Trắng tinh khôi"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "sizeGuide": "S < 49kg, M 50-55kg",
    "stylingTips": "Hoàn hảo cho tiệc cưới hoặc kỷ niệm.",
    "imageUrl": "https://images.unsplash.com/photo-1518917232260-0e613b47e0ad?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v10",
    "name": "Jumpsuit Cổ Chữ V",
    "price": 480000,
    "description": "Thiết kế liền thân sang chảnh, ống suông rộng.",
    "materials": [
      "Vải tuyết mưa"
    ],
    "colors": [
      "Đỏ rượu",
      "Xanh rêu"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "sizeGuide": "S 45-50kg, M 51-56kg, L 57-62kg",
    "stylingTips": "Thắt thêm belt để tạo điểm nhấn vòng eo.",
    "imageUrl": "https://images.unsplash.com/photo-1550639524-a6f58345a2ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "q3",
    "name": "Quần Short Kaki",
    "price": 210000,
    "description": "Kaki dày dặn, không xù lông, form chuẩn.",
    "materials": [
      "Kaki"
    ],
    "colors": [
      "Kem",
      "Nâu",
      "Đen"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "sizeGuide": "S 40-46kg, M 47-52kg, L 53-58kg",
    "stylingTips": "Phối cùng áo sơ mi khoác ngoài cho set đồ dạo phố.",
    "imageUrl": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v11",
    "name": "Váy Sơ Mi Dáng Dài",
    "price": 360000,
    "description": "Thanh lịch, kín đáo nhưng vẫn trẻ trung.",
    "materials": [
      "Thô mềm"
    ],
    "colors": [
      "Xanh kẻ",
      "Trắng"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "sizeGuide": "Form suông dễ mặc.",
    "stylingTips": "Thích hợp đi học, đi làm hoặc đi dạo phố cuối tuần.",
    "imageUrl": "https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&w=400&q=80"
  },
  {
    "id": "v12",
    "name": "Đầm Satin Hở Lưng",
    "price": 550000,
    "description": "Bóng nhẹ, chảy sóng, mang lại vẻ kiêu sa.",
    "materials": [
      "Satin lụa"
    ],
    "colors": [
      "Champagne",
      "Xanh cổ vịt"
    ],
    "sizes": [
      "S",
      "M"
    ],
    "sizeGuide": "S < 50kg, M 51-56kg",
    "stylingTips": "Phối với trang sức kim loại lấp lánh.",
    "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80"
  }
];

export const SYSTEM_PROMPT = (products: Product[], shopInfo: ShopInfo) => `
Bạn là Linh - nhân viên tư vấn bán hàng của shop thời trang nữ "${shopInfo.name}".
Nhiệm vụ của bạn là hỗ trợ khách hàng tìm kiếm và tư vấn về các sản phẩm thời trang.

DANH SÁCH SẢN PHẨM:
${products.map(p => `- ${p.name}: ${p.price.toLocaleString("vi-VN")}đ. ${p.description}`).join("\n")}

CHÍNH SÁCH:
- Đổi trả: ${shopInfo.policies.exchange}
- Vận chuyển: ${shopInfo.policies.shipping}
`;