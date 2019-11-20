/**
 * @api {post} /ask/add-category Add New Ask Category
 * @apiVersion 0.1.0
 * @apiName AddNewAskCategory
 * @apiGroup Ask Category
 * @apiParam {Boolean} status Ask Category Status.
 * @apiParam {ObjectId} delete_id Ask Category Delete ID.
 * @apiParam {ObjectId} parent_id Ask Category Parent ID.
 * @apiParam {String} url_name Ask Category URL Name.
 * @apiParam {String} name Ask Category Name.
 * @apiParam {String} code Ask Category Code.
 * @apiParam {Number} sequence Ask Category Sequence.
 * @apiParamExample {json} Request-Example:
 *  {
 *    "status": true,
 *    "data": {
 *        "create_uid": "5d679819325ab70ab0157ce5",
 *        "create_date": "2019-10-11T01:56:35.189Z",
 *        "write_uid": "5d679819325ab70ab0157ce5",
 *        "write_date": "2019-10-11T01:56:35.189Z",
 *        "company_id": "ROOT",
 *        "status": true,
 *        "delete_id": null,
 *        "parent_id": null,
 *        "sequence": 0,
 *        "name": "Pháp lý Bất Động Sản",
 *        "url_name": "phap-ly-bat-dong-san",
 *        "code": "ASK_LEGAL",
 *        "__v": 0
 *    }
 *  }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiError Connection The <code>connection</code> of the server was interrupted.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Server lỗi"
 *     }
 */



 /**
 * @api {get} /ask/get-list-category Get List Ask Category
 * @apiVersion 0.1.0
 * @apiName GetListAskCategory
 * @apiGroup Ask Category
 * @apiSuccess {Object} list List of Recruit Category.
 * @apiSuccessExample Success-Response:
 *  {
 *      status: true,
 *      data: [
 *          {
 *              _id: "5d7f38d6d76bcb1fe8742476",
 *              name: "Quy định pháp luật về bất động sản - dự án"
 *          },
 *          {
 *              _id: "5d7f38f3d76bcb1fe8742477",
 *              name: "Pháp lý dự án, phê duyệt quy hoạch"
 *          },
 *          {
 *              _id: "5d7f3902d76bcb1fe8742478",
 *              name: "Biểu mẫu thực hiện thủ tục"
 *          },
 *          {
 *              _id: "5d7f390dd76bcb1fe8742479",
 *              name: "Hợp đồng mẫu về bất động sản, xây dựng"
 *          },
 *          {
 *              _id: "5d7f391dd76bcb1fe874247a",
 *              name: "Các vấn đề khác "
 *          }
 *      ]
 * }
 */




