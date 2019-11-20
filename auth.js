/**
  * 
  * @api {post} /auth/signup Signup Account
  * @apiName Signup
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {ObjectID} _id User ID.
  * @apiParam  {ObjectID} idToken User Token ID.
  * @apiParam  {String} referral_code User Referral Code.
  * @apiParam  {String} first_name User First Name.
  * @apiParam  {String} last_name User Last Name.
  * @apiParam  {String} phone User Phone Number.
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