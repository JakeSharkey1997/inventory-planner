FROM python:3.7

RUN apt update && apt install -y default-mysql-client
ADD seeder.sh /app/
RUN chmod +x /app/seeder.sh
ADD schema.sql /app/
ENTRYPOINT ["/app/seeder.sh"]