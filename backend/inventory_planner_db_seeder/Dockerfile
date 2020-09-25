FROM arey/mysql-client

ADD seeder.sh /app/
RUN chmod +x /app/seeder.sh
ADD schema.sql /app/
ENTRYPOINT ["/app/seeder.sh"]