def add_item(db, key, item, brakes_id, category):
    cursor = db.cursor()
    item = (key, item, brakes_id, category)
    cursor.execute('INSERT INTO items VALUES (%s,%s,%s,%s)', item)
    db.commit()


def del_item(db, key):
    cursor = db.cursor()
    cursor.execute('DELETE FROM items WHERE id = %s', (key,))
    db.commit()


def get_all_items(db):
    cursor = db.cursor()
    cursor.execute('SELECT * FROM items LEFT JOIN category ON items.category = category.id')
    rows = cursor.fetchall()
    results = []
    for row in rows:
        result = {
            'key': row[0],
            'item': row[1],
            'brakesId': row[2],
            'category': row[3],
            'categoryTitle': row[4]
        }
        results.append(result)
    return results


def edit_item(db, key, item_updated, brakes_id_updated, category_updated):
    cursor = db.cursor()
    cursor.execute('UPDATE items SET item = %s, brakes_id = %s, category = %s WHERE id = %s', (item_updated,
                                                                                               brakes_id_updated,
                                                                                               category_updated,
                                                                                               key))
    db.commit()
