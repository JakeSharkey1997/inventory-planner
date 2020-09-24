#!/bin/bash
set -e
sleep 10
mysql -hinventory-planner-db.home -uroot -ppassword inventory-planner < inventory_planner/schema.sql
gunicorn "inventory_planner:create_app()" -b ":5000"
#flask run --host=0.0.0.0