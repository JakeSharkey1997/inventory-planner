#!/bin/bash
set -e
sleep 10
mysql -hinventory-planner-db.home -uroot -ppassword inventory-planner < /app/schema.sql