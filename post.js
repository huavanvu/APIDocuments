/**
 * @api {get} /post/get_list Get All Post
 * @apiName postGetList
 * @apiGroup Post
 *
 * @apiSuccess {Json} list_post List of post and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *  _id: "99500440-9fa7-4c98-9947-ba0fce369ed9",
 *  create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *  create_date: "2019-06-20T08:17:33.450Z",
 *  write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *  write_date: "2019-07-26T02:06:26.855Z",
 *  company_id: "ROOT",
 *  status: false,
 *  delete_id: "",
 *  name: "Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?",
 *  description: "Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.",
 *  url_id: "77",
 *  url_name: "Khai-Niem-Khong-Gian-Song-&-Dien-Tich-Su-Dung-La-Gi?",
 *  sequence: "0.0",
 *  photo: "7bd988bd-5c11-4586-ace6-c1e8d8be18f3",
 *  receipt_no: 1,
 *  receipt_date: "2019-06-20T02:06:26.000Z",
 *  keyword: "không gian sống, diện tích sử dụng",
 *  publish: true,
 *  publish_date: "2019-06-22T00:50:49.217Z",
 *  short_description: "Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án."
 * }
 * 
 *
 */



 /**
 * @api {get} /post/get_by_id Get post by ID
 * @apiName postGetPostByID
 * @apiGroup Post
 *
 * @apiSuccess {Json} post[] Get list of post by id and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *  _id: "99500440-9fa7-4c98-9947-ba0fce369ed9",
 *  create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *  create_date: "2019-06-20 15:17:33.45",
 *  write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *  write_date: "2019-07-26 09:06:26.855",
 *  company_id: "ROOT",
 *  status: "0",
 *  delete_id: "",
 *  name: "Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?",
 *  description: "Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.",
 *  url_id: "77",
 *  url_name: "Khai-Niem-Khong-Gian-Song-&-Dien-Tich-Su-Dung-La-Gi?",
 *  sequence: "0.0",
 *  photo: "7bd988bd-5c11-4586-ace6-c1e8d8be18f3",
 *  receipt_no: "1",
 *  receipt_date: "2019-06-20 09:06:26.0",
 *  keyword: "không gian sống, diện tích sử dụng",
 *  publish: "1",
 *  publish_date: "2019-06-22 07:50:49.217",
 *  short_description: "Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.",
 *  document: "<p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;"><span style="font-weight: 700;">Không gian sống là một khái niệm mới xuất hiện trong thời gian gần đây, khi mà thiết kế ngày càng được chú trọng hơn. Còn diện tích sử dụng thì nghe có vẻ quen thuộc nhưng không phải ai cũng biết nhiều về nó</span>.</p><div class="wp-block-image" style="max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;"><div style="text-align: center;"><img src="document?id=0773e67e-7bb2-42ff-8019-e9ca73d59c13" style="width: 600px;"></div><figure class="aligncenter is-resized" style="display: table; margin: 20px auto; max-width: 100%; height: auto; text-align: center;"><br></figure></div><p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;"></p><h2 style="font-family: Tahoma, Verdana, Segoe, sans-serif; font-weight: 700; line-height: 1.3; color: rgb(45, 45, 45); margin-top: 20px; font-size: 30px;"><span class="ez-toc-section" id="Gioi_thieu_khai_niem_Dien_tich_su_dung">Giới thiệu khái niệm Diện tích sử dụng</span></h2><p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;">Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án, được tính bằng đơn vị mét vuông (m2).</p><p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;">Loại diện tích này cũng được tính khác nhau tùy theo các loại Bất động sản và quan điểm tính.</p><ul style="margin-bottom: 17px; font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;"><li style=""><font color="#222222">Với&nbsp;</font><font style=""><span style="transition-duration: 0.07s; transition-property: all;">nhà ở riêng lẻ</span></font><font color="#222222">: là diện tích sử dụng thường được tính bằng cách cộng toàn bộ diện tích các sàn, sân trước, sân sau,… Ví dụ một nhà 3 tầng và không có sân, mỗi tầng 40m2 thì diện tích sử dụng là 120m2.</font></li><li style=""><font color="#222222">Với&nbsp;</font><font style=""><span style="transition-duration: 0.07s; transition-property: all;">căn hộ chung cư</span></font><font color="#222222">&nbsp;thì được tách ra 02 loại diện tích là diện tích tim tường và diện tích thông thủy.</font><ul style="color: rgb(34, 34, 34); margin-bottom: 17px;"><li>Diện tích tim tường: được tính từ tim tường bao, và các chủ đầu tư thường dùng diện tích này để tính giá bán cho khách hàng.</li><li>Diện tích thông thủy (hay diện tích lọt lòng): diện tích này là diện tích không tính tường bao, đây là diện tích được ghi trong giấy chứng nhận quyền sở hữu nhà ở. Thường diện tích này nhỏ hơn diện tích tim tường khoảng 5%.</li></ul></li></ul><div class="wp-block-image" style="text-align: center; max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;"><img src="document?id=e041ffb7-654a-45a2-9340-90e51a736ce5" style="width: 50%;"><br></div><p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;"><span style="font-weight: 700;">Lưu ý</span>: Diện tích sử dụng này chính là diện tích bán được (NSA) và nó khác với diện tích xây dựng theo cách tính của nhà thầu.</p><h2 style="font-family: Tahoma, Verdana, Segoe, sans-serif; font-weight: 700; line-height: 1.3; color: rgb(45, 45, 45); margin-top: 20px; font-size: 30px;"><span class="ez-toc-section" id="Khong_gian_song_la_gi">Không gian sống là gì?</span></h2><div class="wp-block-image" style="max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;"><div style="text-align: center;"><img src="document?id=16ddb9b9-1b03-40f6-b032-4c5aaae67622" style="width: 540px;"></div><figure class="aligncenter" style="display: table; margin: 20px auto; max-width: 100%; height: auto; text-align: center;"><br></figure></div><p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;">Không gian sống là đề cập đến cảm giác về không gian và chức năng. Thay vì diện tích mang tính vật lý, không gian sống được thể hiện bằng số lượng các phòng chức năng như số phòng ngủ, số WC, ban công, phòng khách, bếp, lô gia, …</p><p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;">Các phòng chức năng này chỉ cần một diện tích vừa đủ, không cần rộng quá, vì một số loại phòng mà rộng quá đôi khi có cảm giác không tốt bằng có diện tích vừa đủ.</p><p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;">Nhất là phòng ngủ, chỉ cần rộng khoảng 9 – 16m2 là vừa, to hơn sẽ cảm thấy trống trải.</p><p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;">Không gian sống không chỉ có diện tích vừa đủ đối với các phòng chức năng, mà còn có các tính chất khác.</p><p style="margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;">Như bếp thì cần thông khí, phòng khách, phòng ngủ thì cần thông thoáng…, đó là chưa kể đến việc bố trí các vật dụng, bố trí vị trí các phòng chức năng để thuận tiện trong sinh hoạt.</p><div class="wp-block-image" style="max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;"><div style="text-align: center;"><img src="document?id=9cf09885-8f31-4e29-b56b-464dd26358f7" style="width: 669px;"></div></div><p style="margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;">Với nhiều phòng chức năng, và mỗi phòng chức năng có một yêu cầu riêng, thế nên để có một không gian sống tốt thì không nhất thiết phải có diện tích sử dụng lớn, mà cần cách bố trí các phòng chức năng phù hợp ở vị trí phù hợp. Và điều này gây rất nhiều cơn đau đầu cho các nhóm làm nhiệm vụ thiết kế, đặc biệt là căn hộ chung cư.</p> "
 * }
 * @apiParam {ObjectID} postID ID of post. Example param: {99500440-9fa7-4c98-9947-ba0fce369ed9}
 * @apiError PostLengthError Not found. Minimum of <code>1</code> character is required.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Not found"
 *     }
 */




 
