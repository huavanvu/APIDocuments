/**
 * @api {get} /address/get_by_id Get address by ID
 * @apiName addressGetByID
 * @apiGroup Address
 *
 * @apiSuccess {Json} list_Address List of address and each element in list is an Object
 * @apiSuccessExample Example data on success:
 * {
 *     _id: "2",
 *     create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *     create_date: "2019-08-09 17:35:26.881",
 *     write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *     write_date: "2019-08-09 17:35:26.881",
 *     company_id: "ROOT",
 *     status: "0",
 *     delete_id: "",
 *     address_name: "An Giang",
 *     type: "C",
 *     parent_id: "0",
 *     country_id: "243.0",
 *     points: {
 *         type: "Point",
 *         coordinates: [
 *             105.37450409,
 *             10.24603653
 *         ]
 *     },
 *     polygon: {
 *         _id: "3",
 *         create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *         create_date: "2019-08-09 17:41:38.812",
 *         write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *         write_date: "2019-08-09 17:41:38.812", 
 *         company_id: "ROOT",
 *         status: "0",
 *         delete_id: "",
 *         name: "An Giang",
 *         type: "C",
 *         rel_id: "2",
 *         polygons: {
 *             type: "Polygon",
 *             coordinates: [
 *                 []
 *             ]
 *         }
 *     }
 * }
 * @apiParam {ID} addressID ID of address
 * @apiError IDEmptyError ID was empty.
 */



