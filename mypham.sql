/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : mypham

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 07/05/2024 07:59:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for chitietdonhang
-- ----------------------------
DROP TABLE IF EXISTS `chitietdonhang`;
CREATE TABLE `chitietdonhang`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `SoLuong` int NULL DEFAULT NULL,
  `Gia` int NULL DEFAULT NULL,
  `SanPham_ID` int NULL DEFAULT NULL,
  `DonHang_ID` int NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  INDEX `SanPham_ID`(`SanPham_ID`) USING BTREE,
  INDEX `DonHang_ID`(`DonHang_ID`) USING BTREE,
  CONSTRAINT `chitietdonhang_ibfk_1` FOREIGN KEY (`SanPham_ID`) REFERENCES `sanpham` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `chitietdonhang_ibfk_2` FOREIGN KEY (`DonHang_ID`) REFERENCES `donhang` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chitietdonhang
-- ----------------------------

-- ----------------------------
-- Table structure for donhang
-- ----------------------------
DROP TABLE IF EXISTS `donhang`;
CREATE TABLE `donhang`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `DiaChi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `SoDienThoai` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `NgayDat` datetime(0) NULL DEFAULT NULL,
  `NguoiDung_ID` int NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  INDEX `NguoiDung_ID`(`NguoiDung_ID`) USING BTREE,
  CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`NguoiDung_ID`) REFERENCES `nguoidung` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of donhang
-- ----------------------------

-- ----------------------------
-- Table structure for loaisanpham
-- ----------------------------
DROP TABLE IF EXISTS `loaisanpham`;
CREATE TABLE `loaisanpham`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of loaisanpham
-- ----------------------------
INSERT INTO `loaisanpham` VALUES (1, 'Dầu gội');
INSERT INTO `loaisanpham` VALUES (2, 'Dưỡng da');
INSERT INTO `loaisanpham` VALUES (3, 'Dưỡng tóc');
INSERT INTO `loaisanpham` VALUES (4, 'Đồ trang điểm');
INSERT INTO `loaisanpham` VALUES (5, 'Kem chống nắng');
INSERT INTO `loaisanpham` VALUES (6, 'Chăm sốc da mặt');
INSERT INTO `loaisanpham` VALUES (7, 'Son môi');

-- ----------------------------
-- Table structure for nguoidung
-- ----------------------------
DROP TABLE IF EXISTS `nguoidung`;
CREATE TABLE `nguoidung`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `TaiKhoan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `MatKhau` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `Ten` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `DiaChi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `SoDienThoai` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `Quyen_ID` int NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  INDEX `Quyen_ID`(`Quyen_ID`) USING BTREE,
  CONSTRAINT `nguoidung_ibfk_1` FOREIGN KEY (`Quyen_ID`) REFERENCES `quyen` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nguoidung
-- ----------------------------
INSERT INTO `nguoidung` VALUES (1, 'admin', '123456', 'admin', 'admin@gmail.com', 'Việt Nam', '0987654321', 1);
INSERT INTO `nguoidung` VALUES (2, 'khach', '123456', 'khach', 'khach@gmail.com', 'Việt Nam', '0987654321', 2);

-- ----------------------------
-- Table structure for quyen
-- ----------------------------
DROP TABLE IF EXISTS `quyen`;
CREATE TABLE `quyen`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of quyen
-- ----------------------------
INSERT INTO `quyen` VALUES (1, 'Admin');
INSERT INTO `quyen` VALUES (2, 'Khách hàng');

-- ----------------------------
-- Table structure for sanpham
-- ----------------------------
DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE `sanpham`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `Anh` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `Gia` int NULL DEFAULT NULL,
  `SoLuong` int NULL DEFAULT NULL,
  `ThuongHieu` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `DieuKienBaoQuan` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `CongDung` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `XuatXu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `DungTich` int NULL DEFAULT NULL,
  `MoTa` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `NgayTao` datetime(0) NULL DEFAULT NULL,
  `Loai_ID` int NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  INDEX `Loai_ID`(`Loai_ID`) USING BTREE,
  CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`Loai_ID`) REFERENCES `loaisanpham` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sanpham
