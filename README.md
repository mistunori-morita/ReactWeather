#React Weather



## HEROKU設定
- brew install heroku-toolbelt
- インストールできたらherokuと入力
- heroku login
- メールアドレス入力
- パスワード入力
- heroku auth:whoami　heroku auth:whoamiコマンドは、現在ログイン中のアカウント（メールアドレス）を表示します。


### デプロイ設定
- package.json

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1", //カンマ
  "start": "node server.js"　//追記
},
```

- server.js
```js
var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3002; //修正

//追記
app.use(function (req,res,next){
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  }else{
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT,function(){
  console.log('Express server is up on port' + PORT);
});

```
