/**
 * @api {get} /address/province Get List Province
 * @apiVersion 0.1.0
 * @apiName GetListProvince
 * @apiGroup Address
 * @apiSuccess {Object} list List of Province.
 * @apiSuccessExample Success-Response:
 *  [
 *     {
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-11-05T01:26:10.350Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-11-05T01:26:10.350Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          _id: "5dc0cfc5bf871b3a3c6296b9",
 *          reaction: [ ],
 *          country_id: "243",
 *          code: "92",
 *          name: "Thành phố Cần Thơ",
 *          type: "Thành phố",
 *          __v: 0,
 *          points: {
 *              type: "Point",
 *              coordinates: [
 *                  105.53032391,
 *                  10.1145177108
 *              ]
 *          }
 *     },
 *     {...},
 *     {...},
 *     {...}
 *  ]
 */


 /**
 * @api {get} /address/district Get List District
 * @apiVersion 0.1.0
 * @apiName GetListDistrict
 * @apiGroup Address
 * @apiParam {ObjectID} city_id City ID Of District.
 * @apiParamExample {Int32} Example:
 *     {
 *       "city_id": "5dc0cfc6bf871b3a3c629703"
 *     }
 * 
 * @apiSuccess {Object} list List of Planning Category.
 * @apiSuccessExample Success-Response:
 *  [
 *     {
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-11-05T01:28:42.327Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-11-05T01:28:42.327Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          _id: "5dc0d055ade2533578818b79",
 *          reaction: [ ],
 *          code: "4607",
 *          main_code: "07",
 *          name: "Huyện A Lưới",
 *          type: "Huyện",
 *          province_id: "5dc0cfc6bf871b3a3c629703",
 *          points: {
 *              type: "Point",
 *              coordinates: [
 *                  107.298172561,
 *                  16.2359891944
 *              ]
 *          },
 *          __v: 0
 *     },
 *     {...},
 *     {...},
 *     {...}
 *  ]
 */


/**
 * @api {get} /address/ward Get List Ward
 * @apiVersion 0.1.0
 * @apiName GetListWard
 * @apiGroup Address
 * @apiParam {ObjectID} province_id District ID Of Ward.
 * @apiParamExample {Int32} Example:
 *     {
 *       "province_id": "5dc0d056ade2533578818d7d"
 *     }
 * 
 * @apiSuccess {Object} list List of Planning Category.
 * @apiSuccessExample Success-Response:
 *  [
 *     {
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-11-06T03:00:21.913Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-11-06T03:00:21.913Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          _id: "5dc237a3d508de3c4c58801e",
 *          reaction: [ ],
 *          code: "240600",
 *          name: "Trung tâm huấn luyện Cấm Sơn",
 *          type: "Trung tâm huấn luyện",
 *          district_id: "5dc0d056ade2533578818d7d",
 *          points: null,
 *          __v: 0
 *     },
 *     {...},
 *     {...},
 *     {...}
 *  ]
 */


/**
 * @api {get} /address/get-location Get Location
 * @apiVersion 0.1.0
 * @apiName GetLocation
 * @apiGroup Address
 * @apiParam {ObjectID} ward Ward ID.
 * @apiParamExample {Int32} Example:
 *     {
 *       "ward": "5dc237a3d508de3c4c58801e"
 *     }
 * 
 * @apiSuccess {Object} list List of Planning Category.
 * @apiSuccessExample Success-Response:
 *     {
 *          status: true,
 *          data: {
 *              _id: "5dc237a3d508de3c4c58801e",
 *              district: {
 *                  _id: "5dc0d056ade2533578818d7d",
 *                  code: "2406",
 *                  name: "Huyện Lục Ngạn"
 *              },
 *              province: {
 *                  _id: "5dc0cfc6bf871b3a3c6296c1",
 *                  code: "24",
 *                  name: "Tỉnh Bắc Giang"
 *              },
 *              ward: {
 *                  _id: "5dc237a3d508de3c4c58801e",
 *                  name: "Trung tâm huấn luyện Cấm Sơn",
 *                  code: "240600"
 *              }
 *          }
 *     }
 * @apiError AddressLenght The <code>length</code> of the address was not valid.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Không tìm thấy địa chỉ"
 *     }
 * @apiError Connection The <code>connection</code> of the server was interrupted.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *       "message": "Server lỗi"
 *     }
 */
