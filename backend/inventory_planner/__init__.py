from flask import Flask, request
import os
import uuid
from . import db
from flask_mysqldb import MySQL


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        MYSQL_HOST='inventory-planner-db.home',
        MYSQL_USER='root',
        MYSQL_PASSWORD='password',
        MYSQL_DB='inventory-planner'
    )
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    mysql = MySQL(app)

    @app.route('/')
    def index():
        return 'DONE'

    @app.route('/add-item', methods=['POST'])
    def add_item():
        mysql_connection = mysql.connection
        key = str(uuid.uuid4())
        item = request.json['item']
        brakes_id = request.json['brakesId']
        category = request.json['category']
        db.add_item(mysql_connection, key, item, brakes_id, category)
        return 'Added item'

    @app.route('/del-item', methods=['DELETE'])
    def del_item():
        mysql_connection = mysql.connection
        key = request.json['key']
        db.del_item(mysql_connection, key)
        return 'Deleted'

    @app.route('/get-all-items')
    def get_all_items():
        mysql_connection = mysql.connection
        return {'results': db.get_all_items(mysql_connection)}

    @app.route('/edit-item', methods=['PUT'])
    def edit_item():
        mysql_connection = mysql.connection
        key = request.json['key']
        item_updated = request.json['item']
        brakes_id_updated = request.json['brakesId']
        category_updated = request.json['category']
        db.edit_item(mysql_connection, key, item_updated, brakes_id_updated, category_updated)
        return 'Item edited'

    return app
