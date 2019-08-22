/**
 * @api {get} /planning/find Find
 * @apiName planningFind
 * @apiGroup Planning
 *
 * @apiSuccess {Json} listPlanning List of planning and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *     _id: "VN79.0003547",
 *     name: "QĐ số 2314/QĐ-UB ngày 15/08/2014 về Công bố Quy hoạch sử dụng đất tỉnh Bà Rịa - Vũng Tàu",
 *     polygons: {
 *         type: "Polygon",
 *         coordinates: [
 *             [
 *                 [
 *                     107.047885475,
 *                     10.47063086800006
 *                 ],
 *                 [
 *                     107.0480444670001,
 *                     10.47089123700005
 *                 ],
 *                 [
 *                     107.0486161960001,
 *                     10.47182787300005
 *                 ],
 *                 [
 *                     107.0486162130001,
 *                     10.47182790000005
 *                 ],
 *                 [
 *                     107.0486161040001,
 *                     10.47182787400004
 *                 ],
 *                 [
 *                     107.047885475,
 *                     10.47063086800006
 *                 ]
 *             ]
 *         ]
 *     },
 *     category: {
 *         name: "Đất sông, ngòi, kênh, rạch, suối",
 *         backcolor: "#A0FFFF"
 *     }
 * }
 * @apiParam {ID} addressID ID of address. Example param {14}
 * @apiParam {Object} bound Bound. Example param {[[107.20381434855153,10.50058748552199],[107.09472354349782,10.464971469809527]]}
 * @apiParam {Number} limit Limit. Example param {1000}
 * @apiParam {Object} Project. Example param {"_id":1,"polygons":1,"name":1,"category.name":1,"category.backcolor":1}
 */



/**
 * @api {get} /planning/category Category
 * @apiName planningCategory
 * @apiGroup Planning
 *
 * @apiSuccess {Json} planningController.category() List of planning category and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *     _id: "NNP",
 *     create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *     create_date: "2019-08-07T10:56:35.450Z",
 *     write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *     write_date: "2019-08-07T10:56:35.450Z",
 *     company_id: "ROOT",
 *     status: false,
 *     delete_id: "",
 *     name: "Đất nông nghiệp",
 *     forecolor: "#FFFF64",
 *     backcolor: "#FFFF64",
 *     sequence: "1.0",
 *     url_name: "Dat-nong-nghiep"
 * }
 */


/**
* @api {get} /planning/detail Detail
* @apiName planningDetail
* @apiGroup Planning
*
* @apiSuccess {Json} planningController.Detail(planning_id) Planning detail
* @apiSuccessExample Example data on success:
* {
*     _id: "VN79.0000001",
*     create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
*     create_date: "2019-08-07 23:14:22.71",
*     write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
*     write_date: "2019-08-09 14:41:05.070491",
*     company_id: "ROOT",
*     status: "0",
*     delete_id: "",
*     name: "QĐ số 2314/QĐ-UB ngày 15/08/2014 về Công bố Quy hoạch sử dụng đất tỉnh Bà Rịa - Vũng Tàu",
*     polygons: {
*         type: "Polygon",
*         coordinates: [
*             []
*         ]
*     },
*     sequence: "2.0",
*     url_name: "QD-so-2314/QD-UB-ngay-15/08/2014-ve-Cong-bo-Quy-hoach-su-dung-dat-tinh-Ba-Ria---Vung-Tau",
*     description: "",
*     lot: "III-15",
*     area: "124.0",
*     floors: " ",
*     footprint_ratio: " ",
*     far: " - ",
*     remainder: " ",
*     people: "0.0",
*     category_id: "RDD",
*     points: {
*         type: "Point",
*         coordinates: [
*             106.5313341543828,
*             8.6299515341168
*         ]
*     },
*     category: {
*         _id: "RDD",
*         create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
*         create_date: "2019-08-07 17:56:36.279",
*         write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
*         write_date: "2019-08-07 17:56:36.279",
*         company_id: "ROOT",
*         status: "0",
*         delete_id: "",
*         name: "Đất rừng đặc dụng",
*         forecolor: "#6EFF64",
*         backcolor: "#6EFF64",
*         sequence: "1.0",
*         url_name: "Dat-nong-nghiep"
*     }
* }
* @apiParam {String} planning_id Planning ID. Example param: {VN79.0000001}
* @apiError PlanningIDEmptyError PlanningID was empty.
*/





