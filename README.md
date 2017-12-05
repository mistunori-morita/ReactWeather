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

- 変更後,git add ,git commit
- heroku create
- git remote -vで確認 herokuが出ていたらOk
- その後、`git push heroku master`でプッシュ
- heroku openでデプロイ完了


### localhost修正
- 現状だとlocalhostがバグっているので修正

```js
app.use(function (req,res,next){
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);

  }else{
    next();
  }
});
```

- 変更後 node server.js で再起動してlocalhost:xxxを叩くとみれる
- デプロイ時はherokuにもコマンドを反映させる
- git push heroku master


### sass
- `npm install sass-loader@4.1.1 node-sass --save-dev`でインストール
