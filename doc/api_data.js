define({ "api": [
  {
    "type": "get",
    "url": "/address/district",
    "title": "Get List District",
    "version": "0.1.0",
    "name": "GetListDistrict",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "city_id",
            "description": "<p>City ID Of District.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"city_id\": \"5dc0cfc6bf871b3a3c629703\"\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-11-05T01:28:42.327Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-11-05T01:28:42.327Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        _id: \"5dc0d055ade2533578818b79\",\n        reaction: [ ],\n        code: \"4607\",\n        main_code: \"07\",\n        name: \"Huyện A Lưới\",\n        type: \"Huyện\",\n        province_id: \"5dc0cfc6bf871b3a3c629703\",\n        points: {\n            type: \"Point\",\n            coordinates: [\n                107.298172561,\n                16.2359891944\n            ]\n        },\n        __v: 0\n   },\n   {...},\n   {...},\n   {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/address/province",
    "title": "Get List Province",
    "version": "0.1.0",
    "name": "GetListProvince",
    "group": "Address",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Province.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-11-05T01:26:10.350Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-11-05T01:26:10.350Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        _id: \"5dc0cfc5bf871b3a3c6296b9\",\n        reaction: [ ],\n        country_id: \"243\",\n        code: \"92\",\n        name: \"Thành phố Cần Thơ\",\n        type: \"Thành phố\",\n        __v: 0,\n        points: {\n            type: \"Point\",\n            coordinates: [\n                105.53032391,\n                10.1145177108\n            ]\n        }\n   },\n   {...},\n   {...},\n   {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/address/ward",
    "title": "Get List Ward",
    "version": "0.1.0",
    "name": "GetListWard",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "province_id",
            "description": "<p>District ID Of Ward.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"province_id\": \"5dc0d056ade2533578818d7d\"\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-11-06T03:00:21.913Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-11-06T03:00:21.913Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        _id: \"5dc237a3d508de3c4c58801e\",\n        reaction: [ ],\n        code: \"240600\",\n        name: \"Trung tâm huấn luyện Cấm Sơn\",\n        type: \"Trung tâm huấn luyện\",\n        district_id: \"5dc0d056ade2533578818d7d\",\n        points: null,\n        __v: 0\n   },\n   {...},\n   {...},\n   {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/address/get-location",
    "title": "Get Location",
    "version": "0.1.0",
    "name": "GetLocation",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "ward",
            "description": "<p>Ward ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"ward\": \"5dc237a3d508de3c4c58801e\"\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     status: true,\n     data: {\n         _id: \"5dc237a3d508de3c4c58801e\",\n         district: {\n             _id: \"5dc0d056ade2533578818d7d\",\n             code: \"2406\",\n             name: \"Huyện Lục Ngạn\"\n         },\n         province: {\n             _id: \"5dc0cfc6bf871b3a3c6296c1\",\n             code: \"24\",\n             name: \"Tỉnh Bắc Giang\"\n         },\n         ward: {\n             _id: \"5dc237a3d508de3c4c58801e\",\n             name: \"Trung tâm huấn luyện Cấm Sơn\",\n             code: \"240600\"\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddressLenght",
            "description": "<p>The <code>length</code> of the address was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không tìm thấy địa chỉ\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "post",
    "url": "/ask/add-ask",
    "title": "Add New Ask",
    "version": "0.1.0",
    "name": "AddNewAsk",
    "group": "Ask",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Ask Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Ask Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ask Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Ask Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Ask Content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Ask URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Ask Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_name",
            "description": "<p>Asset Rename Ask Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Search Result.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reaction",
            "description": "<p>Ask Reaction.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "approve",
            "description": "<p>Approve Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"status\": true,\n   \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-09-26T03:24:44.666Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-09-26T03:24:44.666Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"url_name\": \"\",\n      \"sequence\": 0,\n      \"content\": \"\",\n      \"url_name\": \"\",\n      \"search\": \"tại sao danh sách fsbo của tôi không được đăng? tai sao danh sach fsbo cua toi khong duoc dang\",\n      \"asset_name\": \"\",\n      \"category_id\": \"5d7f313e2c69582d740b7afd\",\n      \"approve\": \"APPROVED\",\n      \"reaction\": [],\n      \"name\": \"Tại sao danh sách FSBO của tôi không được đăng?\",\n      \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AskName",
            "description": "<p>The <code>name</code> of the question was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AskContent",
            "description": "<p>The <code>content</code> of the question was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền tên câu hỏi\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền nội dung câu hỏi\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ask.js",
    "groupTitle": "Ask"
  },
  {
    "type": "post",
    "url": "/ask/add-category",
    "title": "Add New Ask Category",
    "version": "0.1.0",
    "name": "AddNewAskCategory",
    "group": "Ask_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Ask Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Ask Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Ask Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Ask Category URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ask Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Ask Category Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Ask Category Sequence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"status\": true,\n  \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-10-11T01:56:35.189Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-10-11T01:56:35.189Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"parent_id\": null,\n      \"sequence\": 0,\n      \"name\": \"Pháp lý Bất Động Sản\",\n      \"url_name\": \"phap-ly-bat-dong-san\",\n      \"code\": \"ASK_LEGAL\",\n      \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "get",
    "url": "/ask/get-ask-by-id",
    "title": "Ask Category Detail",
    "version": "0.1.0",
    "name": "DetailAskCategory",
    "group": "Ask_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "askID",
            "description": "<p>Ask Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"askID\": \"5d9d32eca3addc584136d026\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n     status: true,\n     data: {\n         _id: \"5d9d32eca3addc584136d026\",\n         delete_id: null,\n         asset_name: \"\",\n         sequence: 2,\n         url_name: \"\",\n         approve: \"APPROVED\",\n         name: \"Nhà tôi đang bán và cho thuê. Cả hai danh sách có thể xuất hiện trên Asset?\",\n         category_id: [\n             \"5d7f391dd76bcb1fe874247a\"\n         ],\n         __v: 0,\n         content: \"<h4><strong><em><u>Nội dung phản hồi: </u></em></strong></h4><p>Asset cho phép một danh sách hoạt động cho mỗi địa chỉ tài sản tại một thời điểm. Một ngôi nhà có thể được liệt kê để bán hoặc cho thuê, nhưng không phải cả hai cùng một lúc.</p>\",\n         reaction: [\n             \"5db2a202cf459e133c6349a9\"\n         ],\n         company_id: \"ROOT\",\n         create_date: \"2019-10-11T04:54:55.175Z\",\n         search: \"nhà tôi đang bán và cho thuê. cả hai danh sách có thể xuất hiện trên asset? nha toi dang ban va cho thue ca hai danh sach co the xuat hien tren asset \",\n         status: true,\n         write_date: \"2019-10-11T04:54:55.175Z\",\n         type: \"ask\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "askID",
            "description": "<p>The <code>askID</code> of the question was not correct.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu ID câu hỏi\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"true\"\n  \"message\": \"Không tìm thấy thông tin\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "get",
    "url": "/ask/get-list-category",
    "title": "Get List Ask Category",
    "version": "0.1.0",
    "name": "GetListAskCategory",
    "group": "Ask_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     status: true,\n     data: [\n         {\n             _id: \"5d7f38d6d76bcb1fe8742476\",\n             name: \"Quy định pháp luật về bất động sản - dự án\"\n         },\n         {\n             _id: \"5d7f38f3d76bcb1fe8742477\",\n             name: \"Pháp lý dự án, phê duyệt quy hoạch\"\n         },\n         {\n             _id: \"5d7f3902d76bcb1fe8742478\",\n             name: \"Biểu mẫu thực hiện thủ tục\"\n         },\n         {\n             _id: \"5d7f390dd76bcb1fe8742479\",\n             name: \"Hợp đồng mẫu về bất động sản, xây dựng\"\n         },\n         {\n             _id: \"5d7f391dd76bcb1fe874247a\",\n             name: \"Các vấn đề khác \"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "post",
    "url": "/auth/change-password",
    "title": "Change Password",
    "name": "ChangePassword",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Current Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>User New Password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\": \"5d9c3342cc1f7b3f4c8e79dd\",\n     \"password\": \"123456\",\n     \"newPassword\": \"Vu0902694200@\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": \"false\",\n  \"message\": \"Đăng nhập thành công!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>The <code>user</code> was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "validPass",
            "description": "<p>The <code>Current Password</code> was not correct.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Không tìm thấy tải khoản\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Mật khẩu không chính xác!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "get",
    "url": "/auth/authenticate",
    "title": "Check Authenticate",
    "version": "0.1.0",
    "name": "CheckAuthenticate",
    "group": "Authenticate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Authenticate Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Authenticate Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\":true,\n  \"message\":\"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\":false,\n  \"message\":\"Không thể tìm thấy token\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\":false,\n  \"message\":\"Token không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/check-idSignup",
    "title": "Check Id Signup",
    "name": "CheckIdSignup",
    "group": "Authenticate",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/check-info-signup",
    "title": "Check Info Signup",
    "name": "CheckInfoSignup",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "newUser",
            "description": "<p>New User Info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"newUser\": {\n        \"first_name\": \"Minh\",\n        \"last_name\": \"Hinh Hoc\",\n        \"email\": \"\",\n        \"referral_code\": \"AOZ505\",\n        \"country_code\": \"84\",\n        \"phone\": \"0792452548\",\n        \"inactive\": \"true\",\n        \"password\": hashedPassword\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"true\",\n  \"data\": \"5de478a602949b06006a3dab\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/get-role-token",
    "title": "Get Role Token",
    "name": "CheckInfoSignup",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "group_id",
            "description": "<p>User Group Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "company_id",
            "description": "<p>User Company Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"id\": \"5d9c3342cc1f7b3f4c8e79dd\",\n     \"group_id\": \"5d9d94fe93d1b678bbe3568a\",\n     \"company_id\": \"5d9ae33a6c872036a4b2d47f\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ5YzMzNDJjYzFmN2IzZjRjOGU3OWRkIiwiZ3JvdXBfaWQiOiI1ZDlkOTRmZTkzZDFiNjc4YmJlMzU2OGEiLCJjb21wYW55X2lkIjoiNWQ5YWUzM2E2Yzg3MjAzNmE0YjJkNDdmIiwiaWF0IjoxNTc1MzQxMzYxLCJleHAiOjMzMTExMzQxMzYxfQ.Zs02ntLptgAmf873qPe2aRiIbOH0ywtAc8-3OmmAimzR7Yn_UjnR7_S5F1L1RluuAAcZdqWOwlurp0fADoKRAg\"\n  \"status\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/check-login",
    "title": "Check Login",
    "name": "CheckLogin",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "userRoles",
            "description": "<p>User Role.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\": \"5d9c3342cc1f7b3f4c8e79dd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"true\",\n  \"isLogin\": \"true\",\n  \"message\": \"Đăng nhập thành công!\",\n  \"user\": {\n        avatar: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQA\"\n        first_name: \"Dương Công\"\n        id: \"5d9c3342cc1f7b3f4c8e79dd\"\n        last_name: \"Vủ\"\n        phone: \"0123123123\"\n        save_product: []\n        save_project: [\"5db80cfe44ab3a16f421599a\", \"5db80cfe44ab3a16f421599d\", \"5db80cfe44ab3a16f42159a0\",…]\n        userRoles: [{_id: \"5d9d991050d9ad34b4db2e8d\",…}, {_id: \"5d9d991050d9ad34b4db2e8d\",…},…]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/get-role-active",
    "title": "Get Role Active",
    "name": "CheckRoleActive",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleToken",
            "description": "<p>User Role Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"roleToken\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"\"\n  \"status\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User Phone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"phone\" : \"0902694200\",\n     \"password\" : \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": \"true\",\n  \"status\": \"true\",\n  \"token\": \"\",\n  \"refreshToken\": \"\",\n  \"message\": \"Đăng nhập thành công!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginValidation",
            "description": "<p>The <code>Phone Number</code> of the user was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CheckPhone",
            "description": "<p>The <code>Phone Number</code> of the user was not correct.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "validPass",
            "description": "<p>The <code>password</code> of user was not correct.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"isLogin\": \"false\"\n  \"message\": \"Số điện thoại nhập vào không đúng quy định!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"isLogin\": \"false\"\n  \"message\": \"Số điện thoại không chính xác!\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"isLogin\": \"false\"\n  \"message\": \"Mật khẩu không chính xác!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "Signup Account",
    "name": "Login",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referral_code",
            "description": "<p>User Referral Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User Phone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9c3342cc1f7b3f4c8e79dd\"),\n     \"rel_id\" : ObjectId(\"5db814cb5d0a533960ad5d4e\"),\n     \"rating\" : [{rating_avg: \"4.5\"}],\n     \"comment\" : \"Hay qua\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"true\"\n  \"message\": \"Tạo tài khoản thành công.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "checkToken",
            "description": "<p>The <code>token</code> of the user was not correct.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "_id",
            "description": "<p>The <code>id</code> of user was null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "user",
            "description": "<p>The <code>user</code> not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"idToken không chính xác\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu id tài khoản\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không tìm thấy tài khoản\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/fb",
    "title": "Login With Facebook",
    "name": "LoginWithFacebook",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>User Access Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Of User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User Avatar.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"accessToken\": \"\",\n     \"userID\": \"1454497011366430\",\n     \"email\": \"huavanvu2812@gmail.com\",\n     \"first_name\": \"Hua\",\n     \"last_name\": \"Vu\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": \"true\",\n  \"status\": \"true\",\n  \"token\": \"\",\n  \"refreshToken\": \"\",\n  \"message\": \"Đăng nhập thành công!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginValidation",
            "description": "<p>The <code>Token</code> of the user was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Đăng nhập thất bại\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/google",
    "title": "Login With Google",
    "name": "LoginWithGoogle",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tokenId",
            "description": "<p>User Token ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profileObj",
            "description": "<p>User Profile.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "googleId",
            "description": "<p>User Google ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"tokenId\": \"\",\n     \"profileObj\": {\n        \"first_name\": \"Vũ\" ,\n        \"last_name\": \"Hứa Văn\",\n        \"avatar\": \"https://lh6.googleusercontent.com/-MGie-EqVE-U/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd-xdMn3wj2HQHSCQn3uI49k37j_g/s96-c/photo.jpg\"\n      },\n     \"googleId\": \"5dddd76fb4be71385c5fc2a3\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": \"true\",\n  \"status\": \"true\",\n  \"token\": \"\",\n  \"refreshToken\": \"\",\n  \"message\": \"Đăng nhập thành công!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginValidation",
            "description": "<p>The <code>Token</code> of the user was not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Đăng nhập thất bại\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "get",
    "url": "/auth/logout",
    "title": "Logout",
    "version": "0.1.0",
    "name": "Logout",
    "group": "Authenticate",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\":false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/recover-password",
    "title": "Recover Password",
    "name": "Recover_Password",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User Phone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idToken",
            "description": "<p>User ID Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>User New Password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"phone\": \"0902694200\",\n     \"idToken\": \"\",\n     \"newPassword\": \"Vu0902694200\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"\"\n  \"status\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChangePasswordValidate",
            "description": "<p>The <code>newPassword</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\",\n  \"message\": \"Mật khẩu không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/rfToken",
    "title": "Refresh Token",
    "name": "RefreshToken",
    "group": "Authenticate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>User Refresh Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"refreshToken\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"JWT token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\Windows 10\\Documents\\GitHub\\Asset-APIDocuments\\doc\\main.js",
    "groupTitle": "C:\\Users\\Windows 10\\Documents\\GitHub\\Asset-APIDocuments\\doc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/comment/add",
    "title": "Add New Comment",
    "version": "0.1.0",
    "name": "AddNewComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Comment Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Comment Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Comment Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Comment Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "children",
            "description": "<p>Comment Children.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Comment Path.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Comment Rely Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rel_id_string",
            "description": "<p>Comment Rely ID String.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"create_uid\" : ObjectId(\"5d9c378d3c34df0f449f5ac3\"),\n     \"create_date\" : ISODate(\"2019-10-11T01:57:44.524Z\"),\n     \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n     \"write_date\" : ISODate(\"2019-10-10T06:54:20.514Z\"),\n     \"company_id\" : \"ROOT\",\n     \"status\" : true,\n     \"delete_id\" : null,\n     \"reaction\" : [],\n     \"parent_id\" : ObjectId(\"5d9fe0e8ec7cab08bcbbab3d\"),\n     \"children\" : [],\n     \"rel_id\" : ObjectId(\"5d789b9da31d1828c0c10dd0\"),\n     \"title\" : \"dsd\",\n     \"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reaction",
            "description": "<p>Comment Reaction.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Title",
            "description": "<p>The <code>title</code> of the comment was missed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"miss title\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/count_by_id",
    "title": "Count Number Of Comment By ID",
    "version": "0.1.0",
    "name": "CountNumberOfComment",
    "group": "Comment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n    status: true,\n    data: 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/list",
    "title": "Get List Comment",
    "version": "0.1.0",
    "name": "GetListComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Rel Comment ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "create_date",
            "description": "<p>Comment Create Date.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Comment Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "offset",
            "description": "<p>Comment Offset.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Comment Limit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"rel_id\": \"5d9d304fa3addc58413349bf\",\n  \"create_date\": \"2019-10-09T02:07:36.549Z\",\n  \"parent_id\": \"\",\n  \"offset\": \"1\",\n  \"limit\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        _id: \"5d9fddf606816b2e80f298e9\",\n        create_date: \"2019-10-11T01:42:14.168Z\",\n        reaction: [ ],\n        parent_id: null,\n        children: [ ],\n        rel_id: \"5d9d304fa3addc58413349bf\",\n        title: \"asdasd\"\n    },\n    {\n        _id: \"5d9d40e84942bc16f4f5f1a8\",\n        create_date: \"2019-10-09T02:07:36.549Z\",\n        reaction: [ ],\n        parent_id: null,\n        children: [ ],\n        rel_id: \"5d9d304fa3addc58413349bf\",\n        title: \"Van ban rat co ich\",\n        user: {\n            _id: \"5d9c3342cc1f7b3f4c8e79dd\",\n            first_name: \"Duong Cong \",\n            last_name: \"Vu\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Rel_ID",
            "description": "<p>The <code>rel_id</code> of the comment was missed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Missing param rel_id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/contact/add-contact",
    "title": "Add New Company",
    "version": "0.1.0",
    "name": "AddNewCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Company Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Company Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Company Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Company Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Company Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Company Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Company Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Company Icon.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Company Partner ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Company Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Company Keyword.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "points",
            "description": "<p>Company Points.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9ae33a6c872036a4b2d47f\"),\n     \"name\" : \"Asset\",\n     \"category_id\" : null,\n     \"display_name\" : \"Assetvn\",\n     \"parent_id\" : null,\n     \"phone\" : \"213213\",\n     \"email\" : \"nguyenvu@asf.com\",\n     \"address\" : \"Vung tau\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Company Logo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Name",
            "description": "<p>The <code>name</code> of the company was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Address",
            "description": "<p>The <code>address</code> of the company was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Phone",
            "description": "<p>The <code>phone</code> of the company was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CountryCode",
            "description": "<p>The <code>country_code</code> of the company was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền tên liên hệ\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền địa chỉ\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền số điện thoại\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền mã quốc gia\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/contact/add-contact-category",
    "title": "Add New Company Category",
    "version": "0.1.0",
    "name": "AddNewCompanyCategory",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Company Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Company Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Company Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Company Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Company Category Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Company Category Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Company Category Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Company Category URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Company Category Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Company Category Keyword.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"_id\" : ObjectId(\"5dafd01513818c28e0916314\"),\n    \"create_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"create_date\" : ISODate(\"2019-10-23T03:56:36.202Z\"),\n    \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"write_date\" : ISODate(\"2019-10-23T03:56:36.202Z\"),\n    \"company_id\" : \"ROOT\",\n    \"status\" : true,\n    \"delete_id\" : null,\n    \"description\" : \"\",\n    \"keyword\" : \"\",\n    \"code\" : \"US\",\n    \"name\" : \"Cộng tác viên\",\n    \"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Name",
            "description": "<p>The <code>name</code> of the company category was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserID",
            "description": "<p>The <code>user_id</code> of the company category was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Result",
            "description": "<p>The <code>result</code> of the company category was emptied.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Vui lòng điền tên danh mục\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không thể tìm thấy id của bạn\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không thể thêm danh mục\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/check-rating-company",
    "title": "Check Company Rating",
    "version": "0.1.0",
    "name": "CheckCompanyRating",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Rating Company Rel_ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"rel_id\": \"5db814c95d0a533960ad5aa0\"\n  \"_id\": \"5dc66227bb0990fd18af4def\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Rating Company Info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status: true,\n    data: {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        comment: \"Doanh nghiep\",\n        _id: \"5dc4e75871e8b11638ec2b19\",\n        user_id: \"5d9c3342cc1f7b3f4c8e79dd\",\n        rel_id: \"5db814cb5d0a533960ad5db0\",\n        value: 3.5,\n        type: \"company\",\n        create_date: \"2019-11-08T03:56:08.065Z\",\n        write_date: \"2019-11-08T03:56:08.065Z\",\n        __v: 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "checkRating",
            "description": "<p>The <code>checkRating</code> of user was null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Rel_ID",
            "description": "<p>The <code>rel_id</code> of rating company was null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Chưa đánh giá\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu thông tin\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/get-rating-company",
    "title": "Get Company Rating",
    "version": "0.1.0",
    "name": "GetCompanyRating",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Rating Company Rel_ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"rel_id\": \"5db814c95d0a533960ad5aa0\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Rating Company Info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status: true,\n    data: {\n        listRating: [\n            {\n                comment: \"good\",\n                _id: \"5dc663a827de91d19ca946c4\",\n                user_id: {\n                    _id: \"5dc66227bb0990fd18af4def\",\n                    first_name: \"Minh\",\n                    last_name: \"nguyen\"\n            },\n            value: 3,\n            create_date: \"2019-11-09T06:58:48.732Z\"\n            }\n        ],\n        ratingOverview: {\n            avgRating: 3,\n            countUser: 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Rel_ID",
            "description": "<p>The <code>rel_id</code> of the rating company was null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu thông tin\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/get-by-id",
    "title": "Get List Contact By ID",
    "version": "0.1.0",
    "name": "GetListContactByID",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Contact ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": \"5db814c65d0a533960ad55ec\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>List Suggestion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status: true,\n    data: {\n        country_code: 84,\n        category_id: [\n            \"5dafd01513818c28e0916318\"\n        ],\n        total_view: 0,\n        parent_id: null,\n        reaction: [ ],\n        _id: \"5db814c65d0a533960ad55ec\",\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-10-29T10:14:41.057Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-10-29T10:14:41.057Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        tel: \"\",\n        hotline: \"\",\n        email: \"info@becamex.com.vn\",\n        website: \"www.becamex.com.vn\",\n        address1: \"8 Đại Lộ Hùng Vương, Phường Hòa Phú, Thành phố Thủ Dầu Một, Tỉnh Bình Dương\",\n        address: \"\",\n        company_name: \"TỔNG CÔNG TY ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHIỆP - CTCP\",\n        display_name: \"BECAMEX IDC CORP\",\n        founded_year: 2010,\n        legal_representative: \"Phạm Ngọc Thuận\",\n        company_type: \"TNHH MTV\",\n        tax_code: \"3700145020\",\n        bank_account: \"\",\n        bank_name: \"\",\n        bank_branch: \"\",\n        description: \"\",\n        search: \"TỔNG CÔNG TY ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHIỆP - CTCP tong cong ty dau tu va phat trien cong nghiep ctcp BECAMEX IDC CORP becamex idc corp\",\n        points: {\n            type: \"Point\",\n            coordinates: [\n                0,\n                0\n            ]\n        },\n        icon: \"\",\n        logo: \"\",\n        code: \"IV.0001\",\n        __v: 0,\n        rating: [ ],\n        rating_avg: 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/suggestion",
    "title": "Get List Suggestion",
    "version": "0.1.0",
    "name": "GetListSuggetion",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Contact Keyword</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"keyword\": \"ban\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>List Suggestion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         country_code: 84,\n         category_id: [\n             \"5dafd01513818c28e0916318\"\n         ],\n         total_view: 0,\n         parent_id: null,\n         reaction: [ ],\n         _id: \"5db814c65d0a533960ad5654\",\n         create_uid: \"5d679819325ab70ab0157ce5\",\n         create_date: \"2019-10-29T10:14:41.057Z\",\n         write_uid: \"5d679819325ab70ab0157ce5\",\n         write_date: \"2019-10-29T10:14:41.057Z\",\n         company_id: \"ROOT\",\n         status: true,\n         delete_id: null,\n         tel: \"437912686\",\n         hotline: \"\",\n         email: \"\",\n         website: \"www.hanoi.gov.vn\",\n         address1: \"Số 159 Tô Hiệu, Phường Nghĩa Đô, Quận Cầu Giấy, Thành phố Hà Nội\",\n         address: \"\",\n         company_name: \"BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI\",\n         display_name: \"BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI\",\n         founded_year: null,\n         legal_representative: \"\",\n         company_type: \"DNĐP\",\n         tax_code: \"\",\n         bank_account: \"\",\n         bank_name: \"\",\n         bank_branch: \"\",\n         description: \"\",\n         search: \"BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI ban quan ly dau tu va xay dung khu do thi moi ha noi BAN QUẢN LÝ ĐẦU TƯ VÀ XÂY DỰNG KHU ĐÔ THỊ MỚI HÀ NỘI ban quan ly dau tu va xay dung khu do thi moi ha noi\",\n         points: {\n             type: \"Point\",\n             coordinates: [\n                 0,\n                 0\n             ]\n         },\n         icon: \"\",\n         logo: \"\",\n         code: \"IV.0053\",\n         __v: 0,\n         rating: [ ],\n         rating_avg: 0\n     },\n     {...},\n     {...},\n     {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "post",
    "url": "/contact/rating-company",
    "title": "Rating Company",
    "name": "Rating",
    "group": "Contact",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>User Rating ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Rel ID Rating.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating Points.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>Company Rating Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9c3342cc1f7b3f4c8e79dd\"),\n     \"rel_id\" : ObjectId(\"5db814cb5d0a533960ad5d4e\"),\n     \"rating\" : [{rating_avg: \"4.5\"}],\n     \"comment\" : \"Hay qua\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "checkCompany",
            "description": "<p>The <code>checkCompany</code> of the company was null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "comment",
            "description": "<p>&amp;rating The <code>comment or rating</code> of the company was null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Connection",
            "description": "<p>The <code>connection</code> of the server was interrupted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Không tìm thấy công ty\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Thiếu thông tin\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n  \"message\": \"Server lỗi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/map/detect-district",
    "title": "Detect District",
    "name": "DectDistrict",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Province ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "center",
            "description": "<p>Center Point Of Bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": 5dc0cfc6bf871b3a3c6296bd,\n  \"center\": 10.742838817797,106.65411282437982\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "district",
            "description": "<p>District ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": \"5dc0d057ade2533578818fa9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/detect-province",
    "title": "Detect Province",
    "name": "DectProvince",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "center",
            "description": "<p>Center Point Of Bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"center\": 10.74302064653004,106.65268857139291\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "province",
            "description": "<p>Province ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": \"5dc0cfc6bf871b3a3c6296bd\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/detect-district",
    "title": "Detect Ward",
    "name": "DectWard",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>District ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "center",
            "description": "<p>Center Point Of Bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": 5dc0d057ade2533578818fa9,\n  \"center\": 106.65305737513246,10.742136536227594,106.65508378404321,10.743413290811999\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "ward",
            "description": "<p>Ward ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": [\n        \"792004\",\n        \"792005\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/get_by_address_id",
    "title": "Get Address By ID",
    "name": "Get_Address_By_ID",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "address_id",
            "description": "<p>Address ID Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Product Address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Address Code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"address_id\": 5e2179a416b70e34ec8fbedf,\n  \"limit\": 500,\n  \"code\": \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listProduct",
            "description": "<p>List Product</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listPolygonInside",
            "description": "<p>List Polygon Inside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"address\": [\n        {\n            \"_id\": \"5e2179a416b70e34ec8fbedf\",\n            \"company_id\": \"ROOT\",\n            \"status\": true,\n            \"reaction\": [],\n            \"polygon_id\": [\n                \"5dc100149bae9d046cfc645e\"\n            ],\n            \"address_name\": \"Thành phố Hồ Chí Minh\",\n            \"type\": \"C\",\n            \"parent_id\": null,\n            \"points\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    106.704809484,\n                    10.735237004\n                ]\n            },\n            \"code\": \"79\",\n            \"create_uid\": \"5d9c3342cc1f7b3f4c8e79dd\",\n            \"__v\": 0,\n            \"polygon\": [\n                {\n                    \"_id\": \"5dc100149bae9d046cfc645e\",\n                    \"create_uid\": \"5d679819325ab70ab0157ce5\",\n                    \"create_date\": \"2019-11-05T04:49:57.892Z\",\n                    \"write_uid\": \"5d679819325ab70ab0157ce5\",\n                    \"write_date\": \"2019-11-05T04:49:57.892Z\",\n                    \"company_id\": \"ROOT\",\n                    \"status\": true,\n                    \"delete_id\": null,\n                    \"rel_id\": \"5dc0cfc6bf871b3a3c6296bd\",\n                    \"code\": \"79\",\n                    \"collection_name\": \"res_province\",\n                    \"__v\": 0,\n                    \"polygons\": {\n                        \"type\": \"Polygon\",\n                        \"coordinates\": [\n                            [\n                                [\n                                    106.45614978800008,\n                                    11.160309933000034\n                                ],\n                                [...],\n                                [...]\n                            ]\n                        ]\n                    }\n                }\n            ]\n        }\n    ],\n    \"ListProduct\": [],\n    \"listPolygonInside\": [\n        {\n            \"_id\": \"5dc0d055ade2533578818bbb\",\n            \"code\": \"7901\",\n            \"parent_id\": \"5e2179a416b70e34ec8fbedf\",\n            \"polygon\": {\n                \"polygons\": {\n                    \"type\": \"Polygon\",\n                    \"coordinates\": [\n                        [\n                            [\n                                106.52880870100009,\n                                10.84750434400008\n                            ],\n                            [...],\n                            [...]\n                        ]\n                    ]\n                }\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"fail to connect to server! :(( \"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/filter_agency",
    "title": "Get Agency",
    "name": "Get_Agency",
    "group": "Map",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Oject",
            "optional": false,
            "field": "filterAgency",
            "description": "<p>Filter Agency</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": [\n        {\n            \"_id\": \"5dba390006d6a109b15d60ef\",\n            \"create_uid\": \"5dbb9d3b65bb02ebb0ec7fb3\",\n            \"create_date\": \"2019-10-25T07:48:22.046Z\",\n            \"write_uid\": \"5d679819325ab70ab0157ce5\",\n            \"write_date\": \"2019-10-25T07:48:22.046Z\",\n            \"company_id\": \"ROOT\",\n            \"status\": true,\n            \"delete_id\": null,\n            \"working_area\": \"5dc0d057ade2533578818fab\",\n            \"description\": \"\",\n            \"sequence\": 0,\n            \"icon\": \"\",\n            \"logo\": \"\",\n            \"keyword\": \"\",\n            \"points\": null,\n            \"code\": \"DL10001\",\n            \"name\": \"Đại lý cấp 1 TPHCM (Quận 9)\",\n            \"category_id\": \"5dafd01513818c28e0916316\",\n            \"partner_id\": \"5db2abddd8ee0717dc269a1c\",\n            \"__v\": 0,\n            \"reaction\": [],\n            \"company_name\": \"Nguyễn Thái Bảo\",\n            \"display_name\": \"Nguyễn Thái Bảo\",\n            \"address\": \"216 Nguyễn Hoàng\",\n            \"address1\": \"216 Nguyễn Hoàng\",\n            \"type\": \"APPROVED\",\n            \"res_district\": {\n                \"_id\": \"5dc0d057ade2533578818fab\",\n                \"create_uid\": \"5d679819325ab70ab0157ce5\",\n                \"create_date\": \"2020-01-16T09:03:10.423Z\",\n                \"write_uid\": \"5d679819325ab70ab0157ce5\",\n                \"write_date\": \"2019-11-05T01:28:42.327Z\",\n                \"company_id\": \"ROOT\",\n                \"status\": true,\n                \"delete_id\": null,\n                \"reaction\": [],\n                \"code\": \"7921\",\n                \"main_code\": \"21\",\n                \"name\": \"Quận 9\",\n                \"type\": \"Quận\",\n                \"province_id\": \"5dc0cfc6bf871b3a3c6296bd\",\n                \"points\": {\n                    \"type\": \"Point\",\n                    \"coordinates\": [\n                        106.822899234,\n                        10.8232983009\n                    ]\n                },\n                \"__v\": 0\n            },\n            \"res_province\": {\n                \"_id\": \"5dc0cfc6bf871b3a3c6296bd\",\n                \"create_uid\": \"5d679819325ab70ab0157ce5\",\n                \"create_date\": \"2019-11-05T01:26:10.350Z\",\n                \"write_uid\": \"5d679819325ab70ab0157ce5\",\n                \"write_date\": \"2019-11-05T01:26:10.350Z\",\n                \"company_id\": \"ROOT\",\n                \"status\": true,\n                \"delete_id\": null,\n                \"reaction\": [],\n                \"country_id\": \"243\",\n                \"code\": \"79\",\n                \"name\": \"Thành phố Hồ Chí Minh\",\n                \"type\": \"Thành phố\",\n                \"__v\": 0,\n                \"points\": {\n                    \"type\": \"Point\",\n                    \"coordinates\": [\n                        106.704809484,\n                        10.735237004\n                    ]\n                }\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/full-location",
    "title": "Get Full Location",
    "name": "Get_Full_Location",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Address ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"code\": ,\n  \"id\": 5dc0d057ade2533578818f95\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Oject",
            "optional": false,
            "field": "getFullLocation",
            "description": "<p>Full Location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": true,\n    \"data\": [\n        {\n            \"company_id\": \"ROOT\",\n            \"status\": true,\n            \"reaction\": [],\n            \"polygon_id\": [\n                \"5dc100149bae9d046cfc645e\"\n            ],\n            \"_id\": \"5e2179a416b70e34ec8fbedf\",\n            \"address_name\": \"Thành phố Hồ Chí Minh\",\n            \"type\": \"C\",\n            \"parent_id\": null,\n            \"points\": {\n                \"type\": \"Point\",\n                \"coordinates\": [\n                    106.704809484,\n                    10.735237004\n                ]\n            },\n            \"code\": \"79\",\n            \"create_uid\": \"5d9c3342cc1f7b3f4c8e79dd\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/get_list_suggestion",
    "title": "Get List Suggestion",
    "name": "Get_List_Suggestion",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword Suggestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Suggestion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"keyword\": s,\n  \"limit\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "ward",
            "description": "<p>Ward ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n    {\n        \"name\": \"project\",\n        \"status\": true,\n        \"rel_id\": \"5db80d0244ab3a16f4216081\",\n        \"weight\": 0.5,\n        \"refPath\": \"project\",\n        \"ward_id\": \"5dc237b7d508de3c4c58981f\",\n        \"title\": \"Ehome S\",\n        \"sub_title\": \"Phường Phú Hữu Quận 9 Thành phố Hồ Chí Minh \",\n        \"search\": \"ehome s ehome s phường phú hữu quận 9 thành phố hồ chí minh  phuong phu huu quan 9 thanh pho ho chi minh\",\n        \"_id\": \"5dfc86de3f2b693a94a83965\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5e2179a516b70e34ec8fbf00\",\n        \"weight\": 1,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Tỉnh Lạng Sơn\",\n        \"sub_title\": \" \",\n        \"search\": \"tỉnh lạng sơn tinh lang son\",\n        \"_id\": \"5e4c996aa977954014701016\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5e2179a616b70e34ec8fbf14\",\n        \"weight\": 1,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Tỉnh Sóc Trăng\",\n        \"sub_title\": \" \",\n        \"search\": \"tỉnh sóc trăng tinh soc trang\",\n        \"_id\": \"5e4c996aa97795401470102a\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5e2179a516b70e34ec8fbf0b\",\n        \"weight\": 1,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Tỉnh Sơn La\",\n        \"sub_title\": \" \",\n        \"search\": \"tỉnh sơn la tinh son la\",\n        \"_id\": \"5e4c996aa977954014701021\"\n    },\n    {\n        \"name\": \"project\",\n        \"status\": true,\n        \"rel_id\": \"5e450e6a44a1629b59d305f0\",\n        \"weight\": 0.5,\n        \"refPath\": \"project\",\n        \"ward_id\": \"5dc237b6d508de3c4c5897d5\",\n        \"title\": \"Chung cư Ehome 4 Bắc Sài Gòn\",\n        \"sub_title\": \"Phường Vĩnh Phú Thị xã Thuận An Tỉnh Bình Dương\",\n        \"search\": \"Chung cư Ehome 4 Bắc Sài Gòn chung cu ehome 4 bac sai gon\",\n        \"_id\": \"5e450eb644a1629b59d30a14\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818b9f\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Bắc Sơn\",\n        \"sub_title\": \"Tỉnh Lạng Sơn \",\n        \"search\": \"huyện bắc sơn huyen bac son\",\n        \"_id\": \"5e4c9966a9779540146fe18c\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818b87\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Anh Sơn\",\n        \"sub_title\": \"Tỉnh Nghệ An \",\n        \"search\": \"huyện anh sơn huyen anh son\",\n        \"_id\": \"5e4c9966a9779540146fe180\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818bc7\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Bình Sơn\",\n        \"sub_title\": \"Tỉnh Quảng Ngãi \",\n        \"search\": \"huyện bình sơn huyen binh son\",\n        \"_id\": \"5e4c9966a9779540146fe1a0\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818c61\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Đắk Song\",\n        \"sub_title\": \"Tỉnh Đắk Nông \",\n        \"search\": \"huyện đắk song huyen dak song\",\n        \"_id\": \"5e4c9966a9779540146fe1ed\"\n    },\n    {\n        \"name\": \"res_address\",\n        \"status\": true,\n        \"rel_id\": \"5dc0d055ade2533578818c33\",\n        \"weight\": 0.5,\n        \"refPath\": \"res_address_new\",\n        \"title\": \"Huyện Chư Sê\",\n        \"sub_title\": \"Tỉnh Gia Lai \",\n        \"search\": \"huyện chư sê huyen chu se\",\n        \"_id\": \"5e4c9966a9779540146fe1d6\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/polygon_outside",
    "title": "Get Polyson Outside",
    "name": "Get_Polygon_Outside",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bound",
            "description": "<p>Bound Bound Of Map.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Items.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "current_address_id",
            "description": "<p>Current Address ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"bound\": [[105.35166738031913,10.029879599733322],[107.4267101049285,11.337500989804807]],\n  \"limit\": 63,\n  \"current_address_id\": 5e2179a416b70e34ec8fbedf\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listPolygonOutside",
            "description": "<p>List Polygon Outside</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n    {\n        \"_id\": \"5e2179a416b70e34ec8fbedd\",\n        \"address_name\": \"Thành phố Cần Thơ\",\n        \"type\": \"C\",\n        \"polygon\": [\n            {\n                \"_id\": \"5dc100149bae9d046cfc645c\",\n                \"polygons\": {\n                    \"type\": \"Polygon\",\n                    \"coordinates\": [\n                        [\n                            [\n                                105.49543762200005,\n                                10.32534885400005\n                            ],\n                            [...],\n                            [...]\n                        ]\n                    ]\n                }\n            }\n        ]\n    }\n    {...},\n    {...}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/map/product_in_bound",
    "title": "Get Product In Bound",
    "name": "ProductInBound",
    "group": "Map",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit Product In Bound.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number Of Page</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bound",
            "description": "<p>Bound of Map.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": "<p>Use In Future.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>Filter Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "totalFlag",
            "description": "<p>Total Flag.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"limit\": 500,\n  \"page\": 1,   \n  \"bound\": [[106.17609244298436,10.453111978944845],[107.21361380528904,11.106725985230485]],\n  \"address_id\": 5e2179a416b70e34ec8fbedf,\n  \"project\": {%22_id%22:1,%22name%22:1,%22points%22:1,%22polygons%22:1,%22a_value%22:1,%22a_value_unit_id%22:1,\n             %22ward_id%22:1,%22land_area%22:1,%22land_area_unit_id%22:1,%22area_unit_id%22:1,%22area%22:1,%22length%22:1,\n             %22length_unit_id%22:1,%22width_unit_id%22:1,%22width%22:1,%22bathroom%22:1,%22image%22:1,%22sub_image%22:1,\n             %22bedroom%22:1,%22type_id%22:1,%22direction%22:1,%22page_number%22:1,%22plot_number%22:1,%22category_id%22:1,\n             %22product_type._id%22:1,%22product_type.type_name%22:1,%22bedroom_unit_id%22:1,%22bathroom_unit_id%22:1,\n             %22floor_unit_id%22:1,%22product_type.marker_url%22:1,%22product_type.marker_hover_url%22:1,\n             %22product_type.color_code%22:1,%22sale_price%22:1,%22sale_price_unit_id%22:1,%22sale_price_value%22:1,\n             %22number_of_sheet%22:1,%22number_of_parcel%22:1,%22number_of_floor%22:1,%22number_of_floor_unit_id%22:1,\n             %22product_category.category_name%22:1,%22product_category.code%22:1},\n  \"filter\":  {%22type%22:[%225d6e56c88e18e6eaf5076069%22,%225d6e570e65b46f56a7f71a78%22,%225d6e572125130a5ca6726e59%22,\n             %225dd5e40cd59979b3b848b5c6%22],%22category%22:[%225db2c448f835f22804d62d33%22,%225db2c448f835f22804d62d34%22,\n             %225db2c448f835f22804d62d36%22,%225db2c448f835f22804d62d38%22,%225db2c448f835f22804d62d39%22,\n             %225db2c448f835f22804d62d3a%22,%225db2c448f835f22804d62d3b%22,%225db2c448f835f22804d62d3c%22,\n             %225db2c448f835f22804d62d3d%22,%225db2c448f835f22804d62d3e%22,%225db2c449f835f22804d62d3f%22,\n             %225db2c449f835f22804d62d40%22,%225db2c449f835f22804d62d41%22,%225dfaf87874ef956220a61749%22,\n             %225e048582180d9a4f4c90301a%22,%225e04859a180d9a4f4c90301c%22,%225e0485ea180d9a4f4c90301e%22,\n             %225e048620180d9a4f4c903020%22,%225e048638180d9a4f4c903022%22,%225e04864e180d9a4f4c903024%22,\n             %225e048662180d9a4f4c903026%22,%225e048673180d9a4f4c903028%22,%225e048686180d9a4f4c90302a%22,\n             %225e04869f180d9a4f4c90302c%22,%225e0486b2180d9a4f4c90302e%22,%225e0486c5180d9a4f4c903030%22,\n             %225e0486db180d9a4f4c903032%22,%225e0486ea180d9a4f4c903034%22,%225e0486fb180d9a4f4c903036%22,\n             %225e04870c180d9a4f4c903038%22,%225e04871b180d9a4f4c90303a%22,%225e04872f180d9a4f4c90303c%22,\n             %225e04873d180d9a4f4c90303e%22],%22bedroom%22:%220%22,%22price%22:{},%22advance%22:{}},     \n  \"totalFlag\": null              \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "listProduct",
            "description": "<p>List Of Product In Bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n [\n     {\n         \"_id\": \"5de4ec212f894f8560078f54\",\n         \"polygons\": {\n             \"type\": \"Polygon\",\n             \"coordinates\": [\n                 [\n                     [\n                         106.690254102,\n                         10.734219981\n                     ],\n                     [\n                         106.690208396,\n                         10.7342207520001\n                     ],\n                     [\n                         106.690204454,\n                         10.734039957\n                     ],\n                     [\n                         106.690250161,\n                         10.734039276\n                     ],\n                     [\n                         106.690254102,\n                         10.734219981\n                     ]\n                 ]\n             ]\n         },\n         \"points\": [\n             106.690229276361,\n             10.7341299918473\n         ],\n         \"code\": \"790103R80.485\",\n         \"ward_id\": \"5dc237d1d508de3c4c58bb71\",\n         \"direction\": \"Hướng Tây\",\n         \"image\": \"https://api.asset.vn\\\\product\\\\5de4ec212f894f8560078f54\\\\5de4ec212f894f8560078f54-image-hinh 1.PNG-1575283745674.png\",\n         \"name\": \"Nhà riêng lẻ Bình Chánh\",\n         \"category_id\": \"5db2c448f835f22804d62d3c\",\n         \"sale_price\": 7,\n         \"width\": 5,\n         \"length\": 16,\n         \"land_area\": 80,\n         \"type_id\": \"5d6e572125130a5ca6726e59\",\n         \"a_value_rate\": 7000,\n         \"feature\": \"Mặt tiền\",\n         \"bedroom\": 3,\n         \"bathroom\": 3,\n         \"number_of_floor\": 3,\n         \"number_of_sheet\": 80,\n         \"number_of_parcel\": \"485\",\n         \"search\": \"nhà riêng nha rieng xã bình hưng huyện bình chánh thành phố hồ chí minh  xa binh hung huyen binh chanh thanh pho ho chi minh\"\n     },\n     {\n         \"_id\": \"5def3fdeb4269b3324197bea\",\n         \"polygons\": {\n             \"type\": \"Polygon\",\n             \"coordinates\": [\n                 [\n                     [\n                         106.831091577,\n                         10.841537504\n                     ],\n                     [\n                         106.831162754,\n                         10.841444532\n                     ],\n                     [\n                         106.831190638,\n                         10.841467929\n                     ],\n                     [\n                         106.831119506,\n                         10.8415608550001\n                     ],\n                     [\n                         106.831091577,\n                         10.841537504\n                     ]\n                 ]\n             ]\n         },\n         \"points\": [\n             106.831141116207,\n             10.8415027055864\n         ],\n         \"code\": \"792104R60.537\",\n         \"ward_id\": \"5dc237b7d508de3c4c589809\",\n         \"direction\": \"Hướng Bắc Nam\",\n         \"image\": \"https://api.asset.vn\\\\product\\\\5def3fdeb4269b3324197bea\\\\5def3fdeb4269b3324197bea-image-z1652736546435_c520282427c3aad27bbec0f0779ecb7f.jpg-1575960542391.jpeg\",\n         \"name\": \"Nhà phố Quận 9 Phường Long Thạnh Mỹ\",\n         \"category_id\": \"5db2c448f835f22804d62d3c\",\n         \"sale_price\": 4,\n         \"width\": 5,\n         \"length\": 10,\n         \"land_area\": 51.61,\n         \"type_id\": \"5d6e56c88e18e6eaf5076069\",\n         \"a_value_rate\": 4000,\n         \"feature\": \"Hẻm\",\n         \"bedroom\": 3,\n         \"bathroom\": 4,\n         \"number_of_floor\": 2,\n         \"number_of_sheet\": 60,\n         \"number_of_parcel\": \"537\",\n         \"search\": \"nhà riêng nha rieng phường long thạnh mỹ quận 9 thành phố hồ chí minh  phuong long thanh my quan 9 thanh pho ho chi minh\"\n     },\n     {\n         \"_id\": \"5def4d3fb4269b3324197bf4\",\n         \"polygons\": {\n             \"type\": \"Polygon\",\n             \"coordinates\": [\n                 [\n                     [\n                         106.704226,\n                         10.740759\n                     ]\n                 ]\n             ]\n         },\n         \"points\": [\n             106.704226,\n             10.740759\n         ],\n         \"code\": \"791908R0000.0000\",\n         \"ward_id\": \"5dc237ccd508de3c4c58b46a\",\n         \"direction\": \"Hướng Bắc\",\n         \"image\": \"https://api.asset.vn\\\\product\\\\5def4d3fb4269b3324197bf4\\\\5def4d3fb4269b3324197bf4-image-78991114_1460328227449668_3998705790566268928_o.jpg-1575963967940.jpeg\",\n         \"name\": \"Nhà cho thuê tại Q7 giá rẻ\",\n         \"category_id\": \"5db2c448f835f22804d62d33\",\n         \"sale_price\": 4,\n         \"width\": null,\n         \"length\": null,\n         \"land_area\": 15,\n         \"type_id\": \"5d6e570e65b46f56a7f71a78\",\n         \"a_value_rate\": 4,\n         \"feature\": \"Mặt tiền\",\n         \"bedroom\": 1,\n         \"bathroom\": 1,\n         \"search\": \"căn hộ chung cư can ho chung cu phường tân quy quận 7 thành phố hồ chí minh  phuong tan quy quan 7 thanh pho ho chi minh\"\n     }\n ]\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The <code>server</code> was error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 5XX Internal Server Error\n{\n  \"status\": \"false\",\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./map.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/planning/category",
    "title": "Category",
    "name": "planningCategory",
    "group": "Planning",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "planningController.category",
            "description": "<p>() List of planning category and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    _id: \"NNP\",\n    create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    create_date: \"2019-08-07T10:56:35.450Z\",\n    write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    write_date: \"2019-08-07T10:56:35.450Z\",\n    company_id: \"ROOT\",\n    status: false,\n    delete_id: \"\",\n    name: \"Đất nông nghiệp\",\n    forecolor: \"#FFFF64\",\n    backcolor: \"#FFFF64\",\n    sequence: \"1.0\",\n    url_name: \"Dat-nong-nghiep\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./planning.js",
    "groupTitle": "Planning"
  },
  {
    "type": "get",
    "url": "/planning/detail",
    "title": "Detail",
    "name": "planningDetail",
    "group": "Planning",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "planningController.Detail",
            "description": "<p>(planning_id) Planning detail</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    _id: \"VN79.0000001\",\n    create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    create_date: \"2019-08-07 23:14:22.71\",\n    write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n    write_date: \"2019-08-09 14:41:05.070491\",\n    company_id: \"ROOT\",\n    status: \"0\",\n    delete_id: \"\",\n    name: \"QĐ số 2314/QĐ-UB ngày 15/08/2014 về Công bố Quy hoạch sử dụng đất tỉnh Bà Rịa - Vũng Tàu\",\n    polygons: {\n        type: \"Polygon\",\n        coordinates: [\n            []\n        ]\n    },\n    sequence: \"2.0\",\n    url_name: \"QD-so-2314/QD-UB-ngay-15/08/2014-ve-Cong-bo-Quy-hoach-su-dung-dat-tinh-Ba-Ria---Vung-Tau\",\n    description: \"\",\n    lot: \"III-15\",\n    area: \"124.0\",\n    floors: \" \",\n    footprint_ratio: \" \",\n    far: \" - \",\n    remainder: \" \",\n    people: \"0.0\",\n    category_id: \"RDD\",\n    points: {\n        type: \"Point\",\n        coordinates: [\n            106.5313341543828,\n            8.6299515341168\n        ]\n    },\n    category: {\n        _id: \"RDD\",\n        create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        create_date: \"2019-08-07 17:56:36.279\",\n        write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        write_date: \"2019-08-07 17:56:36.279\",\n        company_id: \"ROOT\",\n        status: \"0\",\n        delete_id: \"\",\n        name: \"Đất rừng đặc dụng\",\n        forecolor: \"#6EFF64\",\n        backcolor: \"#6EFF64\",\n        sequence: \"1.0\",\n        url_name: \"Dat-nong-nghiep\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "planning_id",
            "description": "<p>Planning ID. Example param: {VN79.0000001}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlanningIDEmptyError",
            "description": "<p>PlanningID was empty.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./planning.js",
    "groupTitle": "Planning"
  },
  {
    "type": "get",
    "url": "/planning/find",
    "title": "Find",
    "name": "planningFind",
    "group": "Planning",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "listPlanning",
            "description": "<p>List of planning and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    _id: \"VN79.0003547\",\n    name: \"QĐ số 2314/QĐ-UB ngày 15/08/2014 về Công bố Quy hoạch sử dụng đất tỉnh Bà Rịa - Vũng Tàu\",\n    polygons: {\n        type: \"Polygon\",\n        coordinates: [\n            [\n                [\n                    107.047885475,\n                    10.47063086800006\n                ],\n                [\n                    107.0480444670001,\n                    10.47089123700005\n                ],\n                [\n                    107.0486161960001,\n                    10.47182787300005\n                ],\n                [\n                    107.0486162130001,\n                    10.47182790000005\n                ],\n                [\n                    107.0486161040001,\n                    10.47182787400004\n                ],\n                [\n                    107.047885475,\n                    10.47063086800006\n                ]\n            ]\n        ]\n    },\n    category: {\n        name: \"Đất sông, ngòi, kênh, rạch, suối\",\n        backcolor: \"#A0FFFF\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "addressID",
            "description": "<p>ID of address. Example param {14}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "bound",
            "description": "<p>Bound. Example param {[[107.20381434855153,10.50058748552199],[107.09472354349782,10.464971469809527]]}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit. Example param {1000}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Project.",
            "description": "<p>Example param {&quot;_id&quot;:1,&quot;polygons&quot;:1,&quot;name&quot;:1,&quot;category.name&quot;:1,&quot;category.backcolor&quot;:1}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./planning.js",
    "groupTitle": "Planning"
  },
  {
    "type": "get",
    "url": "/post/get_list",
    "title": "Get All Post",
    "name": "postGetList",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_post",
            "description": "<p>List of post and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"99500440-9fa7-4c98-9947-ba0fce369ed9\",\n create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n create_date: \"2019-06-20T08:17:33.450Z\",\n write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n write_date: \"2019-07-26T02:06:26.855Z\",\n company_id: \"ROOT\",\n status: false,\n delete_id: \"\",\n name: \"Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?\",\n description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n url_id: \"77\",\n url_name: \"Khai-Niem-Khong-Gian-Song-&-Dien-Tich-Su-Dung-La-Gi?\",\n sequence: \"0.0\",\n photo: \"7bd988bd-5c11-4586-ace6-c1e8d8be18f3\",\n receipt_no: 1,\n receipt_date: \"2019-06-20T02:06:26.000Z\",\n keyword: \"không gian sống, diện tích sử dụng\",\n publish: true,\n publish_date: \"2019-06-22T00:50:49.217Z\",\n short_description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/get_by_id",
    "title": "Get post by ID",
    "name": "postGetPostByID",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "post[]",
            "description": "<p>Get list of post by id and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"99500440-9fa7-4c98-9947-ba0fce369ed9\",\n create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n create_date: \"2019-06-20 15:17:33.45\",\n write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n write_date: \"2019-07-26 09:06:26.855\",\n company_id: \"ROOT\",\n status: \"0\",\n delete_id: \"\",\n name: \"Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?\",\n description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n url_id: \"77\",\n url_name: \"Khai-Niem-Khong-Gian-Song-&-Dien-Tich-Su-Dung-La-Gi?\",\n sequence: \"0.0\",\n photo: \"7bd988bd-5c11-4586-ace6-c1e8d8be18f3\",\n receipt_no: \"1\",\n receipt_date: \"2019-06-20 09:06:26.0\",\n keyword: \"không gian sống, diện tích sử dụng\",\n publish: \"1\",\n publish_date: \"2019-06-22 07:50:49.217\",\n short_description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n document: \"<p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><span style=\"font-weight: 700;\">Không gian sống là một khái niệm mới xuất hiện trong thời gian gần đây, khi mà thiết kế ngày càng được chú trọng hơn. Còn diện tích sử dụng thì nghe có vẻ quen thuộc nhưng không phải ai cũng biết nhiều về nó</span>.</p><div class=\"wp-block-image\" style=\"max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><div style=\"text-align: center;\"><img src=\"document?id=0773e67e-7bb2-42ff-8019-e9ca73d59c13\" style=\"width: 600px;\"></div><figure class=\"aligncenter is-resized\" style=\"display: table; margin: 20px auto; max-width: 100%; height: auto; text-align: center;\"><br></figure></div><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"></p><h2 style=\"font-family: Tahoma, Verdana, Segoe, sans-serif; font-weight: 700; line-height: 1.3; color: rgb(45, 45, 45); margin-top: 20px; font-size: 30px;\"><span class=\"ez-toc-section\" id=\"Gioi_thieu_khai_niem_Dien_tich_su_dung\">Giới thiệu khái niệm Diện tích sử dụng</span></h2><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án, được tính bằng đơn vị mét vuông (m2).</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Loại diện tích này cũng được tính khác nhau tùy theo các loại Bất động sản và quan điểm tính.</p><ul style=\"margin-bottom: 17px; font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><li style=\"\"><font color=\"#222222\">Với&nbsp;</font><font style=\"\"><span style=\"transition-duration: 0.07s; transition-property: all;\">nhà ở riêng lẻ</span></font><font color=\"#222222\">: là diện tích sử dụng thường được tính bằng cách cộng toàn bộ diện tích các sàn, sân trước, sân sau,… Ví dụ một nhà 3 tầng và không có sân, mỗi tầng 40m2 thì diện tích sử dụng là 120m2.</font></li><li style=\"\"><font color=\"#222222\">Với&nbsp;</font><font style=\"\"><span style=\"transition-duration: 0.07s; transition-property: all;\">căn hộ chung cư</span></font><font color=\"#222222\">&nbsp;thì được tách ra 02 loại diện tích là diện tích tim tường và diện tích thông thủy.</font><ul style=\"color: rgb(34, 34, 34); margin-bottom: 17px;\"><li>Diện tích tim tường: được tính từ tim tường bao, và các chủ đầu tư thường dùng diện tích này để tính giá bán cho khách hàng.</li><li>Diện tích thông thủy (hay diện tích lọt lòng): diện tích này là diện tích không tính tường bao, đây là diện tích được ghi trong giấy chứng nhận quyền sở hữu nhà ở. Thường diện tích này nhỏ hơn diện tích tim tường khoảng 5%.</li></ul></li></ul><div class=\"wp-block-image\" style=\"text-align: center; max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><img src=\"document?id=e041ffb7-654a-45a2-9340-90e51a736ce5\" style=\"width: 50%;\"><br></div><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><span style=\"font-weight: 700;\">Lưu ý</span>: Diện tích sử dụng này chính là diện tích bán được (NSA) và nó khác với diện tích xây dựng theo cách tính của nhà thầu.</p><h2 style=\"font-family: Tahoma, Verdana, Segoe, sans-serif; font-weight: 700; line-height: 1.3; color: rgb(45, 45, 45); margin-top: 20px; font-size: 30px;\"><span class=\"ez-toc-section\" id=\"Khong_gian_song_la_gi\">Không gian sống là gì?</span></h2><div class=\"wp-block-image\" style=\"max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><div style=\"text-align: center;\"><img src=\"document?id=16ddb9b9-1b03-40f6-b032-4c5aaae67622\" style=\"width: 540px;\"></div><figure class=\"aligncenter\" style=\"display: table; margin: 20px auto; max-width: 100%; height: auto; text-align: center;\"><br></figure></div><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Không gian sống là đề cập đến cảm giác về không gian và chức năng. Thay vì diện tích mang tính vật lý, không gian sống được thể hiện bằng số lượng các phòng chức năng như số phòng ngủ, số WC, ban công, phòng khách, bếp, lô gia, …</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Các phòng chức năng này chỉ cần một diện tích vừa đủ, không cần rộng quá, vì một số loại phòng mà rộng quá đôi khi có cảm giác không tốt bằng có diện tích vừa đủ.</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Nhất là phòng ngủ, chỉ cần rộng khoảng 9 – 16m2 là vừa, to hơn sẽ cảm thấy trống trải.</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Không gian sống không chỉ có diện tích vừa đủ đối với các phòng chức năng, mà còn có các tính chất khác.</p><p style=\"margin-right: 0px; margin-bottom: 17px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Như bếp thì cần thông khí, phòng khách, phòng ngủ thì cần thông thoáng…, đó là chưa kể đến việc bố trí các vật dụng, bố trí vị trí các phòng chức năng để thuận tiện trong sinh hoạt.</p><div class=\"wp-block-image\" style=\"max-width: 100%; margin-bottom: 1em; margin-left: 0px; margin-right: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\"><div style=\"text-align: center;\"><img src=\"document?id=9cf09885-8f31-4e29-b56b-464dd26358f7\" style=\"width: 669px;\"></div></div><p style=\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; color: rgb(34, 34, 34); font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 17px;\">Với nhiều phòng chức năng, và mỗi phòng chức năng có một yêu cầu riêng, thế nên để có một không gian sống tốt thì không nhất thiết phải có diện tích sử dụng lớn, mà cần cách bố trí các phòng chức năng phù hợp ở vị trí phù hợp. Và điều này gây rất nhiều cơn đau đầu cho các nhóm làm nhiệm vụ thiết kế, đặc biệt là căn hộ chung cư.</p> \"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "postID",
            "description": "<p>ID of post. Example param: {99500440-9fa7-4c98-9947-ba0fce369ed9}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostLengthError",
            "description": "<p>Not found. Minimum of <code>1</code> character is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/get_by_category_sequence",
    "title": "Get post by category sequence",
    "name": "postSequence",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_post",
            "description": "<p>List of post and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"1273700a-4e6f-41cf-846c-axdfd3b0abbe\",\n post: {\n        _id: \"99500440-9fa7-4c98-9947-ba0fce369ed9\",\n        create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        create_date: \"2019-06-20 15:17:33.45\",\n        write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        write_date: \"2019-07-26 09:06:26.855\",\n        company_id: \"ROOT\",\n        status: \"0\",\n        delete_id: \"\",\n        name: \"Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?\",\n        description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n        url_id: \"77\",\n        url_name: \"Khai-Niem-Khong-Gian-Song-&-Dien-Tich-Su-Dung-La-Gi?\",\n        sequence: \"0.0\",\n        photo: \"7bd988bd-5c11-4586-ace6-c1e8d8be18f3\",\n        receipt_no: \"1\",\n        receipt_date: \"2019-06-20 09:06:26.0\",\n        keyword: \"không gian sống, diện tích sử dụng\",\n        publish: \"1\",\n        publish_date: \"2019-06-22 07:50:49.217\",\n        short_description: \"Không gian sống là đề cập đến cảm giác về không gian và chức năng. Diện tích sử dụng được hiểu nôm na là toàn bộ diện tích có thể sử dụng được trong một dự án.\",\n        user: {\n                _id: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                create_uid: \"\",\n                create_date: \"2017-09-27 09:44:05.421\",\n                write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                write_date: \"2019-07-27 13:39:22.291668\",\n                company_id: \"ROOT\",\n                status: \"0\",\n                delete_id: \"\",\n                user_name: \"admin\",\n                name: \"Asset\",\n                password: \"7fba729fa18f4662eedda4cff80b47c6\",\n                partner_id: \"5528511e-28e2-410b-8d95-d0e6f77316d7\",\n                signature: \"\",\n                email: \"vang@bluebytez.com\",\n                lang_id: \"76\",\n                gmt_offset: \"-420.0\",\n                date_format: \"DD/MM/YYYY\",\n                time_format: \"HH:MM:SS\",\n                thousands_sep: \".\",\n                decimal_point: \",\",\n                avatar: \"25805c28-36e7-4fdb-a8b5-b1c2c868ad87\",\n                type: \"4.5+\",\n                inactive: \"0\",\n                renew_password_id: \"\",\n                online: \"0\"\n              },\n        type: \"post\"\n      },\n post_category: {\n                 _id: \"cb9e7184-f52a-4acd-80bf-9e5a50689eee\",\n                 create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                 create_date: \"2019-06-20 10:55:53.79\",\n                 write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n                 write_date: \"2019-06-20 10:58:12.192\",\n                 company_id: \"ROOT\",\n                 status: \"0\",\n                 delete_id: \"\",\n                 name: \"Tin tức thời sự\",\n                 sequence: \"1.0\",\n                 url_id: \"21\",\n                 url_name: \"Tin-tuc-thoi-su\",\n                 type: \"POST\",\n                 parent_id: \"\",\n                 keyword: \"\",\n                 publish: \"0\",\n                 description: \"\"\n                }\n },",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Sequence of category. Example param: {1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page. Example param : {1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of post in 1 page. Example param: {10}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SequenceTypeError",
            "description": "<p>Sequence must be a number. Number is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Not a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/product/category",
    "title": "Category",
    "name": "productCategory",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "productController.Category",
            "description": "<p>List of category and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    _id: \"2\",\n    category_name: \"OFFICETEL\"\n    },\n    {\n    _id: \"3\",\n    category_name: \"SHOP HOUSE\"\n    }, \n    {\n    _id: \"4\",\n    category_name: \"NHÀ RIÊNG\"\n    },\n    {\n    _id: \"5\",\n    category_name: \"NHÀ PHỐ LIÊN KẾ\"\n    },  \n    {\n    _id: \"6\",\n    category_name: \"BIỆT THỰ\"\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/search/count_by_keyword",
    "title": "Count by keyword",
    "name": "countByKeyword",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "total_search",
            "description": "<p>Number of post count by keyword</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n total_search: 15\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword use to search {kinh}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/get_post_by_keyword",
    "title": "Get Post By Keyword",
    "name": "getPostByKeyword",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_Post",
            "description": "<p>Get list of post by KeyWord and each element in list is an Object include User Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"2d3a7844-f45b-47c3-92c2-d0303faf7b7e\",\n  create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n  create_date: \"2019-06-28 16:19:21.352\",\n  write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n  write_date: \"2019-07-26 09:20:52.36\",\n  company_id: \"ROOT\",\n  status: \"0\",\n  delete_id: \"\",\n  name: \"Kinh nghiệm đi xem nhà để thuê\",\n  description: \"Sau khi bạn đã tìm được địa điểm mình muốn thuê bước tiếp theo sẽ là xem nhà. Đây là cơ hội để bạn có thể nắm rõ thực tế chi tiết về những gì bạn sẽ thuê\",\n  url_id: \"81\",\n  url_name: \"kinh-nghiem-xem-nha-thue\",\n  sequence: \"0.0\",\n  photo: \"5b4a6a0f-8b9a-41da-bffd-4aa940b94758\",\n  receipt_no: \"4\",\n  receipt_date: \"2019-06-28 09:20:52.0\",\n  keyword: \"xem nhà thuê, xem nhà, thuê nhà\",\n  publish: \"1\",\n  publish_date: \"\",\n  short_description: \"Sau khi bạn đã tìm được địa điểm mình muốn thuê bước tiếp theo sẽ là xem nhà. Đây là cơ hội để bạn có thể nắm rõ thực tế chi tiết về những gì bạn sẽ thuê\",\n  user: {\n         _id: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n         create_uid: \"\",\n         create_date: \"2017-09-27 09:44:05.421\",\n         write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n         write_date: \"2019-07-27 13:39:22.291668\",\n         company_id: \"ROOT\",\n         status: \"0\",\n         delete_id: \"\",\n         user_name: \"admin\",\n         name: \"Asset\",\n         password: \"7fba729fa18f4662eedda4cff80b47c6\",\n         partner_id: \"5528511e-28e2-410b-8d95-d0e6f77316d7\",\n         signature: \"\",\n         email: \"vang@bluebytez.com\",\n         lang_id: \"76\",\n         gmt_offset: \"-420.0\",\n         date_format: \"DD/MM/YYYY\",\n         time_format: \"HH:MM:SS\",\n         thousands_sep: \".\",\n         decimal_point: \",\",\n         avatar: \"25805c28-36e7-4fdb-a8b5-b1c2c868ad87\",\n         type: \"4.5+\",\n         inactive: \"0\",\n         renew_password_id: \"\",\n         online: \"0\"\n        },\n type: \"post\"\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword use to search {kinh}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "KeyWordEmptyError",
            "description": "<p>Keyword was empty. Minimum of <code>1</code> character is required.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/post",
    "title": "Get All Post",
    "name": "searchAllPost",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_post",
            "description": "<p>List of all post and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  _id: \"f907b879-08fa-49e7-ba15-db7f87b2a201\",\n  post: {\n          _id: \"f907b879-08fa-49e7-ba15-db7f87b2a201\",\n          create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n          create_date: \"2019-06-28 15:35:48.702\",\n          write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n          write_date: \"2019-07-26 09:07:01.335\",\n          company_id: \"ROOT\",\n          status: \"0\",\n          delete_id: \"\",\n          name: \"Nguy Cơ Vỡ Bong Bóng Bất Động Sản: Nguyên Nhân Do Đâu?\",\n          description: \"Trên thực tế, những người mua bất động sản cao cấp không mua để ở, mà phần lớn mua nhằm mục đích đầu tư, kiếm lời nhờ sự tăng giá của thị trường bất động sản.\",\n          url_id: \"79\",\n          url_name: \"vo-bong-bong-bds\",\n          sequence: \"0.0\",\n          photo: \"6b18a365-e500-4b6b-a543-1a86cf09dc9b\",\n          receipt_no: \"2\",\n          receipt_date: \"2019-06-28 09:07:01.0\",\n          keyword: \"vỡ bong bóng, bong bóng bđs, vỡ bong bóng bđs, đầu cơ, đầu cơ bđs\",\n          publish: \"1\",\n          publish_date: \"\",\n          short_description: \"Trên thực tế, những người mua bất động sản cao cấp không mua để ở, mà phần lớn mua nhằm mục đích đầu tư, kiếm lời nhờ sự tăng giá của thị trường bất động sản.\"\n        }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/suggestion",
    "title": "Suggestion",
    "name": "searchSuggestion",
    "group": "Search",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "list_string_search",
            "description": "<p>List of suggestion and each element in list is an Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n _id: \"5d4d4f85d292617c98d6bf04\",\n name: \"post\",\n rel_id: \"99500440-9fa7-4c98-9947-ba0fce369ed9\",\n rel_id_name: \"post_99500440-9fa7-4c98-9947-ba0fce369ed9_name\",\n cat: \"9c503085-5f11-4247-934e-a67f4c5b8fd6 158754cd-2fed-4af4-b2ee-ae0c9c786a1e f4299d8e-0ea5-483d-82e4-e9faead12ac5\",\n title: \"Khái Niệm Không Gian Sống & Diện Tích Sử Dụng Là Gì?\",\n search: \"khái niệm không gian sống & diện tích sử dụng là gì?  khai niem khong gian song & dien tich su dung la gi?\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword use to search {kinh}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "KeyWordEmptyError",
            "description": "<p>Keyword was empty. Minimum of <code>1</code> character is required.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./search.js",
    "groupTitle": "Search"
  }
] });
