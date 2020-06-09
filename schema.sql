CREATE TABLE orders (
  id serial PRIMARY KEY NOT NULL,
  time TIMESTAMPTZ,
  email VARCHAR(80),
  full_name VARCHAR(100),
  notes VARCHAR(255),
  pet_name VARCHAR(80),
  photo BYTEA
);

CREATE TABLE commissions (
  id serial PRIMARY KEY NOT NULL,
  order_id integer REFERENCES orders(id),
  photo BYTEA
);

