
/**
 * @api {get} /map/product_in_bound Get product in bound
 * @apiName mapProductInBound
 * @apiGroup Map
 *
 * @apiSuccess {Json} listProduct List of product and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *     "_id": "2",
 *     "name": "NHÀ RIÊNG tại - Minh Khai-T230112",
 *     "points": {
 *         "type": "Point",
 *         "coordinates": [
 *             106.685826252423,
 *             10.7575213428538
 *         ]
 *     },
 *     "polygons": {
 *         "type": "Polygon",
 *         "coordinates": [
 *             [
 *                 [
 *                     106.6834805954495,
 *                     10.76683717226183
 *                 ],
 *                 [ 
 *                     106.6833454781219,
 *                     10.7669634924572
 *                 ],
 *                 [
 *                     106.6833203719101,
 *                     10.76693678156068
 *                 ],
 *                 [
 *                     106.6833484693027,
 *                     10.76691050720448
 *                 ],
 *                 [
 *                     106.6833477356551,
 *                     10.76690978618728
 *                 ], 
 *                 [
 *                     106.6834552149831,
 *                     10.76681047124195
 *                 ],
 *                 [
 *                     106.6834805954495,
 *                     10.76683717226183
 *                 ]
 *             ]
 *         ]
 *     },
 *     "product_type": {
 *         "_id": "1",
 *         "create_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
 *         "create_date": "2019-07-27 13:09:00.176",
 *         "write_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
 *         "write_date": "2019-07-27 13:25:41.128",
 *         "company_id": "ROOT",
 *         "status": "0",
 *         "delete_id": "",
 *         "type_name": "Bán",
 *         "type": "",
 *         "parent_id": "",
 *         "type_code": "1",
 *         "description": ""
 *     }
 * },
 * @apiParam {Object} bound Bound. Example param: {[[106.70828170629568,10.760767733608878],[106.68137378545828,10.755244632384397]]}
 * @apiParam {Number} limit Limit product.Example param: {1000} 
 * @apiParam {ID} address_id Address ID. Example param: {311}
 * @apiParam {Object} Data of project. Example param: {"_id":1,"name":1,"polygons":1,"points":1,"product_type":1}
 * @apiParam {Object} Filter. Example param: {"type":["1","2","3"]}
 * @apiParam {String} Type. Example param: {marker}
 * 
 * 
 */


















/**
 * @api {get} /map/get_by_address_id Get suggestion by address ID
 * @apiName mapSuggestion
 * @apiGroup Map
 *
 * @apiSuccess {Json} address Address
 * @apiSuccess {Json} ListProduct List of product and each element in list is an Object
 * @apiSuccess {Json} listPolygonInside List of polygon inside and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *     address: [
 *         {
 *             _id: "570",
 *             create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *             create_date: "2019-08-09 17:35:27.883",
 *             write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *             write_date: "2019-08-09 17:35:27.883",
 *             company_id: "ROOT",
 *             status: "0",
 *             delete_id: "",
 *             address_name: "Long An",
 *             type: "C",
 *             parent_id: "0",
 *             country_id: "243.0",
 *             points: {
 *             type: "Point",
 *             coordinates: [
 *                     106.08956909,
 *                     10.52338314
 *             ]
 *         },
 *     polygon: {
 *                 _id: "571",
 *                 create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *                 create_date: "2019-08-09 17:41:47.429", 
 *                 write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *                 write_date: "2019-08-09 17:41:47.429",
 *                 company_id: "ROOT",
 *                 status: "0",
 *                 delete_id: "",
 *                 name: "Long An",
 *                 type: "C",
 *                 rel_id: "570",
 *                 polygons: {
 *                     type: "Polygon",
 *                     coordinates: [
 *                                     []
 *                     ]
 *                 }
 *             }
 *         }
 *     ],
 *     ListProduct: [],
 *     listPolygonInside: [
 *         {
 *             _id: "2663",
 *             create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *             create_date: "2019-08-09 17:35:39.867",
 *             write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *             write_date: "2019-08-09 17:35:39.867",
 *             company_id: "ROOT",
 *             status: "0",
 *             delete_id: "",
 *             address_name: "Bến Lức",
 *             type: "D",
 *             parent_id: "570",
 *             country_id: "243.0",
 *             points: {
 *                 type: "Point",
 *                 coordinates: [
 *                     106.55758667,
 *                     10.62686348
 *                 ]
 *             },
 *             polygon: {
 *                 _id: "2664",
 *                 create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *                 create_date: "2019-08-09 17:42:15.54",
 *                 write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *                 write_date: "2019-08-09 17:42:15.54",
 *                 company_id: "ROOT",
 *                 status: "0",
 *                 delete_id: "",
 *                 name: "Bến Lức",
 *                 type: "D",
 *                 rel_id: "2663",
 *                 polygons: {
 *                     type: "Polygon",
 *                     coordinates: []
 *                 }
 *             }
 *         },
 *         {}
 *     ]
 * }
 * @apiParam {Number} address_id Address ID. Example param: {570}
 * @apiError NetWork Fail to connect to server ! :((
 */





