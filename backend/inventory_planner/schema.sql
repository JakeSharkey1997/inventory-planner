DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS category;

CREATE TABLE items (
    id TEXT UNIQUE NOT NULL,
    item TEXT NOT NULL,
    brakes_id TEXT,
    category TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category) REFERENCES category(id)
);

CREATE TABLE category (
    id TEXT UNIQUE NOT NULL,
    title TEXT UNIQUE NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO category VALUES ("0", "Frozen");
INSERT INTO category VALUES ("1", "Chilled");
INSERT INTO category VALUES ("2", "Ambient");