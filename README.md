## 仓库说明

这个仓库是放上自己业余时间做的demos，时不时更新，链接地址请戳 http://reng99.cc/demos/  如果喜欢本仓库，给颗星🌟支持下了 :rocket:

如果您有什么好的demo，欢迎填充，或者觉得鄙人的demo需要修正哪里，都很欢迎您的push指正 :blush:

如果您需要运行/补充本仓库的话，请按照下面的步骤进行哦：

```bash
# 进入桌面（建议放在桌面，比较好查找，或者放在你喜欢的地方）
$ cd desktop

# 克隆本项目
$ git clone https://github.com/reng99/demos.git

# 本地运行，运行后在浏览器上打开地址http://localhost:9000
$ npm run dev

# 线上环境
$ npm run build

# 进行相关的push , 希望你上面的操作都是在新分支上进行的啦，push 操作一定在npm run build后哦
```

⚠️ 注意

1. 如果您修改的话，请在src上进行修改，我在src上有个demo，您可以参考这个进行添加文件。我做了处理-->您在src文件夹内添加的文件保存后，在本地运行的时候会进行自动刷新的，以提高你的开发效率。

2. vendor文件夹存放的是第三方插件，我这里是对同一个文件进行不同命名，方便两个环境的引用，开发环境引用非`.min`的文件啦。您可以根据实际情况引用第三方库，您也可以在次文件上添加，请命名规范--`filename.min.js & filename.js || filename.min.css & filename.css`

3. 其他的文件请尽量别改动啊

## 目录

有待完善
