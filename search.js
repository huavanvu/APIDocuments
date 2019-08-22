


/**
 * @api {get} /search/suggestion Suggestion
 * @apiName searchSuggestion
 * @apiGroup Search
 *
 * @apiSuccess {Json} list_string_search List of suggestion and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *  _id: "5d4d4f85d292617c98d6bf04",
 *  name: "post",
 *  rel_id: "99500440-9fa7-4c98-9947-ba0fce369ed9",
 *  rel_id_name: "post_99500440-9fa7-4c98-9947-ba0fce369ed9_name",
 *  cat: "9c503085-5f11-4247-934e-a67f4c5b8fd6 158754cd-2fed-4af4-b2ee-ae0c9c786a1e f4299d8e-0ea5-483d-82e4-e9faead12ac5",
 *  title: "Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?",
 *  search: "khái niệm không gian sống & diện tích sử dụng là gì?  khai niem khong gian song & dien tich su dung la gi?"
 * }
 * @apiParam {String} keyword Keyword use to search {kinh}
 * @apiError KeyWordEmptyError Keyword was empty. Minimum of <code>1</code> character is required.
 */





/**
 * @api {get} /search/get_post_by_keyword Get Post By Keyword
 * @apiName getPostByKeyword
 * @apiGroup Search
 *
 * @apiSuccess {Json} list_Post Get list of post by KeyWord and each element in list is an Object include User Object
 * @apiSuccessExample Example data on success:
 * {
 *  _id: "2d3a7844-f45b-47c3-92c2-d0303faf7b7e",
 *   create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *   create_date: "2019-06-28 16:19:21.352",
 *   write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *   write_date: "2019-07-26 09:20:52.36",
 *   company_id: "ROOT",
 *   status: "0",
 *   delete_id: "",
 *   name: "Kinh nghiệm đi xem nhà để thuê",
 *   description: "Sau khi bạn đã tìm được địa điểm mình muốn thuê bước tiếp theo sẽ là xem nhà. Đây là cơ hội để bạn có thể nắm rõ thực tế chi tiết về những gì bạn sẽ thuê",
 *   url_id: "81",
 *   url_name: "kinh-nghiem-xem-nha-thue",
 *   sequence: "0.0",
 *   photo: "5b4a6a0f-8b9a-41da-bffd-4aa940b94758",
 *   receipt_no: "4",
 *   receipt_date: "2019-06-28 09:20:52.0",
 *   keyword: "xem nhà thuê, xem nhà, thuê nhà",
 *   publish: "1",
 *   publish_date: "",
 *   short_description: "Sau khi bạn đã tìm được địa điểm mình muốn thuê bước tiếp theo sẽ là xem nhà. Đây là cơ hội để bạn có thể nắm rõ thực tế chi tiết về những gì bạn sẽ thuê",
 *   user: {
 *          _id: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          create_uid: "",
 *          create_date: "2017-09-27 09:44:05.421",
 *          write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          write_date: "2019-07-27 13:39:22.291668",
 *          company_id: "ROOT",
 *          status: "0",
 *          delete_id: "",
 *          user_name: "admin",
 *          name: "Asset",
 *          password: "7fba729fa18f4662eedda4cff80b47c6",
 *          partner_id: "5528511e-28e2-410b-8d95-d0e6f77316d7",
 *          signature: "",
 *          email: "vang@bluebytez.com",
 *          lang_id: "76",
 *          gmt_offset: "-420.0",
 *          date_format: "DD/MM/YYYY",
 *          time_format: "HH:MM:SS",
 *          thousands_sep: ".",
 *          decimal_point: ",",
 *          avatar: "25805c28-36e7-4fdb-a8b5-b1c2c868ad87",
 *          type: "4.5+",
 *          inactive: "0",
 *          renew_password_id: "",
 *          online: "0"
 *         },
 *  type: "post"
 *  }
 * @apiParam {String} keyword Keyword use to search {kinh}
 * @apiError KeyWordEmptyError Keyword was empty. Minimum of <code>1</code> character is required.
 * 
 * 
 */





/**
 * @api {get} /search/post Get All Post
 * @apiName searchAllPost
 * @apiGroup Search
 *
 * @apiSuccess {Json} list_post List of all post and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *   _id: "f907b879-08fa-49e7-ba15-db7f87b2a201",
 *   post: {
 *           _id: "f907b879-08fa-49e7-ba15-db7f87b2a201",
 *           create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *           create_date: "2019-06-28 15:35:48.702",
 *           write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *           write_date: "2019-07-26 09:07:01.335",
 *           company_id: "ROOT",
 *           status: "0",
 *           delete_id: "",
 *           name: "Nguy Cơ Vỡ Bong Bóng Bất Động Sản: Nguyên Nhân Do Đâu?",
 *           description: "Trên thực tế, những người mua bất động sản cao cấp không mua để ở, mà phần lớn mua nhằm mục đích đầu tư, kiếm lời nhờ sự tăng giá của thị trường bất động sản.",
 *           url_id: "79",
 *           url_name: "vo-bong-bong-bds",
 *           sequence: "0.0",
 *           photo: "6b18a365-e500-4b6b-a543-1a86cf09dc9b",
 *           receipt_no: "2",
 *           receipt_date: "2019-06-28 09:07:01.0",
 *           keyword: "vỡ bong bóng, bong bóng bđs, vỡ bong bóng bđs, đầu cơ, đầu cơ bđs",
 *           publish: "1",
 *           publish_date: "",
 *           short_description: "Trên thực tế, những người mua bất động sản cao cấp không mua để ở, mà phần lớn mua nhằm mục đích đầu tư, kiếm lời nhờ sự tăng giá của thị trường bất động sản."
 *         }
 *  }
 *
 * 
 */




/**
 * @api {get} /search/count_by_keyword Count by keyword
 * @apiName countByKeyword
 * @apiGroup Search
 *
 * @apiSuccess {Json} total_search Number of post count by keyword
 * @apiSuccessExample Example data on success:
 * {
 *  total_search: 15
 * }
 * @apiParam {String} keyword Keyword use to search {kinh}
 *
 */