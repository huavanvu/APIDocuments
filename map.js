
/**
 * @api {get} /map/product_in_bound Get Product In Bound
 * @apiName ProductInBound
 * @apiGroup Map
 * @apiParam {Int32} limit Limit Product In Bound.
 * @apiParam {Int32} page Number Of Page
 * @apiParam {Object} bound Bound of Map.
 * @apiParam {Object} project Use In Future.
 * @apiParam {Object} filter Filter Product.
 * @apiParam {String} totalFlag Total Flag.
 * @apiParamExample Example:
 *     {
 *       "limit": 500,
 *       "page": 1,   
 *       "bound": [[106.17609244298436,10.453111978944845],[107.21361380528904,11.106725985230485]],
 *       "address_id": 5e2179a416b70e34ec8fbedf,
 *       "project": {%22_id%22:1,%22name%22:1,%22points%22:1,%22polygons%22:1,%22a_value%22:1,%22a_value_unit_id%22:1,
 *                  %22ward_id%22:1,%22land_area%22:1,%22land_area_unit_id%22:1,%22area_unit_id%22:1,%22area%22:1,%22length%22:1,
 *                  %22length_unit_id%22:1,%22width_unit_id%22:1,%22width%22:1,%22bathroom%22:1,%22image%22:1,%22sub_image%22:1,
 *                  %22bedroom%22:1,%22type_id%22:1,%22direction%22:1,%22page_number%22:1,%22plot_number%22:1,%22category_id%22:1,
 *                  %22product_type._id%22:1,%22product_type.type_name%22:1,%22bedroom_unit_id%22:1,%22bathroom_unit_id%22:1,
 *                  %22floor_unit_id%22:1,%22product_type.marker_url%22:1,%22product_type.marker_hover_url%22:1,
 *                  %22product_type.color_code%22:1,%22sale_price%22:1,%22sale_price_unit_id%22:1,%22sale_price_value%22:1,
 *                  %22number_of_sheet%22:1,%22number_of_parcel%22:1,%22number_of_floor%22:1,%22number_of_floor_unit_id%22:1,
 *                  %22product_category.category_name%22:1,%22product_category.code%22:1},
 *       "filter":  {%22type%22:[%225d6e56c88e18e6eaf5076069%22,%225d6e570e65b46f56a7f71a78%22,%225d6e572125130a5ca6726e59%22,
 *                  %225dd5e40cd59979b3b848b5c6%22],%22category%22:[%225db2c448f835f22804d62d33%22,%225db2c448f835f22804d62d34%22,
 *                  %225db2c448f835f22804d62d36%22,%225db2c448f835f22804d62d38%22,%225db2c448f835f22804d62d39%22,
 *                  %225db2c448f835f22804d62d3a%22,%225db2c448f835f22804d62d3b%22,%225db2c448f835f22804d62d3c%22,
 *                  %225db2c448f835f22804d62d3d%22,%225db2c448f835f22804d62d3e%22,%225db2c449f835f22804d62d3f%22,
 *                  %225db2c449f835f22804d62d40%22,%225db2c449f835f22804d62d41%22,%225dfaf87874ef956220a61749%22,
 *                  %225e048582180d9a4f4c90301a%22,%225e04859a180d9a4f4c90301c%22,%225e0485ea180d9a4f4c90301e%22,
 *                  %225e048620180d9a4f4c903020%22,%225e048638180d9a4f4c903022%22,%225e04864e180d9a4f4c903024%22,
 *                  %225e048662180d9a4f4c903026%22,%225e048673180d9a4f4c903028%22,%225e048686180d9a4f4c90302a%22,
 *                  %225e04869f180d9a4f4c90302c%22,%225e0486b2180d9a4f4c90302e%22,%225e0486c5180d9a4f4c903030%22,
 *                  %225e0486db180d9a4f4c903032%22,%225e0486ea180d9a4f4c903034%22,%225e0486fb180d9a4f4c903036%22,
 *                  %225e04870c180d9a4f4c903038%22,%225e04871b180d9a4f4c90303a%22,%225e04872f180d9a4f4c90303c%22,
 *                  %225e04873d180d9a4f4c90303e%22],%22bedroom%22:%220%22,%22price%22:{},%22advance%22:{}},     
 *       "totalFlag": null              
 *     }
 * @apiSuccess {Array} listProduct List Of Product In Bound.
 * @apiSuccessExample Example data on success:
 * {
 *  [
 *      {
 *          "_id": "5de4ec212f894f8560078f54",
 *          "polygons": {
 *              "type": "Polygon",
 *              "coordinates": [
 *                  [
 *                      [
 *                          106.690254102,
 *                          10.734219981
 *                      ],
 *                      [
 *                          106.690208396,
 *                          10.7342207520001
 *                      ],
 *                      [
 *                          106.690204454,
 *                          10.734039957
 *                      ],
 *                      [
 *                          106.690250161,
 *                          10.734039276
 *                      ],
 *                      [
 *                          106.690254102,
 *                          10.734219981
 *                      ]
 *                  ]
 *              ]
 *          },
 *          "points": [
 *              106.690229276361,
 *              10.7341299918473
 *          ],
 *          "code": "790103R80.485",
 *          "ward_id": "5dc237d1d508de3c4c58bb71",
 *          "direction": "Hướng Tây",
 *          "image": "https://api.asset.vn\\product\\5de4ec212f894f8560078f54\\5de4ec212f894f8560078f54-image-hinh 1.PNG-1575283745674.png",
 *          "name": "Nhà riêng lẻ Bình Chánh",
 *          "category_id": "5db2c448f835f22804d62d3c",
 *          "sale_price": 7,
 *          "width": 5,
 *          "length": 16,
 *          "land_area": 80,
 *          "type_id": "5d6e572125130a5ca6726e59",
 *          "a_value_rate": 7000,
 *          "feature": "Mặt tiền",
 *          "bedroom": 3,
 *          "bathroom": 3,
 *          "number_of_floor": 3,
 *          "number_of_sheet": 80,
 *          "number_of_parcel": "485",
 *          "search": "nhà riêng nha rieng xã bình hưng huyện bình chánh thành phố hồ chí minh  xa binh hung huyen binh chanh thanh pho ho chi minh"
 *      },
 *      {
 *          "_id": "5def3fdeb4269b3324197bea",
 *          "polygons": {
 *              "type": "Polygon",
 *              "coordinates": [
 *                  [
 *                      [
 *                          106.831091577,
 *                          10.841537504
 *                      ],
 *                      [
 *                          106.831162754,
 *                          10.841444532
 *                      ],
 *                      [
 *                          106.831190638,
 *                          10.841467929
 *                      ],
 *                      [
 *                          106.831119506,
 *                          10.8415608550001
 *                      ],
 *                      [
 *                          106.831091577,
 *                          10.841537504
 *                      ]
 *                  ]
 *              ]
 *          },
 *          "points": [
 *              106.831141116207,
 *              10.8415027055864
 *          ],
 *          "code": "792104R60.537",
 *          "ward_id": "5dc237b7d508de3c4c589809",
 *          "direction": "Hướng Bắc Nam",
 *          "image": "https://api.asset.vn\\product\\5def3fdeb4269b3324197bea\\5def3fdeb4269b3324197bea-image-z1652736546435_c520282427c3aad27bbec0f0779ecb7f.jpg-1575960542391.jpeg",
 *          "name": "Nhà phố Quận 9 Phường Long Thạnh Mỹ",
 *          "category_id": "5db2c448f835f22804d62d3c",
 *          "sale_price": 4,
 *          "width": 5,
 *          "length": 10,
 *          "land_area": 51.61,
 *          "type_id": "5d6e56c88e18e6eaf5076069",
 *          "a_value_rate": 4000,
 *          "feature": "Hẻm",
 *          "bedroom": 3,
 *          "bathroom": 4,
 *          "number_of_floor": 2,
 *          "number_of_sheet": 60,
 *          "number_of_parcel": "537",
 *          "search": "nhà riêng nha rieng phường long thạnh mỹ quận 9 thành phố hồ chí minh  phuong long thanh my quan 9 thanh pho ho chi minh"
 *      },
 *      {
 *          "_id": "5def4d3fb4269b3324197bf4",
 *          "polygons": {
 *              "type": "Polygon",
 *              "coordinates": [
 *                  [
 *                      [
 *                          106.704226,
 *                          10.740759
 *                      ]
 *                  ]
 *              ]
 *          },
 *          "points": [
 *              106.704226,
 *              10.740759
 *          ],
 *          "code": "791908R0000.0000",
 *          "ward_id": "5dc237ccd508de3c4c58b46a",
 *          "direction": "Hướng Bắc",
 *          "image": "https://api.asset.vn\\product\\5def4d3fb4269b3324197bf4\\5def4d3fb4269b3324197bf4-image-78991114_1460328227449668_3998705790566268928_o.jpg-1575963967940.jpeg",
 *          "name": "Nhà cho thuê tại Q7 giá rẻ",
 *          "category_id": "5db2c448f835f22804d62d33",
 *          "sale_price": 4,
 *          "width": null,
 *          "length": null,
 *          "land_area": 15,
 *          "type_id": "5d6e570e65b46f56a7f71a78",
 *          "a_value_rate": 4,
 *          "feature": "Mặt tiền",
 *          "bedroom": 1,
 *          "bathroom": 1,
 *          "search": "căn hộ chung cư can ho chung cu phường tân quy quận 7 thành phố hồ chí minh  phuong tan quy quan 7 thanh pho ho chi minh"
 *      }
 *  ]
 * },
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server error"
 *     }
 * 
 */


















