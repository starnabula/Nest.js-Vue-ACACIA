import pool from "../utils/db";
import Product from "../models/productModel";


export interface IProduct {
    id: number;
    name: string;
    price: number;
}

export const getAllProducts = async () => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM products ORDER BY id DESC');
        return result.rows.map(row => new Product(
            row.id,
            row.name,
            row.price
        ));
    } finally {
        client.release(); 
    }
}

export const getProductById = async (id: number) => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM products WHERE id = $1', [id]);
        
        if (result.rows.length === 0) {
            return null;
        } else {
            const row = result.rows[0];
            return new Product(
                row.id,
                row.name,
                row.price
            );
        }
    } finally {
        client.release();
    }
}

export const createProduct = async (name: string, price: number) => {
    const client = await pool.connect();
    try {
        const result = await client.query('INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *', [name, price]);
        return new Product(
            result.rows[0].id,
            result.rows[0].name,
            result.rows[0].price
        );
    } finally {
        client.release();
    }
}

export const updateProduct = async (id: number, name: string, price: number) => {
    const client = await pool.connect();
    try {
        const result = await client.query('UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *', [name, price, id]);
        // เช็คเผื่อ update ไม่เจอ
        if (result.rows.length === 0) return null;
        
        return new Product(
            result.rows[0].id,
            result.rows[0].name,
            result.rows[0].price
        )
    } finally {
        client.release()
    }
}

export const deleteProduct = async (id: number) => {
    const client = await pool.connect();
    try {
        await client.query('DELETE FROM products WHERE id = $1', [id]);
    } finally {
        client.release();
    }
}