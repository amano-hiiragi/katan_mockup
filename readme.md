# memo

## 環境,利用技術等

- node.js
  - Express.js
- docker
- AWS

## 参考サイト一覧

- <https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/>

### log

```etc
npm init
npm install express --save
```

```docker
docker build -t utadef/node-web-app .
docker run -p 49170:8080 -d utadef/node-web-app
イメージを -d で実行するとコンテナは分離モードで実行され、バックグラウンドで実行されたままになります。 -p フラグはパブリックポートをコンテナ内のプライベートポートにリダイレクトします。 以前に構築したイメージを実行します。
docker exec -it <container id> /bin/bash
docker stop
```