/**
 * @api {get} /map/detect-province Detect Province
 * @apiName DectProvince
 * @apiGroup Map
 * @apiParam {Object} center Center Point Of Bound.
 * @apiParamExample Example:
 *     {
 *       "center": 10.74302064653004,106.65268857139291
 *     }
 * @apiSuccess {ObjectId} province Province ID
 * @apiSuccessExample Example data on success:
 *  {
 *      "status": true,
 *      "data": "5dc0cfc6bf871b3a3c6296bd"
 *  }
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server error"
 *     }
 */


 /**
 * @api {get} /map/detect-district Detect District
 * @apiName DectDistrict
 * @apiGroup Map
 * @apiParam {ObjectId} id Province ID.
 * @apiParam {Object} center Center Point Of Bound.
 * @apiParamExample Example:
 *     {
 *       "id": 5dc0cfc6bf871b3a3c6296bd,
 *       "center": 10.742838817797,106.65411282437982
 *     }
 * @apiSuccess {ObjectId} district District ID
 * @apiSuccessExample Example data on success:
 *  {
 *      "status": true,
 *      "data": "5dc0d057ade2533578818fa9"
 *  }
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server error"
 *     }
 */



 /**
 * @api {get} /map/detect-district Detect Ward
 * @apiName DectWard
 * @apiGroup Map
 * @apiParam {ObjectId} id District ID.
 * @apiParam {Object} center Center Point Of Bound.
 * @apiParamExample Example:
 *     {
 *       "id": 5dc0d057ade2533578818fa9,
 *       "center": 106.65305737513246,10.742136536227594,106.65508378404321,10.743413290811999
 *     }
 * @apiSuccess {ObjectId} ward Ward ID
 * @apiSuccessExample Example data on success:
 *  {
 *      "status": true,
 *      "data": [
 *          "792004",
 *          "792005"
 *      ]
 *  }
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server error"
 *     }
 */



 /**
 * @api {get} /map/get_list_suggestion Get List Suggestion
 * @apiName Get List Suggestion
 * @apiGroup Map
 * @apiParam {String} keyword Keyword Suggestion.
 * @apiParam {Int32} limit Limit Suggestion.
 * @apiParamExample Example:
 *     {
 *       "keyword": s,
 *       "limit": 10
 *     }
 * @apiSuccess {ObjectId} ward Ward ID
 * @apiSuccessExample Example data on success:
 *  [
 *      {
 *          "name": "project",
 *          "status": true,
 *          "rel_id": "5db80d0244ab3a16f4216081",
 *          "weight": 0.5,
 *          "refPath": "project",
 *          "ward_id": "5dc237b7d508de3c4c58981f",
 *          "title": "Ehome S",
 *          "sub_title": "Phường Phú Hữu Quận 9 Thành phố Hồ Chí Minh ",
 *          "search": "ehome s ehome s phường phú hữu quận 9 thành phố hồ chí minh  phuong phu huu quan 9 thanh pho ho chi minh",
 *          "_id": "5dfc86de3f2b693a94a83965"
 *      },
 *      {
 *          "name": "res_address",
 *          "status": true,
 *          "rel_id": "5e2179a516b70e34ec8fbf00",
 *          "weight": 1,
 *          "refPath": "res_address_new",
 *          "title": "Tỉnh Lạng Sơn",
 *          "sub_title": " ",
 *          "search": "tỉnh lạng sơn tinh lang son",
 *          "_id": "5e4c996aa977954014701016"
 *      },
 *      {
 *          "name": "res_address",
 *          "status": true,
 *          "rel_id": "5e2179a616b70e34ec8fbf14",
 *          "weight": 1,
 *          "refPath": "res_address_new",
 *          "title": "Tỉnh Sóc Trăng",
 *          "sub_title": " ",
 *          "search": "tỉnh sóc trăng tinh soc trang",
 *          "_id": "5e4c996aa97795401470102a"
 *      },
 *      {
 *          "name": "res_address",
 *          "status": true,
 *          "rel_id": "5e2179a516b70e34ec8fbf0b",
 *          "weight": 1,
 *          "refPath": "res_address_new",
 *          "title": "Tỉnh Sơn La",
 *          "sub_title": " ",
 *          "search": "tỉnh sơn la tinh son la",
 *          "_id": "5e4c996aa977954014701021"
 *      },
 *      {
 *          "name": "project",
 *          "status": true,
 *          "rel_id": "5e450e6a44a1629b59d305f0",
 *          "weight": 0.5,
 *          "refPath": "project",
 *          "ward_id": "5dc237b6d508de3c4c5897d5",
 *          "title": "Chung cư Ehome 4 Bắc Sài Gòn",
 *          "sub_title": "Phường Vĩnh Phú Thị xã Thuận An Tỉnh Bình Dương",
 *          "search": "Chung cư Ehome 4 Bắc Sài Gòn chung cu ehome 4 bac sai gon",
 *          "_id": "5e450eb644a1629b59d30a14"
 *      },
 *      {
 *          "name": "res_address",
 *          "status": true,
 *          "rel_id": "5dc0d055ade2533578818b9f",
 *          "weight": 0.5,
 *          "refPath": "res_address_new",
 *          "title": "Huyện Bắc Sơn",
 *          "sub_title": "Tỉnh Lạng Sơn ",
 *          "search": "huyện bắc sơn huyen bac son",
 *          "_id": "5e4c9966a9779540146fe18c"
 *      },
 *      {
 *          "name": "res_address",
 *          "status": true,
 *          "rel_id": "5dc0d055ade2533578818b87",
 *          "weight": 0.5,
 *          "refPath": "res_address_new",
 *          "title": "Huyện Anh Sơn",
 *          "sub_title": "Tỉnh Nghệ An ",
 *          "search": "huyện anh sơn huyen anh son",
 *          "_id": "5e4c9966a9779540146fe180"
 *      },
 *      {
 *          "name": "res_address",
 *          "status": true,
 *          "rel_id": "5dc0d055ade2533578818bc7",
 *          "weight": 0.5,
 *          "refPath": "res_address_new",
 *          "title": "Huyện Bình Sơn",
 *          "sub_title": "Tỉnh Quảng Ngãi ",
 *          "search": "huyện bình sơn huyen binh son",
 *          "_id": "5e4c9966a9779540146fe1a0"
 *      },
 *      {
 *          "name": "res_address",
 *          "status": true,
 *          "rel_id": "5dc0d055ade2533578818c61",
 *          "weight": 0.5,
 *          "refPath": "res_address_new",
 *          "title": "Huyện Đắk Song",
 *          "sub_title": "Tỉnh Đắk Nông ",
 *          "search": "huyện đắk song huyen dak song",
 *          "_id": "5e4c9966a9779540146fe1ed"
 *      },
 *      {
 *          "name": "res_address",
 *          "status": true,
 *          "rel_id": "5dc0d055ade2533578818c33",
 *          "weight": 0.5,
 *          "refPath": "res_address_new",
 *          "title": "Huyện Chư Sê",
 *          "sub_title": "Tỉnh Gia Lai ",
 *          "search": "huyện chư sê huyen chu se",
 *          "_id": "5e4c9966a9779540146fe1d6"
 *      }
 *  ]
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server error"
 *     }
 */




 /**
 * @api {get} /map/polygon_outside Get Polyson Outside
 * @apiName Get Polygon Outside
 * @apiGroup Map
 * @apiParam {Object} bound Bound Bound Of Map.
 * @apiParam {Int32} limit Limit Items.
 * @apiParam {ObjectId} current_address_id Current Address ID.
 * @apiParamExample Example:
 *     {
 *       "bound": [[105.35166738031913,10.029879599733322],[107.4267101049285,11.337500989804807]],
 *       "limit": 63,
 *       "current_address_id": 5e2179a416b70e34ec8fbedf
 *     }
 * @apiSuccess {Array} listPolygonOutside List Polygon Outside
 * @apiSuccessExample Example data on success:
 *  [
 *      {
 *          "_id": "5e2179a416b70e34ec8fbedd",
 *          "address_name": "Thành phố Cần Thơ",
 *          "type": "C",
 *          "polygon": [
 *              {
 *                  "_id": "5dc100149bae9d046cfc645c",
 *                  "polygons": {
 *                      "type": "Polygon",
 *                      "coordinates": [
 *                          [
 *                              [
 *                                  105.49543762200005,
 *                                  10.32534885400005
 *                              ],
 *                              [...],
 *                              [...]
 *                          ]
 *                      ]
 *                  }
 *              }
 *          ]
 *      }
 *      {...},
 *      {...}
 *  }
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server error"
 *     }
 */




 /**
 * @api {get} /map/get_by_address_id Get Address By ID
 * @apiName Get Address By ID
 * @apiGroup Map
 * @apiParam {ObjectId} address_id Address ID Product.
 * @apiParam {Int32} limit Limit Product Address.
 * @apiParam {String} code Address Code.
 * @apiParamExample Example:
 *     {
 *       "address_id": 5e2179a416b70e34ec8fbedf,
 *       "limit": 500,
 *       "code": 
 *     }
 * @apiSuccess {Array} address Address
 * @apiSuccess {Array} listProduct List Product
 * @apiSuccess {Array} listPolygonInside List Polygon Inside
 * @apiSuccessExample Example data on success:
 *  {
 *      "address": [
 *          {
 *              "_id": "5e2179a416b70e34ec8fbedf",
 *              "company_id": "ROOT",
 *              "status": true,
 *              "reaction": [],
 *              "polygon_id": [
 *                  "5dc100149bae9d046cfc645e"
 *              ],
 *              "address_name": "Thành phố Hồ Chí Minh",
 *              "type": "C",
 *              "parent_id": null,
 *              "points": {
 *                  "type": "Point",
 *                  "coordinates": [
 *                      106.704809484,
 *                      10.735237004
 *                  ]
 *              },
 *              "code": "79",
 *              "create_uid": "5d9c3342cc1f7b3f4c8e79dd",
 *              "__v": 0,
 *              "polygon": [
 *                  {
 *                      "_id": "5dc100149bae9d046cfc645e",
 *                      "create_uid": "5d679819325ab70ab0157ce5",
 *                      "create_date": "2019-11-05T04:49:57.892Z",
 *                      "write_uid": "5d679819325ab70ab0157ce5",
 *                      "write_date": "2019-11-05T04:49:57.892Z",
 *                      "company_id": "ROOT",
 *                      "status": true,
 *                      "delete_id": null,
 *                      "rel_id": "5dc0cfc6bf871b3a3c6296bd",
 *                      "code": "79",
 *                      "collection_name": "res_province",
 *                      "__v": 0,
 *                      "polygons": {
 *                          "type": "Polygon",
 *                          "coordinates": [
 *                              [
 *                                  [
 *                                      106.45614978800008,
 *                                      11.160309933000034
 *                                  ],
 *                                  [...],
 *                                  [...]
 *                              ]
 *                          ]
 *                      }
 *                  }
 *              ]
 *          }
 *      ],
 *      "ListProduct": [],
 *      "listPolygonInside": [
 *          {
 *              "_id": "5dc0d055ade2533578818bbb",
 *              "code": "7901",
 *              "parent_id": "5e2179a416b70e34ec8fbedf",
 *              "polygon": {
 *                  "polygons": {
 *                      "type": "Polygon",
 *                      "coordinates": [
 *                          [
 *                              [
 *                                  106.52880870100009,
 *                                  10.84750434400008
 *                              ],
 *                              [...],
 *                              [...]
 *                          ]
 *                      ]
 *                  }
 *              }
 *          }
 *      ]
 *  }
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "fail to connect to server! :(( "
 *     }
 */





 /**
 * @api {get} /map/full-location  Get Full Location
 * @apiName Get Full Location
 * @apiGroup Map
 * @apiParam {String} code Code.
 * @apiParam {ObjectId} id Address ID.
 * @apiParamExample Example:
 *     {
 *       "code": ,
 *       "id": 5dc0d057ade2533578818f95
 *     }
 * @apiSuccess {Oject} getFullLocation Full Location
 * @apiSuccessExample Example data on success:
 *  {
 *      "status": true,
 *      "data": [
 *          {
 *              "company_id": "ROOT",
 *              "status": true,
 *              "reaction": [],
 *              "polygon_id": [
 *                  "5dc100149bae9d046cfc645e"
 *              ],
 *              "_id": "5e2179a416b70e34ec8fbedf",
 *              "address_name": "Thành phố Hồ Chí Minh",
 *              "type": "C",
 *              "parent_id": null,
 *              "points": {
 *                  "type": "Point",
 *                  "coordinates": [
 *                      106.704809484,
 *                      10.735237004
 *                  ]
 *              },
 *              "code": "79",
 *              "create_uid": "5d9c3342cc1f7b3f4c8e79dd",
 *              "__v": 0
 *          }
 *      ]
 *  }
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server error"
 *     }
 */



  /**
 * @api {get} /map/filter_agency  Get Agency
 * @apiName Get Agency
 * @apiGroup Map
 * @apiSuccess {Oject} filterAgency Filter Agency
 * @apiSuccessExample Example data on success:
 *  {
 *      "status": true,
 *      "data": [
 *          {
 *              "_id": "5dba390006d6a109b15d60ef",
 *              "create_uid": "5dbb9d3b65bb02ebb0ec7fb3",
 *              "create_date": "2019-10-25T07:48:22.046Z",
 *              "write_uid": "5d679819325ab70ab0157ce5",
 *              "write_date": "2019-10-25T07:48:22.046Z",
 *              "company_id": "ROOT",
 *              "status": true,
 *              "delete_id": null,
 *              "working_area": "5dc0d057ade2533578818fab",
 *              "description": "",
 *              "sequence": 0,
 *              "icon": "",
 *              "logo": "",
 *              "keyword": "",
 *              "points": null,
 *              "code": "DL10001",
 *              "name": "Đại lý cấp 1 TPHCM (Quận 9)",
 *              "category_id": "5dafd01513818c28e0916316",
 *              "partner_id": "5db2abddd8ee0717dc269a1c",
 *              "__v": 0,
 *              "reaction": [],
 *              "company_name": "Nguyễn Thái Bảo",
 *              "display_name": "Nguyễn Thái Bảo",
 *              "address": "216 Nguyễn Hoàng",
 *              "address1": "216 Nguyễn Hoàng",
 *              "type": "APPROVED",
 *              "res_district": {
 *                  "_id": "5dc0d057ade2533578818fab",
 *                  "create_uid": "5d679819325ab70ab0157ce5",
 *                  "create_date": "2020-01-16T09:03:10.423Z",
 *                  "write_uid": "5d679819325ab70ab0157ce5",
 *                  "write_date": "2019-11-05T01:28:42.327Z",
 *                  "company_id": "ROOT",
 *                  "status": true,
 *                  "delete_id": null,
 *                  "reaction": [],
 *                  "code": "7921",
 *                  "main_code": "21",
 *                  "name": "Quận 9",
 *                  "type": "Quận",
 *                  "province_id": "5dc0cfc6bf871b3a3c6296bd",
 *                  "points": {
 *                      "type": "Point",
 *                      "coordinates": [
 *                          106.822899234,
 *                          10.8232983009
 *                      ]
 *                  },
 *                  "__v": 0
 *              },
 *              "res_province": {
 *                  "_id": "5dc0cfc6bf871b3a3c6296bd",
 *                  "create_uid": "5d679819325ab70ab0157ce5",
 *                  "create_date": "2019-11-05T01:26:10.350Z",
 *                  "write_uid": "5d679819325ab70ab0157ce5",
 *                  "write_date": "2019-11-05T01:26:10.350Z",
 *                  "company_id": "ROOT",
 *                  "status": true,
 *                  "delete_id": null,
 *                  "reaction": [],
 *                  "country_id": "243",
 *                  "code": "79",
 *                  "name": "Thành phố Hồ Chí Minh",
 *                  "type": "Thành phố",
 *                  "__v": 0,
 *                  "points": {
 *                      "type": "Point",
 *                      "coordinates": [
 *                          106.704809484,
 *                          10.735237004
 *                      ]
 *                  }
 *              }
 *          }
 *      ]
 *  }
 * @apiError error The <code>server</code> was error.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 5XX Internal Server Error
 *     {
 *       "status": "false",
 *       "error": "Server error"
 *     }
 */