-- ----------------------------
INSERT INTO `sanpham` VALUES (1, 'Bộ dầu gội Biotin ngăn gầu', 'sp1.jpg', 235000, 50, 'VOUDIOTY', 'Nơi khô ráo', 'Ngăn gầu', 'Hàn Quốc', 500, 'Bộ Gội Xả Ngăn Ngừa Gàu Biotin & Collagen Pasiori Voudioty Professional – Xanh Dương với mùi hương thơm quyến rũ ngây ngất, cho khách cảm giác sảng khoái, thư giản. Với dưỡng chất Biotin & Collagen Protein từ dưỡng chất thiên nhiên bổ sung cho tóc khô xơ hư tổn, giúp tóc suôn mềm mượt và bóng đẹp. Dưỡng cho tóc suôn mềm dễ chải. Ngăn ngừa tóc gãy rụng do sử dụng hóa chất uốn duỗi nhuộm và tác hại của nhiệt độ cao của máy sấy máy kẹp.', '2024-05-06 23:31:26', 1);
INSERT INTO `sanpham` VALUES (2, 'Bộ dầu gội phục hồi đa tầng Nấm Truffle Weilaiya', 'sp2.jpg', 870000, 50, 'WEILAIYA', 'Nơi khô ráo', 'Phục hồi tóc hư tổn', 'Trung Quốc', 500, 'Dầu gội phục hồi dành cho tóc hư tổn, tóc khô xơ, tóc nhuộm, tóc tẩy Nuôi dưỡng da đầu, chống lão hóa da đầu Chứa 2 dưỡng chất đắt đỏ Nấm Truffle trắng (Đức) & Trứng Cá Tầm (Pháp) Hương thơm sang trọng rất giống với nước hoa YSL Black Opium Tóc suôn mượt, vào nếp chuẩn salon', '2024-05-06 23:32:40', 1);
INSERT INTO `sanpham` VALUES (3, 'Chai Dưỡng Thể Vaseline Hồng – 725ml', 'sp3.jpg', 155000, 50, 'VASELINE', 'Điều kiện thường', 'Chống lão hoá, Giữ ẩm, Chống nắng, Làm trắng', 'Hàn Quốc', 725, 'Ưu điểm nổi bật:\r\n\r\n1. Dưỡng ẩm sâu: Vaseline là một trong những thương hiệu nổi tiếng trong việc dưỡng ẩm da, và sản phẩm Vaseline Hồng 725ml không phải là một ngoại lệ. Chất lượng vượt trội giúp giữ cho làn da luôn mềm mịn, không bị khô và bong tróc.\r\n\r\n2. Làm sáng da tự nhiên: Sản phẩm này chứa các thành phần dưỡng da giúp tái tạo làn da, làm sáng vùng da tối màu và tạo nên làn da hồng hào tự nhiên.\r\n3. Không gây kích ứng: Vaseline Hồng 725ml là sản phẩm an toàn cho mọi loại da, ngay cả da nhạy cảm nhất. Không chứa các chất gây kích ứng, sản phẩm này phù hợp cho cả trẻ em và người lớn.\r\n\r\n4. Dung tích lớn: Với dung tích lên đến 725ml, bạn có đủ lâu để sử dụng sản phẩm này và thấy sự thay đổi rõ rệt trên làn da của bạn.\r\n\r\n5. Thiết kế tiện lợi: Chai có nắp vặn tiện lợi giúp bạn dễ dàng kiểm soát lượng sản phẩm sử dụng mà không gây lãng phí.', '2024-05-06 23:34:12', 2);
INSERT INTO `sanpham` VALUES (4, 'Kem Body Whisis', 'sp4.jpg', 160000, 50, 'WHISIS', 'Điều kiện thường', 'Chống Nắng, Làm Trắng', 'Hàn Quốc', 300, 'Có một làn da ẩm mượt, trắng sáng là mong muốn của mọi cô gái. Trên thị trường, có không ít các sản phẩm có khả năng cấp ẩm, dưỡng trắng da. Nếu bạn là một tín đồ của mỹ phẩm Hàn Quốc và đang tìm kiếm một sản phẩm dưỡng da toàn thân thì Lotion Collagen Dưỡng Trắng – Chống nắng Body Cao Cấp Whisis chính là sự lựa chọn hoàn hảo. Lotion Collagen Dưỡng Trắng – Chống nắng Body Cao Cấp Whisis nổi bật với thành phần chính chứa Niacinamide, một loại Vitamin B3 giúp kích thích sự phát triển và hoạt động của tế bào da, giúp ức chế sự hình thành sắc tố melanin, làm sáng da hiệu quả. Thêm vào đó, collagen thủy phân giúp tăng cường khả năng đàn hồi của da, khóa ẩm, chống lão hóa da hiệu quả. Titanium Dioxide cùng chỉ số chống nắng cao, lên đến SPF50+/ PA++++ giúp bảo vệ da toàn diện trước tia UVA và UVB gây hại từ ánh nắng mặt trời. Whisis Premium Collagen Whitening Body Lotion có kết cấu dạng kem đặc, ẩm mướt, mềm mịn, dễ tán, thẩm thấu nhanh vào da, không gây bết dính, không làm bít tắc lỗ chân lông, có hương trái cây ngọt nhẹ. Sản phẩm có khả năng nâng tone nhẹ nhàng, cho da bạn trắng sáng tự nhiên, tức thì. Sử dụng thường xuyên, sẽ cho hiệu quả trắng sáng rõ rệt. Kem dưỡng Whisis chứa các thành phần tự nhiên, lành tính, an toàn cho da, không gây kích ứng, phù hợp với mọi loại da, kể cả da nhạy cảm.', '2024-05-06 23:41:03', 2);
INSERT INTO `sanpham` VALUES (5, 'Dầu Dưỡng Tóc Olexrs', 'sp5.jpg', 115000, 50, 'ARGANOIL', 'Điều kiện thường', 'Phục hồi tóc hư tổn', 'Hàn Quốc', 450, 'Tinh Dầu Phục Hồi Tóc Hư Tổn Argan Olexrs + Hair Salon với công thức 100% tinh dầu Argan Oil giúp phục hồi tóc hư tổn nặng, xơ, khô, chẻ ngọn, gãy rụng, hư tổn do nhuộm, duỗi, làm xoăn,… giúp tóc chắc khỏe, bóng mượt, cân bằng độ ẩm, chống tia cực tím.\r\n\r\nCông dụng:\r\n\r\n– Giúp phục hồi tóc hư tổn do nhuộm, duỗi, uốn,…\r\n– Giúp tóc chắc khỏe, bóng mượt, cân bằng độ ẩm, chống tia UV…\r\n– Thành phần chính chiết xuất từ ​​Dầu Argan, Sữa ong chúa, Nước hoa hồng giúp mang lại hiệu quả tuyệt vời trong việc cải thiện các hư tổn thường gặp, đặc biệt là tóc chẻ ngọn, khô gãy\r\n– Hương hoa tự nhiên, giúp bạn duy trì mái tóc thơm ngát, bồng bềnh suốt cả ngày.\r\n\r\nHướng dẫn sử dụng:\r\n– Gội sạch và lau khô tóc hoặc sấy khô 80%.\r\n– Xoa tay với 2-3 giọt tinh dầu (hoặc nhiều hơn, tùy độ dài của tóc) và massage đều vào ngọn tóc, đặc biệt là phần tóc hư tổn.\r\n– Sử dụng kết hợp với dầu gội, dầu xả và kem ủ tóc Olexrs để thấy hiệu quả rõ rệt.', '2024-05-06 23:42:48', 3);

