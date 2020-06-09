//drawing id asscocaited with order id
CREATE TABLE orders (
  id serial PRIMARY KEY NOT NULL
  time TIMESTAMPTZ,
  email VARCHAR(80),
  fullName VARCHAR(100),
  notes VARCHAR(255),
  petsName VARCHAR(80),
  photo BYTEA,
);

CREATE TABLE commissions (
  id serial PRIMARY KEY NOT NULL,
  order_id REFERENCE orders(id),
  photo BYTEA,
);

