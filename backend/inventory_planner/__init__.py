from flask import Flask, request
import os
import uuid
from . import db


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
      SECRET_KEY='dev',
      DATABASE=os.path.join(app.instance_path, 'db.sqlite'),
    )
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    db.init_app(app)

    @app.route('/')
    def index():
        return 'DONE'

    @app.route('/add-item', methods=['POST'])
    def add_item():
        key = str(uuid.uuid4())
        item = request.json['item']
        brakes_id = request.json['brakesId']
        db.add_item(key, item, brakes_id)
        return 'Added item'

    @app.route('/del-item', methods=['DELETE'])
    def del_item():
        key = request.json['key']
        db.del_item(key)
        return 'Deleted'

    @app.route('/get-all-items')
    def get_all_items():
        return {'results': db.get_all_items()}

    @app.route('/edit-item', methods=['PUT'])
    def edit_item():
        key = request.json['key']
        item_updated = request.json['item']
        brakes_id_updated = request.json['brakesId']
        db.edit_item(key, item_updated, brakes_id_updated)
        return 'Item edited'

    return app
