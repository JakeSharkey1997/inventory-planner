#!/bin/bash
set -e
sleep 10
gunicorn "inventory_planner:create_app()" -b ":5000"
#flask run --host=0.0.0.0