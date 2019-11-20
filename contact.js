/**
 * 
 * @api {get} /contact/suggestion Get List Suggestion
 * @apiVersion 0.1.0
 * @apiName GetListSuggetion
 * @apiGroup Contact
 * @apiParam  {String} keyword Contact Keyword
 * @apiParamExample Example:
 *     {
 *       "keyword": "ban"
 *     }
 * @apiSuccess (200) {Array} list List Suggestion
 * @apiSuccessExample Success-Response:
 * [
 *      {
 *          country_code: 84,
 *          category_id: [
 *              "5dafd01513818c28e0916318"
 *          ],
 *          total_view: 0,
 *          parent_id: null,
 *          reaction: [ ],
 *          _id: "5db814c65d0a533960ad5654",
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-10-29T10:14:41.057Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-10-29T10:14:41.057Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          tel: "437912686",
 *          hotline: "",
 *          email: "",
 *          website: "www.hanoi.gov.vn",
 *          address1: "Số 159 Tô Hiệu, Phường Nghĩa Đô, Quận Cầu Giấy, Thành phố Hà Nội",
 *          address: "",
 *          company_name: "BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI",
 *          display_name: "BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI",
 *          founded_year: null,
 *          legal_representative: "",
 *          company_type: "DNĐP",
 *          tax_code: "",
 *          bank_account: "",
 *          bank_name: "",
 *          bank_branch: "",
 *          description: "",
 *          search: "BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI ban quan ly dau tu va xay dung khu do thi moi ha noi BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI ban quan ly dau tu va xay dung khu do thi moi ha noi",
 *          points: {
 *              type: "Point",
 *              coordinates: [
 *                  0,
 *                  0
 *              ]
 *          },
 *          icon: "",
 *          logo: "",
 *          code: "IV.0053",
 *          __v: 0,
 *          rating: [ ],
 *          rating_avg: 0
 *      },
 *      {...},
 *      {...},
 *      {...}
 * ]
 * 
 * 
 */



 /**
 * 
 * @api {get} /contact/get-by-id Get List Contact By ID
 * @apiVersion 0.1.0
 * @apiName GetListContactByID
 * @apiGroup Contact
 * @apiParam  {ObjectID} id Contact ID
 * @apiParamExample Example:
 *     {
 *       "id": "5db814c65d0a533960ad55ec"
 *     }
 * @apiSuccess (200) {Array} list List Suggestion
 * @apiSuccessExample Success-Response:
 *      {
 *          status: true,
 *          data: {
 *              country_code: 84,
 *              category_id: [
 *                  "5dafd01513818c28e0916318"
 *              ],
 *              total_view: 0,
 *              parent_id: null,
 *              reaction: [ ],
 *              _id: "5db814c65d0a533960ad55ec",
 *              create_uid: "5d679819325ab70ab0157ce5",
 *              create_date: "2019-10-29T10:14:41.057Z",
 *              write_uid: "5d679819325ab70ab0157ce5",
 *              write_date: "2019-10-29T10:14:41.057Z",
 *              company_id: "ROOT",
 *              status: true,
 *              delete_id: null,
 *              tel: "",
 *              hotline: "",
 *              email: "info@becamex.com.vn",
 *              website: "www.becamex.com.vn",
 *              address1: "8 Đại Lộ Hùng Vương, Phường Hòa Phú, Thành phố Thủ Dầu Một, Tỉnh Bình Dương",
 *              address: "",
 *              company_name: "TỔNG CÔNG TY ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHIỆP - CTCP",
 *              display_name: "BECAMEX IDC CORP",
 *              founded_year: 2010,
 *              legal_representative: "Phạm Ngọc Thuận",
 *              company_type: "TNHH MTV",
 *              tax_code: "3700145020",
 *              bank_account: "",
 *              bank_name: "",
 *              bank_branch: "",
 *              description: "",
 *              search: "TỔNG CÔNG TY ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHIỆP - CTCP tong cong ty dau tu va phat trien cong nghiep ctcp BECAMEX IDC CORP becamex idc corp",
 *              points: {
 *                  type: "Point",
 *                  coordinates: [
 *                      0,
 *                      0
 *                  ]
 *              },
 *              icon: "",
 *              logo: "",
 *              code: "IV.0001",
 *              __v: 0,
 *              rating: [ ],
 *              rating_avg: 0
 *          }
 *      }
 * 
 * 
 */


  /**
 * @api {post} /contact/add-contact-category Add New Company Category
 * @apiVersion 0.1.0
 * @apiName AddNewCompanyCategory
 * @apiGroup Contact
 * @apiParam {Boolean} status Company Category Status.
 * @apiParam {ObjectId} delete_id Company Category Delete ID.
 * @apiParam {ObjectId} parent_id Company Category Parent ID.
 * @apiParam {String} name Company Category Name.
 * @apiParam {String} code Company Category Code.
 * @apiParam {String} description Company Category Description.
 * @apiParam {Number} sequence Company Category Sequence.
 * @apiParam {String} url_name Company Category URL Name.
 * @apiParam {String} type Company Category Type.
 * @apiParam {String} keyword Company Category Keyword.
 * @apiParamExample {json} Request-Example:
 *  {
 *      "_id" : ObjectId("5dafd01513818c28e0916314"),
 *      "create_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "create_date" : ISODate("2019-10-23T03:56:36.202Z"),
 *      "write_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "write_date" : ISODate("2019-10-23T03:56:36.202Z"),
 *      "company_id" : "ROOT",
 *      "status" : true,
 *      "delete_id" : null,
 *      "description" : "",
 *      "keyword" : "",
 *      "code" : "US",
 *      "name" : "Cộng tác viên",
 *      "__v" : 0
 *  }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiError Name The <code>name</code> of the company category was emptied.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Vui lòng điền tên danh mục"
 *     }
 * @apiError UserID The <code>user_id</code> of the company category was emptied.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Không thể tìm thấy id của bạn"
 *     }
 * @apiError Result The <code>result</code> of the company category was emptied.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Không thể thêm danh mục"
 *     }
 * @apiError Connection The <code>connection</code> of the server was interrupted.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Server lỗi"
 *     }
 */




