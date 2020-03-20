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






 /**
 * @api {get} /project/detail Get Project Detail
 * @apiName GetProjectDetail
 * @apiGroup Project
 * @apiParam {ObjectId} id Project ID.
 * @apiParamExample Example:
 *     {
 *       "id": 5db80cfe44ab3a16f4215886           
 *     }
 * @apiSuccess {Object} result Project Detail.
 * @apiSuccessExample Example data on success:
 *  {
 *      "_id": "5db80cfe44ab3a16f4215886",
 *      "create_uid": {
 *          "_id": "5dbb9d3b65bb02ebb0ec7fb3",
 *          "email": "tu.nguyen@asset.vn",
 *          "avatar": "",
 *          "first_name": "Asset Data",
 *          "last_name": "Team",
 *          "phone": "3000000001"
 *      },
 *      "create_date": "2019-10-29T09:57:00.655Z",
 *      "write_uid": null,
 *      "write_date": "2019-10-29T09:57:00.655Z",
 *      "company_id": "",
 *      "status": true,
 *      "delete_id": null,
 *      "description": {
 *          "description": "Gồm 3 khu nhà liên kế LK1, LK2, LK3"
 *      },
 *      "reaction": [],
 *      "sub_image": [],
 *      "code": "790101P00002",
 *      "parent_id": "5db80cfe44ab3a16f4215883",
 *      "points": {
 *          "type": "Point",
 *          "coordinates": [
 *              106.598754261604,
 *              10.6845769284695
 *          ]
 *      },
 *      "polygons": {
 *          "type": "Polygon",
 *          "coordinates": [
 *              [
 *                  [
 *                      106.597746687,
 *                      10.68441784900006
 *                  ],
 *                  [
 *                      106.5977364440001,
 *                      10.68403031900004
 *                  ],
 *                  [
 *                      106.599022469,
 *                      10.68381704800004
 *                  ],
 *                  [
 *                      106.5990279050001,
 *                      10.68428372700004
 *                  ],
 *                  [
 *                      106.5994064820001,
 *                      10.68427147900007
 *                  ],
 *                  [
 *                      106.599410413,
 *                      10.68480805300004
 *                  ],
 *                  [
 *                      106.5996669500001,
 *                      10.68481070900003
 *                  ],
 *                  [
 *                      106.599689734,
 *                      10.68507071100004
 *                  ],
 *                  [
 *                      106.5991819860001,
 *                      10.68509009700006
 *                  ],
 *                  [
 *                      106.5991677790001,
 *                      10.68550970200005
 *                  ],
 *                  [
 *                      106.598865157,
 *                      10.68548856900003
 *                  ],
 *                  [
 *                      106.5989555750001,
 *                      10.68481591000005
 *                  ],
 *                  [
 *                      106.5989781950001,
 *                      10.68434031400005
 *                  ],
 *                  [
 *                      106.597746687,
 *                      10.68441784900006
 *                  ]
 *              ]
 *          ]
 *      },
 *      "ward_id": "5dc237d1d508de3c4c58bb75",
 *      "category_id": "5d834606a2178d987367003a",
 *      "name": "HQC An Phú Tây - U",
 *      "apartment_project_unit_id": "dự án chung cư",
 *      "urban_project": 1,
 *      "urban_project_unit_id": "dự án đô thị",
 *      "resort_project": null,
 *      "ch_unit_id": "CH",
 *      "sh_unit_id": "SH",
 *      "oft_unit_id": "OFT",
 *      "tmdv_unit_id": "m2 TMDV",
 *      "hotel_room_unit_id": "phòng khách sạn",
 *      "villa_unit_id": "biệt thự",
 *      "private_house_unit_id": "Nhà riêng",
 *      "row_house_unit_id": "nhà phố liên kế",
 *      "lands": 58,
 *      "lands_unit_id": "nền đất",
 *      "condotel_unit_id": "condotel",
 *      "bungalow_unit_id": "bungalow",
 *      "land_area": 2235,
 *      "land_area_unit_id": "m2",
 *      "cons_status": "5db66cb206d6a109b1513792",
 *      "planing_category_id": "5dc38bf3b276eb1c887806a2",
 *      "floor_unit_id": "tầng",
 *      "block_unit_id": "block",
 *      "search": "hqc an phu tay u",
 *      "__v": 1,
 *      "comment": [],
 *      "image": "images/Project/Ho%20Chi%20Minh/Huyen%20Binh%20Chanh/790101P00001%20-%20HQC%20An%20Phu%20Tay/hinh_dai_dien_hqc_an_phu_tay.jpg",
 *      "location": "N/A",
 *      "investor_id": [
 *          "5db814ca5d0a533960ad5baa"
 *      ],
 *      "handover_time": "2018-09-02T00:00:00.000Z",
 *      "contractor_id": [],
 *      "designer_id": [],
 *      "manager_id": [],
 *      "resort_project_unit_id": "dự án nghỉ dưỡng",
 *      "sale_status": "5dde360bd59979b3b85cfaf3",
 *      "rating": [],
 *      "asset_rating": 0,
 *      "legal": "Tình trạng pháp lý chưa rõ",
 *      "legal_info_id": "5e465f840567113decd48019",
 *      "model_house_info_id": "5e465f840567113decd4801a",
 *      "sale_price_unit_id": "triệu/căn",
 *      "comme_project_unit_id": "dự án TMDV",
 *      "hotel_project_unit_id": "dự án khách sạn",
 *      "cemet_unit_id": "BĐS hoa viên",
 *      "farm_unit_id": "trang trại",
 *      "harbo_unit_id": "bến cảng",
 *      "indu_unit_id": "dự án KCN",
 *      "bindu_unit_id": "BĐS KCN",
 *      "edme_unit_id": "dự án GD - YT",
 *      "bedme_unit_id": "BĐS GD - YT",
 *      "hotel_unit_id": "block khách sạn",
 *      "resvl_unit_id": "biệt thự nghỉ dưỡng",
 *      "small_unit_id": "block TTTM",
 *      "office_unit_id": "block VP",
 *      "category": {
 *          "_id": "5d834606a2178d987367003a",
 *          "create_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          "create_date": "2019-07-10T13:01:26.292Z",
 *          "write_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          "write_date": "2019-09-03T02:09:51.852Z",
 *          "company_id": "ROOT",
 *          "status": true,
 *          "delete_id": "2ea1eb33-0681-4ef5-a10b-151ef41c028d",
 *          "category_name": "Dự án Khu đô thị",
 *          "parent_id": "",
 *          "category_code": "UPROJ",
 *          "sequence": 4,
 *          "keyworks": "",
 *          "description": "",
 *          "color": "#B7BAF3"
 *      },
 *      "investorDetail": [
 *          {
 *              "_id": "5db814ca5d0a533960ad5baa",
 *              "create_uid": "5dbb9fbbebd384b5e4ecc368",
 *              "create_date": "2020-01-16T09:04:52.071Z",
 *              "write_uid": "5d679819325ab70ab0157ce5",
 *              "write_date": "2019-10-29T10:14:41.057Z",
 *              "company_id": "ROOT",
 *              "status": true,
 *              "delete_id": null,
 *              "parent_id": null,
 *              "tel": "02839913080",
 *              "hotline": "",
 *              "email": "",
 *              "website": "www.hoangquan.com.vn",
 *              "address1": "286-288 Huỳnh Văn Bánh, Phường 11, Quận Phú Nhuận, Thành phố Hồ Chí Minh",
 *              "address": "286-288 Huỳnh Văn Bánh",
 *              "company_name": "Công ty cổ phần Tư vấn – Thương mại – Dịch vụ địa ốc Hoàng Quân",
 *              "display_name": "Hoang Quan Corp",
 *              "founded_year": 2007,
 *              "legal_representative": "Trương Anh Tuấn",
 *              "company_type": "CTCP",
 *              "tax_code": "0302087938",
 *              "bank_account": "",
 *              "bank_name": "",
 *              "bank_branch": "",
 *              "description": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"color: #000000;\">Được th&agrave;nh lập v&agrave;o năm 2000, đến nay Ho&agrave;ng Qu&acirc;n Group đ&atilde; trở th&agrave;nh một trong những tập đo&agrave;n h&agrave;ng đầu Việt Nam về đầu tư kinh doanh bất động sản. Đặc biệt, Ho&agrave;ng Qu&acirc;n l&agrave; doanh nghiệp ti&ecirc;n phong đầu tư x&acirc;y dựng v&agrave; ph&aacute;t triển nh&agrave; ở x&atilde; hội tại khu vực ph&iacute;a Nam qua việc triển khai h&agrave;ng loạt c&aacute;c dự &aacute;n c&oacute; quy m&ocirc; lớn tại Th&agrave;nh phố Hồ Ch&iacute; Minh, Cần Thơ, Vĩnh Long, T&acirc;y Ninh, B&igrave;nh Thuận, Nha Trang,... cung cấp h&agrave;ng chục ng&agrave;n căn hộ đến cho người d&acirc;n.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\">&nbsp;</p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"color: #000000;\">Ngay từ l&uacute;c đặt nền m&oacute;ng x&acirc;y dựng, Ho&agrave;ng Qu&acirc;n lu&ocirc;n hướng đến kh&aacute;ch h&agrave;ng với phương ch&acirc;m \"Tri thức &ndash; S&aacute;ng tạo &ndash; Ti&ecirc;n phong\", đem đến cho kh&aacute;ch h&agrave;ng những sản phẩm với gi&aacute; trị chuy&ecirc;n nghiệp, chất lượng v&agrave; dịch vụ tốt nhất. B&ecirc;n cạnh thế mạnh về lĩnh vực bất động sản, Ho&agrave;ng Qu&acirc;n c&ograve;n tăng cường đầu tư ph&aacute;t triển lĩnh vực gi&aacute;o dục, t&agrave;i ch&iacute;nh. Với những th&agrave;nh quả đ&atilde; đạt được trong những năm qua, Ho&agrave;ng Qu&acirc;n sẽ c&agrave;ng tự h&agrave;o v&agrave; vững bước hơn nữa với mục ti&ecirc;u trở th&agrave;nh tập đo&agrave;n &ldquo;Bất động sản &ndash; Gi&aacute;o dục &ndash; T&agrave;i ch&iacute;nh&rdquo; h&ugrave;ng mạnh n&ecirc;u cao tinh thần &ldquo;Vững bước ti&ecirc;n phong &ndash; N&acirc;ng tầm cao mới&rdquo;.</span></p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\">&nbsp;</p>\n<p style=\"margin: 0in 0in 0.0001pt; text-align: justify; text-indent: 22.9pt; line-height: normal; font-size: 11pt; font-family: Calibri, sans-serif;\"><span style=\"color: #000000;\">Từ khi th&agrave;nh lập, Ho&agrave;ng Qu&acirc;n đ&atilde; tự h&agrave;o l&agrave; c&ocirc;ng ty đầu ti&ecirc;n trong ng&agrave;nh địa ốc triển khai v&agrave; &aacute;p dụng Hệ thống Quản l&yacute; chất lượng ISO 9001:2008, v&agrave; cũng l&agrave; c&ocirc;ng ty đầu ti&ecirc;n tại Việt Nam x&acirc;y dựng quy tr&igrave;nh hoạt động bất động sản kh&eacute;p k&iacute;n từ m&ocirc;i giới, đến thiết kế, x&acirc;y dựng, thẩm định gi&aacute;, ph&aacute;p l&yacute;, đem lại hiệu quả kinh tế cao cho kh&aacute;ch h&agrave;ng. Hiện tại, hệ thống Ho&agrave;ng Qu&acirc;n c&oacute; 16 c&ocirc;ng ty th&agrave;nh vi&ecirc;n, 14 chi nh&aacute;nh &ndash; trung t&acirc;m giao dịch tr&ecirc;n khắp c&aacute;c tỉnh th&agrave;nh cả nước. Lượng kh&aacute;ch h&agrave;ng, đối t&aacute;c trong v&agrave; ngo&agrave;i nước tham gia g&oacute;p vốn đầu tư c&ugrave;ng Ho&agrave;ng Qu&acirc;n l&ecirc;n đến con số 10,000. Đội ngũ nh&acirc;n sự gần 1,000 nh&acirc;n vi&ecirc;n c&oacute; tr&igrave;nh độ chuy&ecirc;n m&ocirc;n cao (tiến sỹ, thạc sỹ, luật sư, chuy&ecirc;n vi&ecirc;n,...) mang phong c&aacute;ch phục vụ chuy&ecirc;n nghiệp.</span></p>\n</body>\n</html>",
 *              "search": "CÔNG TY CỔ PHẦN TƯ VẤN - THƯƠNG MẠI - DỊCH VỤ ĐỊA ỐC HOÀNG QUÂN cong ty co phan tu van thuong mai dich vu dia oc hoang quan ĐỊA ỐC HOÀNG QUÂN dia oc hoang quan",
 *              "points": null,
 *              "icon": "",
 *              "logo": "images/Company/0701%20-%200800/0736%20-%20Dia%20Oc%20Hoang%20Quan/logo_dia_oc_hoang_quan.png",
 *              "code": "IV.0736",
 *              "__v": 0,
 *              "rating": [],
 *              "rating_avg": 0,
 *              "reaction": [],
 *              "category_id": "5dafd01513818c28e0916318",
 *              "banner": "",
 *              "company_code": "0302087938",
 *              "country_code": "(+84)",
 *              "foreign_name": "",
 *              "main_business": "Kinh doanh bất động sản, quyền sử dụng đất thuộc chủ sở hữu, chủ sử dụng hoặc đi thuê",
 *              "operating_status": "Đang hoạt động",
 *              "ward_id": "5dc237a6d508de3c4c58834a",
 *              "type": "APPROVED",
 *              "bank_id": null
 *          }
 *      ],
 *      "landTypeDetail": {
 *          "_id": "5dc38bf3b276eb1c887806a2",
 *          "red": "255",
 *          "green": "160",
 *          "code": "ODT",
 *          "name": "Đất ở tại đô thị",
 *          "__v": 0,
 *          "blue": "255"
 *      },
 *      "cons_statusDetail": {
 *          "_id": "5db66cb206d6a109b1513792",
 *          "create_uid": "5d679819325ab70ab0157ce5",
 *          "create_date": "2019-10-04T01:12:09.606Z",
 *          "write_uid": "5d679819325ab70ab0157ce5",
 *          "write_date": "2019-10-04T01:12:09.606Z",
 *          "company_id": "ROOT",
 *          "status": true,
 *          "delete_id": null,
 *          "image_url": "",
 *          "sequence": 0,
 *          "parent_id": null,
 *          "status_name": "Chưa rõ",
 *          "fill": "#9c9c9c",
 *          "marker_url": "Marker_chualam.svg",
 *          "marker_hover_url": "marker_bds_ban_hover.svg",
 *          "__v": 0,
 *          "code": "PENDING"
 *      },
 *      "category_name": "Dự án Khu đô thị",
 *      "create_user_role": [
 *          "Asset Data Center"
 *      ],
 *      "wardDetail": {
 *          "_id": "5dc237d1d508de3c4c58bb75",
 *          "create_uid": "5d679819325ab70ab0157ce5",
 *          "create_date": "2020-01-16T09:02:21.597Z",
 *          "write_uid": "5d679819325ab70ab0157ce5",
 *          "write_date": "2019-11-06T03:00:21.913Z",
 *          "company_id": "ROOT",
 *          "status": true,
 *          "delete_id": null,
 *          "reaction": [],
 *          "code": "790101",
 *          "name": "Xã An Phú Tây",
 *          "type": "Xã",
 *          "district_id": "5dc0d055ade2533578818bbb",
 *          "points": {
 *              "type": "Point",
 *              "coordinates": [
 *                  106.607859787,
 *                  10.6875390948
 *              ]
 *          },
 *          "__v": 0
 *      },
 *      "districtDetail": {
 *          "_id": "5dc0d055ade2533578818bbb",
 *          "create_uid": "5d679819325ab70ab0157ce5",
 *          "create_date": "2020-01-16T09:03:10.342Z",
 *          "write_uid": "5d679819325ab70ab0157ce5",
 *          "write_date": "2019-11-05T01:28:42.327Z",
 *          "company_id": "ROOT",
 *          "status": true,
 *          "delete_id": null,
 *          "reaction": [],
 *          "code": "7901",
 *          "main_code": "01",
 *          "name": "Huyện Bình Chánh",
 *          "type": "Huyện",
 *          "province_id": "5dc0cfc6bf871b3a3c6296bd",
 *          "points": {
 *              "type": "Point",
 *              "coordinates": [
 *                  106.575826672,
 *                  10.7337045834
 *              ]
 *          },
 *          "__v": 0
 *      },
 *      "provinceDetail": {
 *          "_id": "5dc0cfc6bf871b3a3c6296bd",
 *          "create_uid": "5d679819325ab70ab0157ce5",
 *          "create_date": "2019-11-05T01:26:10.350Z",
 *          "write_uid": "5d679819325ab70ab0157ce5",
 *          "write_date": "2019-11-05T01:26:10.350Z",
 *          "company_id": "ROOT",
 *          "status": true,
 *          "delete_id": null,
 *          "reaction": [],
 *          "country_id": "243",
 *          "code": "79",
 *          "name": "Thành phố Hồ Chí Minh",
 *          "type": "Thành phố",
 *          "__v": 0,
 *          "points": {
 *              "type": "Point",
 *              "coordinates": [
 *                  106.704809484,
 *                  10.735237004
 *              ]
 *          }
 *      },
 *      "legal_info": {
 *          "investment_approval": {
 *              "status": "Có",
 *              "file": "\\project\\5db80cfe44ab3a16f4215886\\5db80cfe44ab3a16f4215886-investment_approval_link-Approve Product Diagram (DATA).png-1581670326405.png"
 *          },
 *          "me_drawing_for_per_apartment": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "acceptance_of_fire_protection_system": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "acceptance_of_works": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "agreement_on_connection_of_electricity_and_water_works": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "agreement_on_traffic_connection": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "agreement_redbook_investor_and_buyer": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "approval_of_backfill_design": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "approval_of_basic_design": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "approval_of_construction_design": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "approval_of_engineering_design": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "approval_of_fire_prevention_and_fighting": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "approval_of_infrastructure_design": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "bank_guarantee": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "basement_foundation_acceptance": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "certificate_of_business_registration": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "certificate_of_investment_registration": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "certification_of_investor": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "confirmation_of_infrastructure_completion": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "construction_permit": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "construction_survey_report": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "deal_of_construction_height": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "deal_of_embankment_edges": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "decisions_on_land_allocation_land_lease": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "economic_technical_report": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "environmental_impact_assessment_report": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "escrow_agreement": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "feasibility_study_repor": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "finish_dossiers": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "home_recieving_notice_to_buyers": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "house_numbering_decision": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "location_drawing": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "minutes_of_handover_of_houses_or_construction_to_buyers": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "notice_of_approval_of_sample_contract": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "notice_of_eligibility_for_capital_raising": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "notification_of_payment_of_land_use": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "notification_of_the_residences_eligibility_for_sale": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "notifications_of_request_for_registration_fee": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "redbook_buyer": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "redbook_land": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "strategic_environmental_assessment_report": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "status": true,
 *          "_id": "5e465f840567113decd48019",
 *          "__v": 0,
 *          "detailed_planning_1_500": {
 *              "status": "Chưa rõ",
 *              "file": null
 *          },
 *          "create_date": "2020-03-20T09:26:37.073Z",
 *          "write_date": "2020-03-20T09:26:37.073Z"
 *      },
 *      "cons_design_info": {
 *          "_id": null,
 *          "__v": 0,
 *          "int_finishing": {
 *              "wooden": {
 *                  "bed": "Chưa có"
 *              }
 *          },
 *          "create_date": "2020-03-20T09:26:37.076Z",
 *          "write_date": "2020-03-20T09:26:37.076Z",
 *          "detail": {}
 *      }
 *  }
 * @apiError idProject The <code>idProject</code> was null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 4XX Bad Request
 *     {
 *       "status": "false",
 *       "error": "Thiếu thông tin"
 *     }
 * @apiError project The <code>project</code> was not found.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 4XX Not Found
 *     {
 *       "status": "false",
 *       "error": "Không tìm thấy thông tin dự án"
 *     }
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server lỗi"
 *     }
 * 
 */

