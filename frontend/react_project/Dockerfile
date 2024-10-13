# Node.js 18.xのバージョンが推奨されているためこちらを指定
# :ltsで最新バージョンを常に取得することができるが環境で一貫性を保つために特定バージョンを指定
FROM node:18

# WORDWOLF-EN/reactをマウントしてコンテナ側の構成を下記に設定する
# ※reactだけだとパッケージ名と衝突する可能性があるため避ける
WORKDIR /react_project

# 依存関係のファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm cache clean --force
RUN npm install
RUN npm install axios --save
RUN npm install react-bootstrap bootstrap
RUN npm install react-circular-progressbar

# アプリのソースコードをコピー
# 1つ目の.はホスト側のディレクトリを示し、2つ目はコンテナ側のディレクトリを示す
# react_project直下の内容がそのままコピーされる
COPY . .

RUN chmod +x ./wait-for-it.sh

# 開発サーバーを起動
CMD ["./wait-for-it.sh", "django-app:8000", "--", "npm", "start"]