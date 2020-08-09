DROP TABLE IF EXISTS list;

CREATE TABLE list (
    id TEXT UNIQUE NOT NULL,
    item TEXT NOT NULL,
    brakes_id TEXT
);