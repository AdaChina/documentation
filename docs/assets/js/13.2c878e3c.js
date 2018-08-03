(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{156:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"学校管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学校管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 学校管理")]),a("p",[t._v("获取当前学校基本信息。更新学校配置等功能。")]),a("h2",{attrs:{id:"获取当前学校"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取当前学校","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取当前学校")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /school_management/school\n")])])]),a("p",[a("strong",[t._v("响应字段")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("id")]),a("td",[t._v("学校ID")])]),a("tr",[a("td",[t._v("name")]),a("td",[t._v("学校名称")])]),a("tr",[a("td",[t._v("badge_url")]),a("td",[t._v("校徽地址")])]),a("tr",[a("td",[t._v("power_schedule: week_days")]),a("td",[t._v("启用星期日")])]),a("tr",[a("td",[t._v("power_schedule: startup_at")]),a("td",[t._v("开机时间")])]),a("tr",[a("td",[t._v("power_schedule: shutdown_at")]),a("td",[t._v("关机时间")])])])]),a("p",[a("strong",[t._v("响应示例")])]),a("p",[t._v("成功响应:")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Status: 200 OK\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"希望小学"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"badge_url"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"https://image.com/2.png"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"power_schedule"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"week_days"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"startup_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"09:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"shutdown_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"18:00"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"获取年级信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取年级信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取年级信息")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /school_management/school/grades\n")])])]),a("p",[a("strong",[t._v("响应字段")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("id")]),a("td",[t._v("年级ID")])]),a("tr",[a("td",[t._v("name")]),a("td",[t._v("年级名称")])]),a("tr",[a("td",[t._v("code")]),a("td",[t._v("年级代码")])])])]),a("p",[a("strong",[t._v("响应示例")])]),a("p",[t._v("成功响应:")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Status: 200 OK\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("7847")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"六年级"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置校徽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置校徽","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置校徽")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PATCH /school_management/school\n")])])]),a("p",[a("strong",[t._v("请求参数")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("参数类型")]),a("th",[t._v("必填")]),a("th",[t._v("描述")]),a("th",[t._v("示例")])])]),a("tbody",[a("tr",[a("td",[t._v("badge")]),a("td",[t._v("file")]),a("td",[t._v("否")]),a("td",[t._v("校徽")]),a("td",[t._v("badge.png")])])])]),a("p",[a("strong",[t._v("响应字段")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("id")]),a("td",[t._v("学校ID")])]),a("tr",[a("td",[t._v("name")]),a("td",[t._v("学校名称")])]),a("tr",[a("td",[t._v("badge_url")]),a("td",[t._v("校徽地址")])]),a("tr",[a("td",[t._v("power_schedule: week_days")]),a("td",[t._v("启用星期日")])]),a("tr",[a("td",[t._v("power_schedule: startup_at")]),a("td",[t._v("开机时间")])]),a("tr",[a("td",[t._v("power_schedule: shutdown_at")]),a("td",[t._v("关机时间")])])])]),a("p",[a("strong",[t._v("响应示例")])]),a("p",[t._v("成功响应:")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Status: 200 OK\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"希望小学"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"badge_url"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"https://image.com/2.png"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"power_schedule"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"week_days"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"startup_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"09:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"shutdown_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"18:00"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置班牌开关机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置班牌开关机","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置班牌开关机")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PATCH /school_management/school/power_schedule\n")])])]),a("p",[a("strong",[t._v("请求参数")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("参数类型")]),a("th",[t._v("必填")]),a("th",[t._v("描述")]),a("th",[t._v("示例")])])]),a("tbody",[a("tr",[a("td",[t._v("week_days")]),a("td",[t._v("array[integer]")]),a("td",[t._v("是")]),a("td",[t._v("星期日")]),a("td",[t._v("[0,1,2,4,5,6]")])]),a("tr",[a("td",[t._v("startup_at")]),a("td",[t._v("string")]),a("td",[t._v("是")]),a("td",[t._v("开机时间")]),a("td",[t._v("09:15")])]),a("tr",[a("td",[t._v("shutdown_at")]),a("td",[t._v("string")]),a("td",[t._v("是")]),a("td",[t._v("关机时间")]),a("td",[t._v("18:45")])])])]),a("ul",[a("li",[a("code",[t._v("week_days")]),t._v(" 参数中，星期日由"),a("code",[t._v("0")]),t._v("代表, 星期六由"),a("code",[t._v("6")]),t._v("代表，数组中数值不可重复。")]),a("li",[a("code",[t._v("startup_at")]),t._v(", "),a("code",[t._v("shutdown_at")]),t._v(" 参数使用二十四小时制代表。如晚上9点，字符串为"),a("code",[t._v("21:00")]),t._v("。")])]),a("p",[a("strong",[t._v("响应字段")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("id")]),a("td",[t._v("学校ID")])]),a("tr",[a("td",[t._v("name")]),a("td",[t._v("学校名称")])]),a("tr",[a("td",[t._v("badge_url")]),a("td",[t._v("校徽地址")])]),a("tr",[a("td",[t._v("power_schedule: week_days")]),a("td",[t._v("启用星期日")])]),a("tr",[a("td",[t._v("power_schedule: startup_at")]),a("td",[t._v("开机时间")])]),a("tr",[a("td",[t._v("power_schedule: shutdown_at")]),a("td",[t._v("关机时间")])])])]),a("p",[a("strong",[t._v("响应示例")])]),a("p",[t._v("成功响应:")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Status: 200 OK\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"希望小学"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"badge_url"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"https://image.com/2.png"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2018-07-24T14:45:15.000+08:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"power_schedule"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"week_days"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"startup_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"09:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"shutdown_at"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"18:00"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=r.exports}}]);