/**
 * @api {post} /contact/add-contact Add New Company
 * @apiVersion 0.1.0
 * @apiName AddNewCompany
 * @apiGroup Company
 * @apiParam {Boolean} status Company Status.
 * @apiParam {ObjectId} delete_id Company Delete ID.
 * @apiParam {String} name Company Name.
 * @apiParam {ObjectId} parent_id Company Parent ID.
 * @apiParam {String} description Company Description.
 * @apiParam {String} code Company Code.
 * @apiParam {Number} sequence Company Sequence.
 * @apiParam {String} icon Company Icon.
 * @apiSuccess {String} logo Company Logo.
 * @apiParam {ObjectId} partner_id Company Partner ID.
 * @apiParam {ObjectId} category_id Company Category ID.
 * @apiParam {String} keyword Company Keyword.
 * @apiParam {Object} points Company Points.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "_id" : ObjectId("5d9ae33a6c872036a4b2d47f"),
 *          "name" : "Asset",
 *          "category_id" : null,
 *          "display_name" : "Assetvn",
 *          "parent_id" : null,
 *          "phone" : "213213",
 *          "email" : "nguyenvu@asf.com",
 *          "address" : "Vung tau"
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiError Name The <code>name</code> of the company was emptied.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Vui lòng điền tên liên hệ"
 *     }
 * @apiError Address The <code>address</code> of the company was emptied.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Vui lòng điền địa chỉ"
 *     }
 * @apiError Phone The <code>phone</code> of the company was emptied.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Vui lòng điền số điện thoại"
 *     }
 * @apiError CountryCode The <code>country_code</code> of the company was emptied.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Vui lòng điền mã quốc gia"
 *     }
 * @apiError Connection The <code>connection</code> of the server was interrupted.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Server lỗi"
 *     }
 */


 /**
  * 
  * @api {post} /contact/rating-company Rating Company
  * @apiName Rating
  * @apiGroup Contact
  * @apiVersion  0.1.0
  * @apiParam  {ObjectID} _id User Rating ID.
  * @apiParam  {ObjectID} rel_id Rel ID Rating.
  * @apiParam  {Array} rating Rating Points.
  * @apiParam  {Object} comment Company Rating Comment.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "_id" : ObjectId("5d9c3342cc1f7b3f4c8e79dd"),
  *          "rel_id" : ObjectId("5db814cb5d0a533960ad5d4e"),
  *          "rating" : [{rating_avg: "4.5"}],
  *          "comment" : "Hay qua"
  *     }
  * @apiSuccessExample Success-Response-Data:
  *  [
  *     HTTP/1.1 200 OK
  *  ]
  * @apiError checkCompany The <code>checkCompany</code> of the company was null.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false"
  *       "message": "Không tìm thấy công ty"
  *     }
  * @apiError comment&rating The <code>comment or rating</code> of the company was null.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false"
  *       "message": "Thiếu thông tin"
  *     }
  * 
  * @apiError Connection The <code>connection</code> of the server was interrupted.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false"
  *       "message": "Server lỗi"
  *     }
  * 
  * 
  */




