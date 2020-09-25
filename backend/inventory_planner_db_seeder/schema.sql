DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS category;

CREATE TABLE items (
    id VARCHAR(36) NOT NULL,
    item TEXT NOT NULL,
    brakes_id TEXT,
    category VARCHAR(36) NOT NULL REFERENCES category(id),
    PRIMARY KEY (id)
);

CREATE TABLE category (
    id VARCHAR(36) NOT NULL,
    title TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO category VALUES ("0", "Frozen");
INSERT INTO category VALUES ("1", "Chilled");
INSERT INTO category VALUES ("2", "Ambient");