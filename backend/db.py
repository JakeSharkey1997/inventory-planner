import sqlite3
import click
from flask import current_app, g
from flask.cli import with_appcontext


def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
          current_app.config['DATABASE'],
          detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row
    return g.db


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_db():
    db = get_db()

    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))


@click.command('init-db')
@with_appcontext
def init_db_command():
    """Clear the existing data and create new tables"""
    init_db()
    click.echo('Initialised the database')


def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)


def add_item(key, item, brakes_id):
    db = get_db()
    cursor = db.cursor()
    items = (key, item, brakes_id)
    cursor.execute('INSERT INTO list VALUES (?,?,?)', items)
    db.commit()


def del_item(key):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('DELETE FROM list WHERE id = ?', (key,))
    db.commit()


def get_all_items():
    cursor = get_db().cursor()
    cursor.execute('SELECT * FROM list')
    rows = cursor.fetchall()
    results = []
    for row in rows:
        result = {
            'key': row['id'],
            'item': row['item'],
            'brakesId': row['brakes_id']
        }
        results.append(result)
    return results


def edit_item(key, item_updated, brakes_id_updated):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('UPDATE list SET item = ?, brakes_id = ? WHERE id = ?', (item_updated, brakes_id_updated, key))
    db.commit()
