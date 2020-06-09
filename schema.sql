CREATE TABLE orders (
  id serial PRIMARY KEY NOT NULL,
  time TIMESTAMPTZ,
  email VARCHAR(80),
  fullName VARCHAR(100),
  notes VARCHAR(255),
  petsName VARCHAR(80),
  photo VARCHAR(255)
);

CREATE TABLE commissions (
  id serial PRIMARY KEY NOT NULL,
  order_id integer REFERENCES orders(id),
  photo VARCHAR(255)
);

