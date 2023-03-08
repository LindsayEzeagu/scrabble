import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function init() {
  const db = await open({
    filename: './database.sqlite',
    verbose: true,
    driver: sqlite3.Database,
  });
  await db.migrate();
  return db;
}

const dbConn = init();

export async function listProducts() {
  const db = await dbConn;
  const products = await db.all('SELECT * FROM Product WHERE stock > 0');

  return products;
}

export async function findProduct(id) {
  const db = await dbConn;
  const product = db.get('SELECT * FROM Product WHERE id = ?', id);

  return product;
}