-- ----------------------------
-- Table structure for slide
-- ----------------------------
DROP TABLE IF EXISTS `slide`;
CREATE TABLE `slide`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Anh` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of slide
-- ----------------------------
INSERT INTO `slide` VALUES (1, 'sl1.jpg');
INSERT INTO `slide` VALUES (2, 'sl2.jpg');

-- ----------------------------
-- Table structure for tintuc
-- ----------------------------
DROP TABLE IF EXISTS `tintuc`;
CREATE TABLE `tintuc`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Ten` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `Anh` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `NoiDung` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `NgayDang` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tintuc
-- ----------------------------
INSERT INTO `tintuc` VALUES (1, 'Đi tìm 5 loại kem chống nắng vật lý tốt cho làn da bạn gái châu Á', 'tt1.jpg', 'Sử dụng kem chống nắng vật lý vừa bảo vệ cho làn da của bạn, vừa góp phần bảo vệ môi trường sống xung quanh trở nên tốt hơn. Và đó cũng chính là “xu hướng mới” được các bạn gái châu Á chào đón nồng nhiệt.\r\n\r\nVới khí hậu nhiệt đới có nắng gắt như Việt Nam, thật khó để bạn “tẩy chay” kem chống nắng ra khỏi thế giới chăm sóc da của riêng bạn.\r\n\r\nVì dù cho bạn có chăm sóc da kỹ lưỡng và tốt đến cỡ nào, thì bước bảo vệ làn da khỏi ánh nắng mặt trời vẫn luôn được đề cao hết mức. Nếu không thì cả một quá trình dưỡng da của bạn đều “đổ sông đổ biển” trong nay mai. Vì vậy, thiếu gì thì thiếu chứ đừng thiếu kem chống nắng bạn nhé!\r\n\r\nThế nhưng, với thị trường mỹ phẩm “màu mỡ” như hiện nay, thì hẳn là các bạn gái lần đầu làm quen với kem chống nắng, sẽ khá bối rối khi lựa chọn sản phẩm. Liệu giữa kem chống nắng vật lý và hóa học, mình nên sử dụng loại nào là phù hợp ? Và liệu sản phẩm kem chống nắng này có tốt cho làn da châu Á, thậm chí là không gây nguy hiểm cho những rặng san hô ?\r\nĐừng lo! Tất cả mọi điều bạn băn khoăn sẽ được Mai Hân mỹ phẩm\r\n“giải mã” ngay sau đây thôi.\r\n\r\nTùy thuộc vào từng loại da, mà các bạn gái châu Á sẽ lựa chọn cho mình những sản phẩm kem chống nắng phù hợp. Bởi dù là kem chống nắng vật lý hay hóa học, thì chúng đều có những ưu khuyết điểm riêng bù trừ cho nhau.\r\n\r\nTuy nhiên, chúng mình vẫn khuyến khích các bạn gái châu Á sử dụng kem chống nắng vật lý, vì đây là sản phẩm phù hợp với đa số các loại da, dễ sử dụng và tốt cho làn da châu Á, nhất là những bạn có làn da dạy cảm sẽ không gây kích ứng da. Đặc biệt, là thành phần của kem rất thân thiện với môi trường, không gây ngụy hại cho rặng san hô.\r\n\r\nVà để dễ dàng hơn cho bạn trong việc đi tìm các sản phẩm kem chống nắng tốt cho da, Mai Hân mỹ phẩm sẽ “gợi ý” cho bạn 3 loại kem chống nắng vật lý tốt cho làn da châu Á, được nhiều chị em ưa chuộng và tin dùng trong suốt thời gian gần đây nhé.', '2024-05-06 23:28:36');

SET FOREIGN_KEY_CHECKS = 1;
