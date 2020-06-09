CREATE TABLE orders (
  id serial PRIMARY KEY NOT NULL,
  time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  email VARCHAR(80),
  full_name VARCHAR(100),
  notes VARCHAR(255),
  pet_name VARCHAR(80),
  photo VARCHAR(255)
);

CREATE TABLE commissions (
  id serial PRIMARY KEY NOT NULL,
  order_id integer REFERENCES orders(id),
  photo VARCHAR(255)
);

