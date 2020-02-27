/**
  * 
  * @api {post} /auth/login Login
  * @apiName Login
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {String} phone User Phone Number.
  * @apiParam  {String} password User Password.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "phone" : "0902694200",
  *          "password" : "123456"
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "isLogin": "true",
  *       "status": "true",
  *       "token": "",
  *       "refreshToken": "",
  *       "message": "Đăng nhập thành công!"
  *     }
  *  
  * @apiError LoginValidation The <code>Phone Number</code> of the user was not valid.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "isLogin": "false"
  *       "message": "Số điện thoại nhập vào không đúng quy định!"
  *     }
  * @apiError CheckPhone The <code>Phone Number</code> of the user was not correct.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "isLogin": "false"
  *       "message": "Số điện thoại không chính xác!"
  *     }
  * 
  * @apiError validPass The <code>password</code> of user was not correct.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "isLogin": "false"
  *       "message": "Mật khẩu không chính xác!"
  *     }
  * 
  * 
  */




  /**
  * 
  * @api {post} /auth/signup Signup Account
  * @apiName Login
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {String} referral_code User Referral Code.
  * @apiParam  {String} first_name User First Name.
  * @apiParam  {String} last_name User Last Name.
  * @apiParam  {String} phone User Phone Number.
  * @apiParam  {String} password User Password.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "_id" : ObjectId("5d9c3342cc1f7b3f4c8e79dd"),
  *          "rel_id" : ObjectId("5db814cb5d0a533960ad5d4e"),
  *          "rating" : [{rating_avg: "4.5"}],
  *          "comment" : "Hay qua"
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "status": "true"
  *       "message": "Tạo tài khoản thành công."
  *     }
  *  
  * @apiError checkToken The <code>token</code> of the user was not correct.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false"
  *       "message": "idToken không chính xác"
  *     }
  * @apiError _id The <code>id</code> of user was null.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false"
  *       "message": "Thiếu id tài khoản"
  *     }
  * @apiError user The <code>user</code> not found.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false"
  *       "message": "Không tìm thấy tài khoản"
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
  * @api {post} /auth/fb Login With Facebook
  * @apiName LoginWithFacebook
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {String} accessToken User Access Token.
  * @apiParam  {String} userID User ID.
  * @apiParam  {String} email Email Of User.
  * @apiParam  {String} first_name User First Name.
  * @apiParam  {String} last_name User Last Name.
  * @apiParam  {String} avatar User Avatar.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "accessToken": "",
  *          "userID": "1454497011366430",
  *          "email": "huavanvu2812@gmail.com",
  *          "first_name": "Hua",
  *          "last_name": "Vu"
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "isLogin": "true",
  *       "status": "true",
  *       "token": "",
  *       "refreshToken": "",
  *       "message": "Đăng nhập thành công!"
  *     }
  *  
  * @apiError LoginValidation The <code>Token</code> of the user was not valid.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false"
  *       "message": "Đăng nhập thất bại"
  *     }
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
  * @api {post} /auth/google Login With Google
  * @apiName LoginWithGoogle
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {String} tokenId User Token ID.
  * @apiParam  {String} profileObj User Profile.
  * @apiParam  {String} googleId User Google ID.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "tokenId": "",
  *          "profileObj": {
  *             "first_name": "Vũ" ,
  *             "last_name": "Hứa Văn",
  *             "avatar": "https://lh6.googleusercontent.com/-MGie-EqVE-U/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd-xdMn3wj2HQHSCQn3uI49k37j_g/s96-c/photo.jpg"
  *           },
  *          "googleId": "5dddd76fb4be71385c5fc2a3"
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "isLogin": "true",
  *       "status": "true",
  *       "token": "",
  *       "refreshToken": "",
  *       "message": "Đăng nhập thành công!"
  *     }
  *  
  * @apiError LoginValidation The <code>Token</code> of the user was not valid.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false"
  *       "message": "Đăng nhập thất bại"
  *     }
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
 * @api {get} /auth/authenticate Check Authenticate
 * @apiVersion 0.1.0
 * @apiName CheckAuthenticate
 * @apiGroup Authenticate
 * @apiSuccess {Boolean} status Authenticate Status.
 * @apiSuccess {String} message Authenticate Message.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status":true,
 *       "message":"ok"
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status":false,
 *       "message":"Không thể tìm thấy token"
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status":false,
 *       "message":"Token không hợp lệ"
 *     }
 */



 /**
 * @api {get} /auth/logout Logout
 * @apiVersion 0.1.0
 * @apiName Logout
 * @apiGroup Authenticate
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isLogin":false
 *     }
 */


 /**
  * 
  * @api {post} /auth/rfToken Refresh Token
  * @apiName RefreshToken
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {String} refreshToken User Refresh Token.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "refreshToken": ""
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "token": "JWT token"
  *     }
  */



  /**
  * 
  * @api {post} /auth/change-password Change Password
  * @apiName ChangePassword
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {ObjectId} _id User ID.
  * @apiParam  {String} password User Current Password.
  * @apiParam  {String} newPassword User New Password.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "_id": "5d9c3342cc1f7b3f4c8e79dd",
  *          "password": "123456",
  *          "newPassword": "Vu0902694200@"
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "isLogin": "false",
  *       "message": "Đăng nhập thành công!"
  *     }
  *  
  * @apiError User The <code>user</code> was not found.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "message": "Không tìm thấy tải khoản"
  *     }
  * @apiError validPass The <code>Current Password</code> was not correct.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "message": "Mật khẩu không chính xác!"
  *     }
  * 
  * 
  */




  /**
  * 
  * @api {post} /auth/check-login Check Login
  * @apiName CheckLogin
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {ObjectId} _id User ID.
  * @apiParam  {Object} userRoles User Role.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "_id": "5d9c3342cc1f7b3f4c8e79dd"
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "status": "true",
  *       "isLogin": "true",
  *       "message": "Đăng nhập thành công!",
  *       "user": {
  *             avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQA"
  *             first_name: "Dương Công"
  *             id: "5d9c3342cc1f7b3f4c8e79dd"
  *             last_name: "Vủ"
  *             phone: "0123123123"
  *             save_product: []
  *             save_project: ["5db80cfe44ab3a16f421599a", "5db80cfe44ab3a16f421599d", "5db80cfe44ab3a16f42159a0",…]
  *             userRoles: [{_id: "5d9d991050d9ad34b4db2e8d",…}, {_id: "5d9d991050d9ad34b4db2e8d",…},…]
  *       }
  *     } 
  */




  /**
  * 
  * @api {post} /auth/check-info-signup Check Info Signup
  * @apiName CheckInfoSignup
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {Object} newUser New User Info.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "newUser": {
  *             "first_name": "Minh",
  *             "last_name": "Hinh Hoc",
  *             "email": "",
  *             "referral_code": "AOZ505",
  *             "country_code": "84",
  *             "phone": "0792452548",
  *             "inactive": "true",
  *             "password": hashedPassword
  *          }
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "status": "true",
  *       "data": "5de478a602949b06006a3dab"
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
  * @api {post} /auth/check-idSignup Check Id Signup
  * @apiName CheckIdSignup
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "status": "true"
  *     }
  */



  /**
  * 
  * @api {post} /auth/get-role-token Get Role Token
  * @apiName CheckInfoSignup
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {ObjectId} _id User Id.
  * @apiParam  {ObjectId} group_id User Group Id.
  * @apiParam  {ObjectId} company_id User Company Id.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "id": "5d9c3342cc1f7b3f4c8e79dd",
  *          "group_id": "5d9d94fe93d1b678bbe3568a",
  *          "company_id": "5d9ae33a6c872036a4b2d47f",
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "data": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ5YzMzNDJjYzFmN2IzZjRjOGU3OWRkIiwiZ3JvdXBfaWQiOiI1ZDlkOTRmZTkzZDFiNjc4YmJlMzU2OGEiLCJjb21wYW55X2lkIjoiNWQ5YWUzM2E2Yzg3MjAzNmE0YjJkNDdmIiwiaWF0IjoxNTc1MzQxMzYxLCJleHAiOjMzMTExMzQxMzYxfQ.Zs02ntLptgAmf873qPe2aRiIbOH0ywtAc8-3OmmAimzR7Yn_UjnR7_S5F1L1RluuAAcZdqWOwlurp0fADoKRAg"
  *       "status": "true"
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
  * @api {post} /auth/get-role-active Get Role Active
  * @apiName CheckRoleActive
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {String} roleToken User Role Token.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "roleToken": "",
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "data": ""
  *       "status": "true"
  *     }
  * @apiError Connection The <code>connection</code> of the server was interrupted.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false"
  *     } 
  */



  /**
  * 
  * @api {post} /auth/recover-password Recover Password
  * @apiName Recover Password
  * @apiGroup Authenticate
  * @apiVersion  0.1.0
  * @apiParam  {String} phone User Phone Number.
  * @apiParam  {String} idToken User ID Token.
  * @apiParam  {String} newPassword User New Password.
  * @apiParamExample {json} Request-Example:
  *     {
  *          "phone": "0902694200",
  *          "idToken": "",
  *          "newPassword": "Vu0902694200",
  *     }
  * @apiSuccessExample Success-Response-Data:
  *     HTTP/1.1 200 OK
  *     {
  *       "data": ""
  *       "status": "true"
  *     }
  * @apiError ChangePasswordValidate The <code>newPassword</code> of the server was interrupted.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": "false",
  *       "message": "Mật khẩu không hợp lệ"
  *     } 
  */



  