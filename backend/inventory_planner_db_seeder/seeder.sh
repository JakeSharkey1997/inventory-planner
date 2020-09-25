#!/bin/bash
set -e
while ! mysqladmin ping -hinventory-planner-db.home --silent; do
    sleep 1
done
mysql -hinventory-planner-db.home -uroot -ppassword inventory-planner < /app/schema.sql