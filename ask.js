 /**
 * @api {post} /ask/add-ask Add New Ask
 * @apiVersion 0.1.0
 * @apiName AddNewAsk
 * @apiGroup Ask
 * @apiParam {Boolean} status Ask Status.
 * @apiParam {ObjectId} delete_id Ask Delete ID.
 * @apiParam {String} name Ask Name.
 * @apiParam {ObjectId} category_id Ask Category ID.
 * @apiParam {String} content Ask Content.
 * @apiParam {String} url_name Ask URL Name.
 * @apiParam {Number} sequence Ask Sequence.
 * @apiParam {String} asset_name Asset Rename Ask Title.
 * @apiParam {String} search Search Result.
 * @apiParam {Object} reaction Ask Reaction.
 * @apiParam {String} approve Approve Status.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "status": true,
 *       "data": {
 *          "create_uid": "5d679819325ab70ab0157ce5",
 *          "create_date": "2019-09-26T03:24:44.666Z",
 *          "write_uid": "5d679819325ab70ab0157ce5",
 *          "write_date": "2019-09-26T03:24:44.666Z",
 *          "company_id": "ROOT",
 *          "status": true,
 *          "delete_id": null,
 *          "url_name": "",
 *          "sequence": 0,
 *          "content": "",
 *          "url_name": "",
 *          "search": "tại sao danh sách fsbo của tôi không được đăng? tai sao danh sach fsbo cua toi khong duoc dang",
 *          "asset_name": "",
 *          "category_id": "5d7f313e2c69582d740b7afd",
 *          "approve": "APPROVED",
 *          "reaction": [],
 *          "name": "Tại sao danh sách FSBO của tôi không được đăng?",
 *          "__v": 0
 *       }
 *    }
 * @apiError AskName The <code>name</code> of the question was not valid.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Vui lòng điền tên câu hỏi"
 *     }
 * @apiError AskContent The <code>content</code> of the question was not valid.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Vui lòng điền nội dung câu hỏi"
 *     }
 * @apiError Connection The <code>connection</code> of the server was interrupted.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Server lỗi"
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */




 /**
 * @api {get} /ask/get-ask-by-id Ask Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailAskCategory
 * @apiGroup Ask Category
 * @apiParam {ObjectID} askID Ask Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "askID": "5d9d32eca3addc584136d026"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *          status: true,
 *          data: {
 *              _id: "5d9d32eca3addc584136d026",
 *              delete_id: null,
 *              asset_name: "",
 *              sequence: 2,
 *              url_name: "",
 *              approve: "APPROVED",
 *              name: "Nhà tôi đang bán và cho thuê. Cả hai danh sách có thể xuất hiện trên Asset?",
 *              category_id: [
 *                  "5d7f391dd76bcb1fe874247a"
 *              ],
 *              __v: 0,
 *              content: "<h4><strong><em><u>Nội dung phản hồi: </u></em></strong></h4><p>Asset cho phép một danh sách hoạt động cho mỗi địa chỉ tài sản tại một thời điểm. Một ngôi nhà có thể được liệt kê để bán hoặc cho thuê, nhưng không phải cả hai cùng một lúc.</p>",
 *              reaction: [
 *                  "5db2a202cf459e133c6349a9"
 *              ],
 *              company_id: "ROOT",
 *              create_date: "2019-10-11T04:54:55.175Z",
 *              search: "nhà tôi đang bán và cho thuê. cả hai danh sách có thể xuất hiện trên asset? nha toi dang ban va cho thue ca hai danh sach co the xuat hien tren asset ",
 *              status: true,
 *              write_date: "2019-10-11T04:54:55.175Z",
 *              type: "ask"
 *          }
 *     }
 * @apiError askID The <code>askID</code> of the question was not correct.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Thiếu ID câu hỏi"
 *     }
 * @apiError Connection The <code>connection</code> of the server was interrupted.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Server lỗi"
 *     }
 * @apiError Connection The <code>connection</code> of the server was interrupted.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "true"
 *       "message": "Không tìm thấy thông tin"
 *     }
 */