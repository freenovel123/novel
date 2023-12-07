# 极简阅读

极简阅读是一款去中心化的阅读工具，支持苹果IOS和安卓。\
下载地址：<https://freenovel123.github.io/novel/html/index.html>

## 源制作文档

### 1、源参数说明

| 参数          | 名称        | 参数类型        | 是否必填 | 示例值                                   | 描述              |
| :---------- | :-------- | :---------- | :--- | :------------------------------------ | :-------------- |
| version     | 版本号       | Number      | 是    | 1                                     | 版本更新标记          |
| siteName    | 站点名称      | String      | 是    | 笔趣阁                                   | 站点的名称           |
| baseUrl     | 站点根地址     | String      | 是    | <https://www.biqige.com/>             | url地址的末尾必须以/结尾  |
| author      | 作者        | String      | 否    | 张三                                    | 作者的名称           |
| contact     | 作者联系方式    | String      | 否    | <123@qq.com>                          | 作者联系方式          |
| enable      | 启用状态      | Boolean     | 是    | true                                  | 是否使用该源          |
| header      | 请求头       | JSON        | 否    | `{"Content-Type":"application/json"}` | 请求头             |
| cookies     | 请求Cookies | JSON        | 否    | `{"token":"111222333"}`               | 请求的Cookies      |
| remarks     | 备注信息      | String      | 否    | 这是一个很好的源                              |                 |
| ruleSearch  | 搜索规则      | RuleSearch  | 是    | `{...}`                               | 具体查看1.1搜索规则说明   |
| ruleChapter | 章节列表规则    | RuleChapter | 是    | `{...}`                               | 具体查看1.2章节列表规则说明 |
| ruleContent | 正文规则      | RuleContent | 是    | `{...}`                               | 具体查看1.3正文规则说明   |

### 1.1、搜索规则说明

| 参数         | 名称     | 参数类型   | 是否必填 | 示例值                               | 描述                                                              |
| :--------- | :----- | :----- | :--- | :-------------------------------- | :-------------------------------------------------------------- |
| engine     | 解析引擎   | String | 是    | xpath                             | 取值范围`xpath,jsonpath`                                            |
| request    | 请求信息   | String | 否    | @js: return config;               | 在请求URL之前可以处理一些参数，比如添加请求头，替换请求url等。具体可以查看2.1.1                   |
| response   | 响应处理   | String | 否    | @js: return html;                 | 在请求完成以后，会将请求到的html返回到这里，可以根据需求处理。具体可以查看2.2                      |
| url        | 搜索地址   | String | 是    | <https://www.a.com/search/>       | 站点的搜索地址                                                         |
| method     | 请求方式   | String | 是    | GET                               | 取值范围`GET,POST`                                                  |
| params     | 请求参数   | JSON   | 是    | `{"name":"{keyword}","type":"0"}` | 参数中的{keyword}是搜索中的关键字，比如搜索”三国演义“，那么在实际请求中"{keyword}"会被替换成"三国演义" |
| encode     | 编码方式   | String | 是    | utf-8                             | 取值范围`utf-8,gbk`，默认认为utf-8                                       |
| bookList   | 搜索列表规则 | String | 是    | //\*\[@class\='list']             | 规则代码                                                            |
| bookName   | 书籍名称规则 | String | 是    | .//a/text()                       | 这里的取值方式是获取bookList中的Dom或者JSON                                   |
| bookUrl    | 书籍地址规则 | String | 是    | .//a/@href                        | 同上                                                              |
| bookAuthor | 书籍作者规则 | String | 否    | .//p\[@\='author']/text()         | 同上                                                              |
| ruleExtra  | 追加的规则  | JSON   | 否    | `{...}`                           | 具体查看1.4追加规则说明                                                   |

### 1.2、章节列表规则说明

| 参数        | 名称     | 参数类型   | 是否必填 | 示例值                                                  | 描述                                            |
| :-------- | :----- | :----- | :--- | :--------------------------------------------------- | :-------------------------------------------- |
| engine    | 解析引擎   | String | 是    | jsonpath                                             | 取值范围`xpath,jsonpath`                          |
| request   | 请求信息   | String | 否    | @js: return config;                                  | 在请求URL之前可以处理一些参数，比如添加请求头，替换请求url等。具体可以查看2.1.2 |
| response  | 响应处理   | String | 否    | @js: return html;                                    | 在请求完成以后，会将请求到的html返回到这里，可以根据需求处理。具体可以查看2.2    |
| encode    | 编码方式   | String | 是    | utf-8                                                | 取值范围`utf-8,gbk`，默认认为utf-8                     |
| list      | 章节列表规则 | String | 是    | \$..chapterlist\[\*]                                 | 规则代码                                          |
| name      | 章节名称规则 | String | 是    | chapterName                                          | 这里的取值方式是获取list中的Dom或者JSON                     |
| url       | 章节地址规则 | String | 是    | <http://www.a.com/?bid={{bookId}}&cid={{chapterId>}} | 这里的取值方式是获取list中的Dom或者JSON                     |
| ruleExtra | 追加的规则  | JSON   | 否    | `{...}`                                              | 具体查看1.4追加规则说明                                 |