/**
 * 
 * @api {get} /contact/get-rating-company Get Company Rating
 * @apiVersion 0.1.0
 * @apiName GetCompanyRating
 * @apiGroup Contact
 * @apiParam  {ObjectID} rel_id Rating Company Rel_ID
 * @apiParamExample Example:
 *     {
 *       "rel_id": "5db814c95d0a533960ad5aa0"
 *     }
 * @apiSuccess (200) {Object} data Rating Company Info
 * @apiSuccessExample Success-Response:
 *      {
 *          status: true,
 *          data: {
 *              listRating: [
 *                  {
 *                      comment: "good",
 *                      _id: "5dc663a827de91d19ca946c4",
 *                      user_id: {
 *                          _id: "5dc66227bb0990fd18af4def",
 *                          first_name: "Minh",
 *                          last_name: "nguyen"
 *                  },
 *                  value: 3,
 *                  create_date: "2019-11-09T06:58:48.732Z"
 *                  }
 *              ],
 *              ratingOverview: {
 *                  avgRating: 3,
 *                  countUser: 1
 *              }
 *          }
 *      }
 * @apiError Rel_ID The <code>rel_id</code> of the rating company was null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Thiếu thông tin"
 *     }
 * 
 */



 /**
 * 
 * @api {get} /contact/check-rating-company Check Company Rating
 * @apiVersion 0.1.0
 * @apiName CheckCompanyRating
 * @apiGroup Contact
 * @apiParam  {ObjectID} rel_id Rating Company Rel_ID
 * @apiParamExample Example:
 *     {
 *       "rel_id": "5db814c95d0a533960ad5aa0"
 *       "_id": "5dc66227bb0990fd18af4def"
 *     }
 * @apiSuccess (200) {Object} data Rating Company Info
 * @apiSuccessExample Success-Response:
 *      {
 *          status: true,
 *          data: {
 *              create_uid: "5d679819325ab70ab0157ce5",
 *              write_uid: "5d679819325ab70ab0157ce5",
 *              company_id: "ROOT",
 *              status: true,
 *              delete_id: null,
 *              comment: "Doanh nghiep",
 *              _id: "5dc4e75871e8b11638ec2b19",
 *              user_id: "5d9c3342cc1f7b3f4c8e79dd",
 *              rel_id: "5db814cb5d0a533960ad5db0",
 *              value: 3.5,
 *              type: "company",
 *              create_date: "2019-11-08T03:56:08.065Z",
 *              write_date: "2019-11-08T03:56:08.065Z",
 *              __v: 0
 *          }
 *      }
 * @apiError checkRating The <code>checkRating</code> of user was null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Chưa đánh giá"
 *     }
 * @apiError Rel_ID The <code>rel_id</code> of rating company was null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Thiếu thông tin"
 *     }
 */