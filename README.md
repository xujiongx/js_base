# 现代JS基础学习
https://zh.javascript.info/


## javascript编程语言
>简介
- JavaScript 简介
- 手册与规范
- 代码编辑器
- 开发者控制台


>JavaScript 基础知识
- Hello, world!
- 代码结构
- 现代模式，"use strict"
- 变量
- 数据类型
- 类型转换
- 运算符
- 值的比较
- 交互：alert、prompt 和 confirm
- 条件运算符：if 和 '?'
- 逻辑运算符
- 循环：while 和 for
- "switch" 语句
- 函数
- 函数表达式
- 箭头函数，基础知识
- JavasScript 特性

>代码质量
- 在 Chrome 中调试
- 代码风格
- 注释
- 忍者代码
- 使用 Mocha 进行自动化测试
- Polyfill

>Object（对象）：基础知识
- 对象
- 垃圾回收
- Symbol 类型
- 对象方法，"this"
- 对象 — 原始值转换
- 构造器和操作符 "new"

>数据类型
- 原始类型的方法
- 数字类型
- 字符串
- 数组
- 数组方法
- Iterable object（可迭代对象）
- Map and Set（映射和集合）
- WeakMap and WeakSet（弱映射和弱集合）
- Object.keys，values，entries
- 解构赋值
- 日期和时间
- JSON 方法，toJSON

>函数进阶内容
- 递归和堆栈
- Rest 参数与 Spread 语法
- 闭包
- 旧时的 "var"
- 全局对象
- 函数对象，NFE
- "new Function" 语法
- 调度：setTimeout 和 setInterval
- 装饰者模式和转发，call/apply
- 函数绑定
- 深入理解箭头函数

>对象属性配置
- 属性标志和属性描述符
- 属性的 getter 和 setter

>原型，继承
- 原型继承
- F.prototype
- 原生的原型
- 原型方法，没有 __proto__ 的对象

>类
- Class 基本语法
- 类继承
- 静态属性和静态方法
- 私有的和受保护的属性和方法
- 扩展内建类
- 类检查："instanceof"
- Mixin 模式

>错误处理
- 错误处理，"try..catch"
- 自定义 Error，扩展 Error

>Promise，async/await
- 简介：回调
- Promise
- Promise 链
- 使用 promise 进行错误处理
- Promise API
- Promisification
- 微任务（Microtask）
- Async/await

>Generator，高级 iteration
- Generator
- Async iterator 和 generator

>模块
- 模块 (Module) 简介
- 导出和导入
- 动态导入

>杂项
- Proxy 和 Reflect
- Eval：执行代码字符串
- 柯里化（Currying）
- BigInt



## 浏览器：文档，事件，接口
>Document
- 浏览器环境，规格
- DOM 树
- 遍历 DOM
- 搜索：getElement*，querySelector*
- 节点属性：type，tag 和 content
- 特性和属性（Attributes and properties）
- 修改文档（document）
- 样式和类
- 元素大小和滚动
- Window 大小和滚动
- 坐标

>事件简介
- 浏览器事件简介
- 冒泡和捕获
- 事件委托
- 浏览器默认行为
- 创建自定义事件


>UI 事件
- 鼠标事件基础
- 移动鼠标：mouseover/out，mouseenter/leave
- 鼠标拖放事件
- 键盘：keydown 和 keyup
- 滚动

>表单，控件
- 表单属性和方法
- 聚焦：focus/blur
- 事件：change，input，cut，copy，paste
- 表单：事件和方法提交

>加载文档和其他资源
- 页面生命周期：DOMContentLoaded，load，beforeunload，unload
- 脚本：async，defer
- 资源加载：onload，onerror

>杂项
- DOM 变动观察器（Mutation observer）
- 选择（Selection）和范围（Range）
- 事件循环：微任务和宏任务


## 其他文章
>Frame 和 window
- 弹窗和 window 的方法
- 跨窗口通信
- 点击劫持攻击

>二进制数据，文件
- ArrayBuffer，二进制数组
- TextDecoder 和 TextEncoder
- Blob
- File 和 FileReader

>网络请求
- Fetch
- FormData
- Fetch：下载进度
- Fetch：中止（Abort）
- Fetch：跨源请求
- Fetch API
- URL 对象
- XMLHttpRequest
- 可恢复的文件上传
- 长轮询（Long polling）
- WebSocket
- Server Sent Events

>在浏览器中存储数据
- Cookie，document.cookie
- LocalStorage，sessionStorage
- IndexedDB

>动画
- 贝塞尔曲线
- CSS 动画
- JavaScript 动画

>Web components
- 从星球轨道的高度讲起
- Custom elements
- 影子 DOM（Shadow DOM）
- 模板元素
- Shadow DOM 插槽，组成
- 给 Shadow DOM 添加样式
- Shadow DOM 和事件（events）

>正则表达式
- 模式（Patterns）和修饰符（flags）
- 字符类
- Unicode：修饰符 “u” 和 class \p{...}
- 锚点（Anchors)：字符串开始 ^ 和末尾 $
- Flag "m" — 多行模式
- 词边界：\b
- 转义，特殊字符
- 集合和范围 [...]
- 量词 `+,*,?` 和 `{n}`
- 贪婪量词和惰性量词
- 捕获组
- 模式中的反向引用：\N 和 \k<name>
- 选择（OR）|
- 前瞻断言与后瞻断言
- Catastrophic backtracking
- 粘性标志 "y"，在位置处搜索
- 正则表达式（RegExp）和字符串（String）的方法