### 1.3、正文规则说明

| 参数       | 名称   | 参数类型   | 是否必填 | 示例值                 | 描述                                             |
| :------- | :--- | :----- | :--- | :------------------ | :--------------------------------------------- |
| engine   | 解析引擎 | String | 是    | jsonpath            | 取值范围`xpath,jsonpath`                           |
| request  | 请求信息 | String | 否    | @js: return config; | 在请求URL之前可以处理一些参数，比如添加请求头，替换请求url等。。具体可以查看2.1.3 |
| response | 响应处理 | String | 否    | @js: return html;   | 在请求完成以后，会将请求到的html返回到这里，可以根据需求处理。具体可以查看2.2     |
| encode   | 编码方式 | String | 是    | utf-8               | 取值范围`utf-8,gbk`，默认认为utf-8                      |
| lines    | 正文规则 | String | 是    | \$.data.content     | 规则代码                                           |
| cleaner  | 净化规则 | String | 否    | 你好\|张三\|李四          | 净化文章中一些广告内容，多个使用"\|"分割                         |

### 1.4、追加规则说明

| 参数              | 名称        | 参数类型   | 是否必填 | 示例值        | 描述 |
| :-------------- | :-------- | :----- | :--- | :--------- | :- |
| imageUrl        | 封面地址规则    | String | 否    | pic        |    |
| lastUpdateTime  | 最后更新的时间规则 | String | 否    | updateTime |    |
| lastChapterName | 最新的章节名称规则 | String | 否    | lastName   |    |
| introduce       | 书籍介绍规则    | String | 否    | intro      |    |
| classify        | 书籍分类规则    | String | 否    | category   |    |
| status          | 书籍完结状态规则  | String | 否    | status     |    |

### 2、源规则中特定字段参数的说明

2.1、`request`，这个参数暂时只支持`@js:`的写法，也就说这个参数暂时是一个写js方法的参数。示例：

`@js: config['url'] = config.url.concat('more'); config['header'] = {'X-Requested-With':'XMLHttpRequest'}; return config;`&#x20;

以上就是一个完整的`request`示例写法，方法的最后必须将config对象return

这里有一个特定的对象`config`，其中包含了一些常用的参数，不同的规则中参数是有区别的。

2.1.1 搜索规则config的参数说明：

| 参数名     | 获取方式           | 示例值                           | 描述        |
| :------ | :------------- | :---------------------------- | :-------- |
| host    | config.host    | <http://www.a.com/>           | 站点地址      |
| url     | config.url     | <http://www.a.com/search/>    | 搜索地址      |
| header  | config.header  | {"a":"b"}                     | 请求头       |
| cookies | config.cookies | {"a":"b"}                     | 请求cookies |
| params  | config.params  | {"keyword":"搜索内容","type":"0"} | 请求参数      |
| keyword | config.keyword | 搜索内容                          | 请求的关键字    |

2.1.2 章节列表规则config的参数说明：

| 参数名                     | 获取方式            | 示例值                       | 描述        |
| :---------------------- | :-------------- | :------------------------ | :-------- |
| host,url,header,cookies |                 |                           | 具体查看2.1.1 |
| bookName                | config.bookName | 三国演义                      | 书籍名称      |
| bookUrl                 | config.bookUrl  | <http://www.a.com/1.html> | 书籍章节列表地址  |

2.1.3 正文规则config的参数说明：

| 参数名                     | 获取方式               | 示例值                         | 描述        |
| :---------------------- | :----------------- | :-------------------------- | :-------- |
| host,url,header,cookies |                    |                             | 具体查看2.1.1 |
| chapterName             | config.chapterName | 第一章                         | 章节名称      |
| chapterUrl              | config.chapterUrl  | <http://www.a.com/1/1/html> | 章节内容地址    |

2.2、response，这个参数暂时只支持`@js:`的写法，也就说这个参数暂时是一个写js方法的参数。示例：

`@js: html = html.replace(/|<\/dd>|[\s\S]*?<\/dt>/g, ''); html = '<div class="list">'.concat(html).concat(''); return html;`

以上就是一个完整的`response`示例写法，方法的最后必须将`html`参数`return`

这里有一个特定的字符串`html`参数，这个参数主要是请求页面以后请求返回了什么，这个`html`就是什么，没有做任何处理的信息。
