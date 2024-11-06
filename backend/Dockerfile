# 最新バージョンのイメージを使用
FROM python:3.12

# 作業ディレクトリを設定
WORKDIR /backend

# パッケージインストール
RUN pip install --upgrade pip
RUN pip install django djangorestframework mysqlclient django-cors-headers

# ソースコピー
COPY . .

RUN chmod +x ./wait-for-it.sh

# MySQLが完全に起動しきってからマイグレーション実行とサーバ起動を行う
# マイグレーション実行無しで起動してみる
CMD ["sh", "-c", "python manage.py runserver 0.0.0.0:8000"]
# CMD ["./wait-for-it.sh", "mysql-app:3306", "-t", "300", "--", "sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
