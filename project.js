/**
 * @api {get} /project/m/list Get List Project Mobile
 * @apiName GetListProjectMobile
 * @apiGroup Project
 * @apiParam {Int32} limit Limit Project In Bound.
 * @apiParam {Int32} page Number Of Page
 * @apiParam {Object} bound Bound of Map.
 * @apiParam {Object} project Use In Future.
 * @apiParam {Object} filter Filter Product.
 * @apiParam {String} isCount Default False.
 * @apiParamExample Example:
 *     {
 *       "limit": 500,
 *       "page": 1,   
 *       "bound": [[105.35075663894781,9.547623039625572],[109.50084208816656,12.161201566772144]],
 *       "filter":  {"category_id":["5d8345efa2178d987366fdef","5d8345fca2178d987366ff40"],"status_id":["5db66cb206d6a109b1513792"]},     
 *       "isCount": false              
 *     }
 * @apiSuccess {Array} listProject List Of Project.
 * @apiSuccessExample Example data on success:
 *  {
 *      "status": true,
 *      "data": {
 *          "items": [
 *              {
 *                  "_id": "5db80cfe44ab3a16f421594f",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Tổng diện t&iacute;ch quy hoạch tr&ecirc;n 11.6 ha. Manhattan City bao gồm 122 căn nh&agrave; phố v&agrave; 61 căn biệt thự, 2 block chung cư cao 18 v&agrave; 25 tầng. Ngo&agrave;i ra dự &aacute;n c&ograve;n c&oacute; khu thương mại dịch vụ rộng 1.538 m&sup2;, trường mẫu gi&aacute;o 3,521 m&sup2;, trường tiểu học 7,638 m&sup2;, trường trung học cơ sở 7,591 m&sup2; v&agrave; một c&ocirc;ng vi&ecirc;n c&acirc;y xanh rộng 15,083 m&sup2;.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Manhattan City hội đủ c&aacute;c tiện &iacute;ch của một đ&ocirc; thị hiện đại với c&aacute;c tiện &iacute;ch v&agrave; dịch vụ ho&agrave;n chỉnh ngay b&ecirc;n trong dự &aacute;n như: c&ocirc;ng vi&ecirc;n, hồ nước trung t&acirc;m, trường mẫu gi&aacute;o, trường cấp 1 v&agrave; cấp 2 theo ti&ecirc;u chuẩn Singapore, khu mua sắm, trung t&acirc;m thương mại &ndash; dịch vụ cao cấp 5 tầng. C&ugrave;ng h&agrave;ng loạt c&aacute;c tiện nghi hiện hữu c&oacute; sẵn trong b&aacute;n k&iacute;nh 3km để bạn c&ugrave;ng gia đ&igrave;nh sẵn s&agrave;ng tận hưởng như si&ecirc;u thị BigC, si&ecirc;u thị Metro, bệnh viện Triều An, trường THPT chuy&ecirc;n Nguyễn Thị Định, THPT B&Igrave;nh Ph&uacute;, trường cấp 1,2 An Lạc, ng&acirc;n h&agrave;ng Agribank, vietinbank, chợ An Lạc, l&agrave;ng đại học khu Nam S&agrave;i G&ograve;n&hellip;. Đảm bảo một tương lai vững chắc cho bạn v&agrave; gia đ&igrave;nh bạn. Ngo&agrave;i ra dự &aacute;n c&ograve;n được thiết kế theo hướng mở ph&ugrave; hợp với phong c&aacute;ch sống &Aacute; Đ&ocirc;ng, đảm bảo sự h&agrave;i h&ograve;a với m&ocirc;i trường nhằm tạo một kh&ocirc;ng gian xanh cho tổ ấm với hồ sen nằm giữa dự &aacute;n, c&ugrave;ng hệ thống mảng xanh tự nhi&ecirc;n, cạnh nh&aacute;nh s&ocirc;ng Bến Ngh&eacute;, tạo n&ecirc;n thế &ldquo;Đường tiền tụ thủy&rdquo; mang đến ph&uacute;c lộc dồi d&agrave;o cho chủ nh&acirc;n. </span></p>\n</body>\n</html>",
 *                  "code": "790201P00008",
 *                  "name": "Manhattan City",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Tan/790201P00008%20-%20Manhattan%20City/hinh_dai_dien_manhattan_city.jpg",
 *                  "investor": {
 *                      "_id": "5db814c95d0a533960ad5b14",
 *                      "company_name": "Công ty TNHH Xây dựng thương mại Hoàng Nam",
 *                      "display_name": "Hoàng Nam",
 *                      "code": "IV.0661"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường An Lạc"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận Bình Tân"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345efa2178d987366fdef",
 *                      "category_name": "Dự án phức hợp"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80cfe44ab3a16f421594f",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Tổng diện t&iacute;ch quy hoạch tr&ecirc;n 11.6 ha. Manhattan City bao gồm 122 căn nh&agrave; phố v&agrave; 61 căn biệt thự, 2 block chung cư cao 18 v&agrave; 25 tầng. Ngo&agrave;i ra dự &aacute;n c&ograve;n c&oacute; khu thương mại dịch vụ rộng 1.538 m&sup2;, trường mẫu gi&aacute;o 3,521 m&sup2;, trường tiểu học 7,638 m&sup2;, trường trung học cơ sở 7,591 m&sup2; v&agrave; một c&ocirc;ng vi&ecirc;n c&acirc;y xanh rộng 15,083 m&sup2;.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Manhattan City hội đủ c&aacute;c tiện &iacute;ch của một đ&ocirc; thị hiện đại với c&aacute;c tiện &iacute;ch v&agrave; dịch vụ ho&agrave;n chỉnh ngay b&ecirc;n trong dự &aacute;n như: c&ocirc;ng vi&ecirc;n, hồ nước trung t&acirc;m, trường mẫu gi&aacute;o, trường cấp 1 v&agrave; cấp 2 theo ti&ecirc;u chuẩn Singapore, khu mua sắm, trung t&acirc;m thương mại &ndash; dịch vụ cao cấp 5 tầng. C&ugrave;ng h&agrave;ng loạt c&aacute;c tiện nghi hiện hữu c&oacute; sẵn trong b&aacute;n k&iacute;nh 3km để bạn c&ugrave;ng gia đ&igrave;nh sẵn s&agrave;ng tận hưởng như si&ecirc;u thị BigC, si&ecirc;u thị Metro, bệnh viện Triều An, trường THPT chuy&ecirc;n Nguyễn Thị Định, THPT B&Igrave;nh Ph&uacute;, trường cấp 1,2 An Lạc, ng&acirc;n h&agrave;ng Agribank, vietinbank, chợ An Lạc, l&agrave;ng đại học khu Nam S&agrave;i G&ograve;n&hellip;. Đảm bảo một tương lai vững chắc cho bạn v&agrave; gia đ&igrave;nh bạn. Ngo&agrave;i ra dự &aacute;n c&ograve;n được thiết kế theo hướng mở ph&ugrave; hợp với phong c&aacute;ch sống &Aacute; Đ&ocirc;ng, đảm bảo sự h&agrave;i h&ograve;a với m&ocirc;i trường nhằm tạo một kh&ocirc;ng gian xanh cho tổ ấm với hồ sen nằm giữa dự &aacute;n, c&ugrave;ng hệ thống mảng xanh tự nhi&ecirc;n, cạnh nh&aacute;nh s&ocirc;ng Bến Ngh&eacute;, tạo n&ecirc;n thế &ldquo;Đường tiền tụ thủy&rdquo; mang đến ph&uacute;c lộc dồi d&agrave;o cho chủ nh&acirc;n. </span></p>\n</body>\n</html>",
 *                  "code": "790201P00008",
 *                  "name": "Manhattan City",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Tan/790201P00008%20-%20Manhattan%20City/hinh_dai_dien_manhattan_city.jpg",
 *                  "investor": {
 *                      "_id": "5db814cb5d0a533960ad5d2e",
 *                      "company_name": "Công ty cổ phần Thương mại địa ốc Thế Giới Lê",
 *                      "display_name": "L.World Corp",
 *                      "code": "IV.0930"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường An Lạc"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận Bình Tân"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345efa2178d987366fdef",
 *                      "category_name": "Dự án phức hợp"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80cfe44ab3a16f4215955",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Manhattan City bao gồm 2 block chung cư cao 18 v&agrave; 25 tầng với khoảng 1,000 căn hộ.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Dự &aacute;n được thiết kế theo hướng mở ph&ugrave; hợp với phong c&aacute;ch sống &Aacute; Đ&ocirc;ng, đảm bảo sự h&agrave;i h&ograve;a với m&ocirc;i trường nhằm tạo một kh&ocirc;ng gian xanh cho c&aacute;c căn hộ với hồ sen nằm giữa dự &aacute;n, c&ugrave;ng hệ thống mảng xanh tự nhi&ecirc;n, cạnh nh&aacute;nh s&ocirc;ng Bến Ngh&eacute;, tạo n&ecirc;n thế &ldquo;Đường tiền tụ thủy&rdquo; mang đến ph&uacute;c lộc dồi d&agrave;o cho người d&acirc;n. Tại Manhattan City c&ograve;n c&oacute; c&aacute;c tiện &iacute;ch của một đ&ocirc; thị hiện đại như: c&ocirc;ng vi&ecirc;n, hồ nước trung t&acirc;m, trường mẫu gi&aacute;o, trường cấp 1-2, khu mua sắm, trung t&acirc;m thương mại dịch vụ. C&ugrave;ng h&agrave;ng loạt c&aacute;c tiện &iacute;ch c&oacute; sẵn trong b&aacute;n k&iacute;nh 3km như: Si&ecirc;u thị BigC, Bệnh viện Triều An, trường cấp 1,2 An Lạc,&hellip; </span></p>\n</body>\n</html>",
 *                  "code": "790201P00010",
 *                  "name": "Manhattan City – A",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Tan/790201P00008%20-%20Manhattan%20City/hinh_dai_dien_manhattan_city.jpg",
 *                  "investor": {
 *                      "_id": "5db814c95d0a533960ad5b14",
 *                      "company_name": "Công ty TNHH Xây dựng thương mại Hoàng Nam",
 *                      "display_name": "Hoàng Nam",
 *                      "code": "IV.0661"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường An Lạc"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận Bình Tân"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80cfe44ab3a16f4215955",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Manhattan City bao gồm 2 block chung cư cao 18 v&agrave; 25 tầng với khoảng 1,000 căn hộ.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Dự &aacute;n được thiết kế theo hướng mở ph&ugrave; hợp với phong c&aacute;ch sống &Aacute; Đ&ocirc;ng, đảm bảo sự h&agrave;i h&ograve;a với m&ocirc;i trường nhằm tạo một kh&ocirc;ng gian xanh cho c&aacute;c căn hộ với hồ sen nằm giữa dự &aacute;n, c&ugrave;ng hệ thống mảng xanh tự nhi&ecirc;n, cạnh nh&aacute;nh s&ocirc;ng Bến Ngh&eacute;, tạo n&ecirc;n thế &ldquo;Đường tiền tụ thủy&rdquo; mang đến ph&uacute;c lộc dồi d&agrave;o cho người d&acirc;n. Tại Manhattan City c&ograve;n c&oacute; c&aacute;c tiện &iacute;ch của một đ&ocirc; thị hiện đại như: c&ocirc;ng vi&ecirc;n, hồ nước trung t&acirc;m, trường mẫu gi&aacute;o, trường cấp 1-2, khu mua sắm, trung t&acirc;m thương mại dịch vụ. C&ugrave;ng h&agrave;ng loạt c&aacute;c tiện &iacute;ch c&oacute; sẵn trong b&aacute;n k&iacute;nh 3km như: Si&ecirc;u thị BigC, Bệnh viện Triều An, trường cấp 1,2 An Lạc,&hellip; </span></p>\n</body>\n</html>",
 *                  "code": "790201P00010",
 *                  "name": "Manhattan City – A",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Tan/790201P00008%20-%20Manhattan%20City/hinh_dai_dien_manhattan_city.jpg",
 *                  "investor": {
 *                      "_id": "5db814cb5d0a533960ad5d2e",
 *                      "company_name": "Công ty cổ phần Thương mại địa ốc Thế Giới Lê",
 *                      "display_name": "L.World Corp",
 *                      "code": "IV.0930"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường An Lạc"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận Bình Tân"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80cfe44ab3a16f42159b2",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Chung cư Mỹ Đức được c&acirc;y dựng với quy m&ocirc; 21 tầng, 440 căn hộ, d&acirc;n số to&agrave;n khu đạt 6,616 người. Mỗi t&ograve;a nh&agrave; được thiết kế với h&agrave;nh lang rộng, mỗi block được lắp đặt 6 thang m&aacute;y, thang bộ v&agrave; lối tho&aacute;t hiểm,&hellip;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">C&aacute;c căn hộ được trang bị đường dẫn internet, c&aacute;p, điện thoại, kệ bếp, tủ bếp, bếp gas &acirc;m, m&aacute;y h&uacute;t m&ugrave;i, m&aacute;y nước n&oacute;ng,... Chung cư Mỹ Đức c&oacute; đầy đủ c&aacute;c tiện &iacute;ch c&ocirc;ng cộng như si&ecirc;u thị, ph&ograve;ng sinh hoạt cộng đồng, nh&agrave; trẻ mẫu gi&aacute;o, hồ bơi đặc biệt tại đ&acirc;y c&ograve;n x&acirc;y dựng khu trường học 4 tầng tr&ecirc;n diện t&iacute;ch 3,000 m&sup2; trong khu&ocirc;n vi&ecirc;n chung cư. </span></p>\n</body>\n</html>",
 *                  "code": "790310P00001",
 *                  "name": "Chung cư Mỹ Đức",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%20Binh%20Thanh/790310P00001%20-%20Chung%20cu%20My%20Duc/hinh_dai_dien_chung_cu_my_duc.jpg",
 *                  "investor": {
 *                      "_id": "5db814cb5d0a533960ad5dbe",
 *                      "company_name": "Công ty cổ phần Xây dựng Số 5",
 *                      "display_name": "SC5",
 *                      "code": "CS.1002"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường 21"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận Bình Thạnh"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0044ab3a16f4215bf5",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Dự &aacute;n c&oacute; quy m&ocirc; hơn 44,000 m&sup2; gồm 600 căn hộ t&aacute;i định cư, 100 ph&ograve;ng kh&aacute;ch sạn, 800 căn căn hộ văn ph&ograve;ng cho thu&ecirc;. Dự &aacute;n được thiết kế với kh&ocirc;ng gian xanh m&aacute;t của khu c&ocirc;ng vi&ecirc;n rợp b&oacute;ng c&acirc;y xanh, c&aacute;c trang thiết bị hiện đại đầu tạ gym, khu thể thao trong nh&agrave; v&agrave; ph&ograve;ng kh&aacute;m sức khoẻ cộng đồng, khu trung t&acirc;m thương mại,... </span></p>\n</body>\n</html>",
 *                  "code": "791210P00001",
 *                  "name": "Khu phức hợp Đầm Sen",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%2011/791210P00001%20-%20Khu%20Phuc%20Hop%20Dam%20Sen/hinh_dai_dien_khu_phuc_hop_dam_sen.jpg",
 *                  "investor": {
 *                      "_id": "5db814c65d0a533960ad5658",
 *                      "company_name": "Công ty TNHH một thành viên Đầu tư kinh doanh nhà Khang Phúc",
 *                      "display_name": "BCCI",
 *                      "code": "IV.0055"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường 3"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 11"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345efa2178d987366fdef",
 *                      "category_name": "Dự án phức hợp"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0144ab3a16f4215e35",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Trung t&acirc;m thương mại v&agrave; Chung cư So&aacute;i K&igrave;nh L&acirc;m được triển khai x&acirc;y dựng tr&ecirc;n khu đất c&oacute; tổng diện t&iacute;ch 12,545 m&sup2;, tổng diện t&iacute;ch s&agrave;n x&acirc;y dựng l&ecirc;n đến 51,596 m&sup2; gồm 2 block cao 17 tầng v&agrave; 30 tầng, trong đ&oacute;: </span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng hầm: 2 tầng hầm d&ugrave;ng để giữ xe.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng 1 &ndash; 6: Trung t&acirc;m thương mại v&agrave; dịch vụ.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng 7 &ndash; 12: Văn ph&ograve;ng cho thu&ecirc;, khu vực hồ bơi, khu vui chơi giải tr&iacute;.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng 13 &ndash; 30: Khu căn hộ với 208 căn, trong đ&oacute; t&aacute;i định cư 108 căn, kinh doanh 100 căn.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Trung t&acirc;m thương mại v&agrave; chung cư So&aacute;i K&igrave;nh L&acirc;m l&agrave; một trong những dự &aacute;n phức hợp khu căn hộ - trung t&acirc;m thương mại - dịch vụ v&agrave; văn ph&ograve;ng đầy đủ. Dự &aacute;n c&oacute; khu&ocirc;n vi&ecirc;n c&acirc;y xanh, s&acirc;n b&atilde;i v&agrave; đường nội bộ. </span></p>\n</body>\n</html>",
 *                  "code": "791706P00002",
 *                  "name": "Trung tâm thương mại và chung cư Soái Kình Lâm",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%205/791706P00002%20-%20Trung%20tam%20thuong%20mai%20va%20Chung%20cu%20Soai%20Kinh%20Lam/hinh_mo_ta_trung_tam_thuong_mai_va_chung_cu_soai_kinh_lam.jpg",
 *                  "investor": {
 *                      "_id": "5db814c85d0a533960ad58c0",
 *                      "company_name": "Công ty cổ phần Đầu tư Giai Lợi",
 *                      "display_name": "Giai Lợi",
 *                      "code": "IV.0363"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường 14"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 5"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0144ab3a16f4215e5f",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Sacomreal H&ugrave;ng Vương c&oacute; chiều cao 21 tầng v&agrave; 2 tầng hầm, trong đ&oacute; c&oacute; 5 tầng thương mại dịch vụ, c&aacute;c tầng căn hộ với tổng số căn hộ cung cấp cho thị trường l&agrave; 125 căn hộ v&agrave; 3,200 m&sup2; s&agrave;n diện t&iacute;ch văn ph&ograve;ng. Trong tổng số 125 căn hộ c&oacute;: 121 căn hộ căn hộ thường, diện t&iacute;ch từ 49 m&sup2; &ndash; 116 m&sup2; v&agrave; 4 căn hộ penthouse c&oacute; diện t&iacute;ch từ 184.3 m&sup2; &ndash; 211.4 m&sup2;.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Sacomreal H&ugrave;ng Vương được x&acirc;y dựng nhằm đem lại một cuộc sống chất lượng, hiện đại v&agrave; ho&agrave;n hảo cho cư d&acirc;n nơi đ&acirc;y. B&ecirc;n cạnh đ&oacute;, đ&acirc;y c&ograve;n l&agrave; một c&ocirc;ng tr&igrave;nh c&oacute; kiến tr&uacute;c độc đ&aacute;o, hiện đại, thể hiện sự vươn l&ecirc;n mạnh mẽ của Sacomreal cũng như Tập đo&agrave;n Sacombank trong thời đại mới. </span></p>\n</body>\n</html>",
 *                  "code": "791804P00002",
 *                  "name": "Sacomreal Hùng Vương",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%206/791804P00002%20-%20Sacomreal%20Hung%20Vuong/hinh_dai_dien_sacomreal_hung_vuong.jpg",
 *                  "investor": {
 *                      "_id": "5db814ca5d0a533960ad5cd8",
 *                      "company_name": "Công ty cổ phần Địa ốc Sài Gòn Thương Tín",
 *                      "display_name": "TTC Land",
 *                      "code": "IV.0887"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường 12"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 6"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0144ab3a16f4215e9e",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Grand Nest City được x&acirc;y dựng tr&ecirc;n diện t&iacute;ch 77,354.8 m&sup2;, mật độ x&acirc;y dựng to&agrave;n khu l&agrave; 43.1%. Dự &aacute;n cung ứng ra thị trường khoảng 3,580 căn hộ v&agrave; 131 nh&agrave; phố.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">B&ecirc;n cạnh hệ thống tiện &iacute;ch ngoại khu hiện hữu, Grand Nest c&ograve;n được đầu tư tiện &iacute;ch nội khu ho&agrave;n chỉnh v&agrave; đồng bộ: c&ocirc;ng vi&ecirc;n trung t&acirc;m với qu&atilde;ng trường nước v&agrave; &aacute;nh s&aacute;ng, hồ bơi tr&ecirc;n kh&ocirc;ng, ph&ograve;ng gym, spa, khu phố thương mại,... </span></p>\n</body>\n</html>",
 *                  "code": "791903P00008",
 *                  "name": "Grand Nest City",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%207/791903P00008%20-%20Grand%20Nest%20City/hinh_dai_dien_grand_nest_city.jpg",
 *                  "res_ward": {
 *                      "name": "Phường Phú Thuận"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 7"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345efa2178d987366fdef",
 *                      "category_name": "Dự án phức hợp"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0144ab3a16f4215ea1",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Dự &aacute;n Grand Nest được thiết kế với 8 block với 3,580 căn hộ. Nội thất căn hộ được thiết kế h&agrave;i h&ograve;a, b&agrave;i tr&iacute; tiện nghi, thể hiện sự sang trọng v&agrave; hiện đại ở tất cả c&aacute;c ph&ograve;ng. Với h&igrave;nh khối kiến tr&uacute;c độc đ&aacute;o của cao ốc c&oacute; thể hạn chế &aacute;nh s&aacute;ng trực tiếp v&agrave;o căn hộ nhưng lại tận dụng được nguồn s&aacute;ng tự nhi&ecirc;n v&agrave;o mọi vị tr&iacute; c&ocirc;ng tr&igrave;nh.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Dự &aacute;n Grand Nest kh&ocirc;ng chỉ sở hữu hệ thống tiện &iacute;ch ngoại khu hiện đại, khu căn hộ Grand Nest City c&ograve;n được t&iacute;ch hợp những tiện &iacute;ch cao cấp đồng bộ như: 3 c&ocirc;ng vi&ecirc;n c&acirc;y xanh, ph&ograve;ng gym, 3 hồ bơi hiện đại, 2 hồ đều tiết, trung t&acirc;m thương mại,... cung cấp đầy đủ mọi tiện nghi cho cư d&acirc;n tại Grand Nest. </span></p>\n</body>\n</html>",
 *                  "code": "791903P00009",
 *                  "name": "Grand Nest City – A",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%207/791903P00008%20-%20Grand%20Nest%20City/hinh_dai_dien_grand_nest_city.jpg",
 *                  "res_ward": {
 *                      "name": "Phường Phú Thuận"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 7"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0144ab3a16f4215ead",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Khang Th&ocirc;ng Apartment l&agrave; t&ograve;a nh&agrave; đa năng, cao 19 tầng với 2 tầng hầm. Dự &aacute;n nằm tr&ecirc;n khu diện t&iacute;ch đất rộng gần 3,394 m&sup2; với khoảng 32,250 m&sup2; diện t&iacute;ch s&agrave;n x&acirc;y dựng. Trong đ&oacute; diện t&iacute;ch 2 tầng hầm tr&ecirc;n 5,093 m&sup2;, diện t&iacute;ch 5 tầng trung t&acirc;m thương mại khoảng 8,660 m&sup2;, diện t&iacute;ch 14 tầng căn hộ v&agrave; penthouse khoảng 18,729 m&sup2;.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng 1: sảnh đ&oacute;n, ng&acirc;n h&agrave;ng, c&aacute;c gian h&agrave;ng thương mại &ndash; dịch vụ.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng 2: bố tr&iacute; khu si&ecirc;u thị.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng 3: khu nh&agrave; h&agrave;ng.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng 4: khu văn ph&ograve;ng cho thu&ecirc;, nh&agrave; trẻ, trường học.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng 5: sinh hoạt cộng đồng với khu giải tr&iacute;, thư gi&atilde;n, ph&ograve;ng tập thể dục thể thao đa năng,...</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">+ Tầng 6 &ndash; Tầng 19: 204 căn hộ v&agrave; 12 căn penthouse với nhiều mẫu thiết kế kh&aacute;c nhau. Diện t&iacute;ch mỗi căn hộ từ 60 m&sup2; đến 171 m&sup2; với 2 &ndash; 3 ph&ograve;ng ngủ. Mỗi ph&ograve;ng được trang thiết bị nội thất cao cấp, hiện đại, lắp đặt ho&agrave;n chỉnh hệ thống c&aacute;p truyền h&igrave;nh, internet. Đặc biệt, c&aacute;c ph&ograve;ng đều c&oacute; g&oacute;c nh&igrave;n ra ngo&agrave;i, lu&ocirc;n đảm bảo được sự th&ocirc;ng tho&aacute;ng nhờ thiết kế mở xung quanh. </span></p>\n</body>\n</html>",
 *                  "code": "791903P00013",
 *                  "name": "Khang Thông Apartment",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%207/791903P00013%20-%20Khang%20Thong%20Apartment/hinh_dai_dien_khang_thong_apartment.jpg",
 *                  "investor": {
 *                      "_id": "5db814ca5d0a533960ad5bd8",
 *                      "company_name": "Công ty cổ phần Tập đoàn Khang thông",
 *                      "display_name": "Khang Thong Group",
 *                      "code": "IV.0759"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường Phú Thuận"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 7"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0144ab3a16f4215ee6",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Căn hộ Greeny Riverview được quy hoạch tr&ecirc;n diện t&iacute;ch đất 8,526 m&sup2;, với quy m&ocirc; dự &aacute;n l&agrave; 3 th&aacute;p với chiều cao của mỗi th&aacute;p l&agrave; 25 tầng, tổng số căn hộ l&agrave; 690 căn.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Với phong c&aacute;ch thiết kế hiện đại theo chuẩn Singapore, c&aacute;c căn hộ tại đ&acirc;y sẽ mang đầy đủ c&aacute;c yếu tố phong thủy cho kh&aacute;ch h&agrave;ng khi muốn sở hữu căn hộ bậc nhất tại khu nam của th&agrave;nh phố Hồ Ch&iacute; Minh. </span></p>\n</body>\n</html>",
 *                  "code": "791905P00003",
 *                  "name": "Greeny Riverview",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%207/791905P00003%20-%20Greeny%20Riverview/hinh_dai_dien_greeny_riverview.jpg",
 *                  "investor": {
 *                      "_id": "5db814c65d0a533960ad55fa",
 *                      "company_name": "Công ty cổ phần Tập đoàn Đất Xanh",
 *                      "display_name": "Dat Xanh Group",
 *                      "code": "IV.0008"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường Tân Kiểng"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 7"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0244ab3a16f4215f79",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Căn hộ Sun River được x&acirc;y dựng tr&ecirc;n khu đất c&oacute; quy m&ocirc; 4,585 m&sup2; với 1 bock cao 22 tầng v&agrave; 1 tầng hầm.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng hầm: c&oacute; quy m&ocirc; 1,491 m&sup2; được sử dụng l&agrave;m b&atilde;i giữ xe.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng trệt: khu sinh hoạt cộng đồng v&agrave; thương mại dịch vụ.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">+ Tầng 2 &ndash; Tầng 22: khu căn hộ với 136 căn diện t&iacute;ch từ 49.7 &ndash; 77.23 m&sup2;.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt 51.3pt; text-align: justify; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">+ Tầng thượng: nh&agrave; h&agrave;ng v&agrave; cafe. </span></p>\n</body>\n</html>",
 *                  "code": "791908P00001",
 *                  "name": "Chung cư Sunriver",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%207/791908P00001%20-%20Can%20ho%20Sunriver/hinh_dai_dien_can_ho_sunriver.jpg",
 *                  "investor": {
 *                      "_id": "5db814c65d0a533960ad55fa",
 *                      "company_name": "Công ty cổ phần Tập đoàn Đất Xanh",
 *                      "display_name": "Dat Xanh Group",
 *                      "code": "IV.0008"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường Tân Quy"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 7"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0244ab3a16f4215fd3",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">The Avila 3 được thiết kế l&agrave; 1 t&ograve;a nh&agrave; cao 22 tầng gồm 1 tầng hầm, 1 tầng lửng hầm, 3 tầng khối đế v&agrave; 19 tầng khối th&aacute;p, với 285 căn hộ c&oacute; c&aacute;c diện t&iacute;ch từ 50 m&sup2; đến 70 m&sup2;, thiết kế từ 1 đến 3 ph&ograve;ng ngủ.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">The Avila 3 mang đến cho cư d&acirc;n một cuộc sống thoải m&aacute;i, ho&agrave;n hảo, thư gi&atilde;n trong từng khoảnh khắc với những dịch vụ đầy đủ như trung t&acirc;m thương mại, si&ecirc;u thị hiện đại, bar, caf&eacute;, nh&agrave; h&agrave;ng, spa, ph&ograve;ng tập gym,... c&ocirc;ng vi&ecirc;n c&acirc;y xanh, khu quảng trường tập trung, khu vui chơi trẻ em, nh&agrave; trẻ,... khiến kh&aacute;ch h&agrave;ng kh&ocirc;ng thể bỏ qua khi sống tại nơi đ&acirc;y. </span></p>\n</body>\n</html>",
 *                  "code": "792008P00015",
 *                  "name": "The Avila 3",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%208/792008P00015%20-%20The%20Avila%203/hinh_dai_dien_the_avila_3.jpg",
 *                  "investor": {
 *                      "_id": "5db814c95d0a533960ad5aca",
 *                      "company_name": "Công ty TNHH Sản xuất – Thương mại – Dịch vụ Thái Bảo",
 *                      "display_name": "Thái Bảo Group",
 *                      "code": "IV.0624"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường 16"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 8"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0244ab3a16f4215fdc",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Chung cư Khang Gia được thiết kế l&agrave; 1 t&ograve;a nh&agrave; cao 15 tầng với tổng số 146 căn hộ với nhiều diện t&iacute;ch từ 45 m&sup2;, 47 m&sup2;, 49 m&sup2;, 59 m&sup2;, 69 m&sup2;.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Ngo&agrave;i việc được thừa hưởng từ những tiện &iacute;ch xung quanh, dự &aacute;n Khang Gia c&ograve;n được tận hưởng những tiện &iacute;ch nội khu kh&ocirc;ng thua k&eacute;m như khu&ocirc;n vi&ecirc;n c&acirc;y xanh lớn v&agrave; 2 tầng thương mại với hệ thống nh&agrave; h&agrave;ng, ph&ograve;ng gym, coffee shop, si&ecirc;u thị,... đ&aacute;p ứng nhu cầu về tiện &iacute;ch cho cư d&acirc;n trong căn hộ. Diện t&iacute;ch để xe 1,823 m&sup2; (tầng hầm c&oacute; 1,105 m&sup2; v&agrave; tầng 2 c&oacute; 718 m&sup2;) đủ khả năng đ&aacute;p ứng chỗ đậu xe hơi v&agrave; hệ thống an ninh hiện đại cho người d&acirc;n an t&acirc;m định cư trong t&ograve;a nh&agrave;. </span></p>\n</body>\n</html>",
 *                  "code": "792011P00001",
 *                  "name": "Chung cư Khang Gia",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%208/792011P00001%20-%20Can%20ho%20Khang%20Gia/hinh_dai_dien_can_ho_khang_gia.jpg",
 *                  "res_ward": {
 *                      "name": "Phường 4"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận 8"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              },
 *              {
 *                  "_id": "5db80d0344ab3a16f42161e9",
 *                  "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">Harina View được thiết kế gồm 1 block cao 14 tầng với mật độ x&acirc;y dựng chiếm 40%. Trong đ&oacute;, tầng trệt l&agrave; khu vực d&agrave;nh cho c&aacute;c căn shophouse v&agrave; officetel, tầng 1 v&agrave; 2 l&agrave; tầng hệ thống c&aacute;c tiện &iacute;ch, từ tầng 3 trở l&ecirc;n l&agrave; tầng c&aacute;c căn hộ v&agrave; 1 tầng hầm để xe. Dự &aacute;n Harina View dự kiến cung ứng khoảng 141 căn hộ ra thị trường. Cụ thể gồm 9 căn officetel, 121 căn hộ ti&ecirc;u chuẩn (thiết kế 2 &ndash; 3 ph&ograve;ng ngủ) v&agrave; 11 căn penthouse. Diện t&iacute;ch mỗi căn hộ Harina View dao động từ 48.24 &ndash; 72 m&sup2; (2 &ndash; 3 ph&ograve;ng ngủ).</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-family: Arial, sans-serif; color: #000000;\">&nbsp;</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.95pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"font-size: 11pt; line-height: 107%; font-family: Arial, sans-serif; color: #000000;\">Hệ thống tiện &iacute;ch tại Harina View Thủ Đức gồm hồ bơi, si&ecirc;u thị, nh&agrave; trẻ, spa, ph&ograve;ng tập gym,... </span></p>\n</body>\n</html>",
 *                  "code": "792403P00007",
 *                  "name": "Harina View",
 *                  "image": "images/Project/Ho%20Chi%20Minh/Quan%20Thu%20Duc/792403P00007%20-%20Harina%20View/hinh_dai_dien_harina_view.jpg",
 *                  "investor": {
 *                      "_id": "5db814c85d0a533960ad590e",
 *                      "company_name": "Công ty cổ phần Đầu tư Thịnh Phúc Hải",
 *                      "display_name": "Thịnh Phúc Hải",
 *                      "code": "IV.0402"
 *                  },
 *                  "res_ward": {
 *                      "name": "Phường Hiệp Bình Chánh"
 *                  },
 *                  "res_district": {
 *                      "name": "Quận Thủ Đức"
 *                  },
 *                  "res_province": {
 *                      "name": "Thành phố Hồ Chí Minh"
 *                  },
 *                  "category": {
 *                      "_id": "5d8345fca2178d987366ff40",
 *                      "category_name": "Dự án chung cư"
 *                  },
 *                  "reaction_length": 0,
 *                  "total_views": 0
 *              }
 *          ]
 *      }
 *  }
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server lỗi"
 *     }
 * 
 */




 /**
 * @api {get} /project/m/findGeo Get Find Geo
 * @apiName GetFindGeo
 * @apiGroup Project
 * @apiParam {Int32} limit Limit Project In Bound.
 * @apiParam {Object} bound Bound of Map.
 * @apiParam {Object} filter Filter Product.
 * @apiParamExample Example:
 *     {
 *       "limit": 500, 
 *       "bound": [[105.35075663894781,9.547623039625572],[109.50084208816656,12.161201566772144]],
 *       "filter":  {"category_id":["5d8345efa2178d987366fdef","5d8345fca2178d987366ff40"],"status_id":["5db66cb206d6a109b1513792"]}          
 *     }
 * @apiSuccess {Array} listProject List Of Project.
 * @apiSuccessExample Example data on success:
 *  [
 *      {
 *          "_id": "5db80cfe44ab3a16f4215883",
 *          "points": {
 *              "type": "Point",
 *              "coordinates": [
 *                  106.60141803,
 *                  10.6851985261
 *              ]
 *          },
 *          "polygons": {
 *              "type": "Polygon",
 *              "coordinates": [
 *                  [
 *                      [
 *                          106.601355863,
 *                          10.685072958
 *                      ],
 *                      [...],
 *                      [...]
 *                  ]
 *              ]
 *          },
 *          "status_detail": {
 *              "status_name": "Chưa rõ",
 *              "marker_url": "Marker_chualam.svg",
 *              "marker_hover_url": "marker_bds_ban_hover.svg",
 *              "code": ""
 *          }
 *      },
 *      {...},
 *      {...}
 *  ]
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server lỗi"
 *     }
 * 
 */