/**
 * @api {get} /post/get_by_category_sequence Get post by category sequence
 * @apiName postSequence
 * @apiGroup Post
 *
 * @apiSuccess {Json} list_post List of post and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *  _id: "1273700a-4e6f-41cf-846c-axdfd3b0abbe",
 *  post: {
 *         _id: "99500440-9fa7-4c98-9947-ba0fce369ed9",
 *         create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *         create_date: "2019-06-20 15:17:33.45",
 *         write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *         write_date: "2019-07-26 09:06:26.855",
 *         company_id: "ROOT",
 *         status: "0",
 *         delete_id: "",
 *         name: "Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?",
 *         description: "Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.",
 *         url_id: "77",
 *         url_name: "Khai-Niem-Khong-Gian-Song-&-Dien-Tich-Su-Dung-La-Gi?",
 *         sequence: "0.0",
 *         photo: "7bd988bd-5c11-4586-ace6-c1e8d8be18f3",
 *         receipt_no: "1",
 *         receipt_date: "2019-06-20 09:06:26.0",
 *         keyword: "không gian sống, diện tích sử dụng",
 *         publish: "1",
 *         publish_date: "2019-06-22 07:50:49.217",
 *         short_description: "Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.",
 *         user: {
 *                 _id: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *                 create_uid: "",
 *                 create_date: "2017-09-27 09:44:05.421",
 *                 write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *                 write_date: "2019-07-27 13:39:22.291668",
 *                 company_id: "ROOT",
 *                 status: "0",
 *                 delete_id: "",
 *                 user_name: "admin",
 *                 name: "Asset",
 *                 password: "7fba729fa18f4662eedda4cff80b47c6",
 *                 partner_id: "5528511e-28e2-410b-8d95-d0e6f77316d7",
 *                 signature: "",
 *                 email: "vang@bluebytez.com",
 *                 lang_id: "76",
 *                 gmt_offset: "-420.0",
 *                 date_format: "DD/MM/YYYY",
 *                 time_format: "HH:MM:SS",
 *                 thousands_sep: ".",
 *                 decimal_point: ",",
 *                 avatar: "25805c28-36e7-4fdb-a8b5-b1c2c868ad87",
 *                 type: "4.5+",
 *                 inactive: "0",
 *                 renew_password_id: "",
 *                 online: "0"
 *               },
 *         type: "post"
 *       },
 *  post_category: {
 *                  _id: "cb9e7184-f52a-4acd-80bf-9e5a50689eee",
 *                  create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *                  create_date: "2019-06-20 10:55:53.79",
 *                  write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *                  write_date: "2019-06-20 10:58:12.192",
 *                  company_id: "ROOT",
 *                  status: "0",
 *                  delete_id: "",
 *                  name: "Tin tức thời sự",
 *                  sequence: "1.0",
 *                  url_id: "21",
 *                  url_name: "Tin-tuc-thoi-su",
 *                  type: "POST",
 *                  parent_id: "",
 *                  keyword: "",
 *                  publish: "0",
 *                  description: ""
 *                 }
 *  },
 * @apiParam {Number} sequence Sequence of category. Example param: {1}
 * @apiParam {Number} page Number of page. Example param : {1}
 * @apiParam {Number} limit Number of post in 1 page. Example param: {10}
 * @apiError SequenceTypeError Sequence must be a number. Number is required.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Not a number"
 *     }
 */