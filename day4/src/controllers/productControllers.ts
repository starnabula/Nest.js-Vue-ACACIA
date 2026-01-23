import { Request, Response } from "express";
import * as ProductService from '../services/productService';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductService.getAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch products" });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const product = await ProductService.getProductById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(product);
    } catch (error) {
        const err = error as Error;
        return res.status(500).json({ message: err.message });
    }
};
    
export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price } = req.body;
        const product = await ProductService.createProduct(name, price);
        return res.status(201).json(product);
    } catch (error) {
        const err = error as Error;
        return res.status(500).json({ message: err.message });
    }
};

// --- ส่วนที่เพิ่มเข้ามาใหม่ ---

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { name, price } = req.body;
        const product = await ProductService.updateProduct(id, name, price);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(product);
    } catch (error) {
        const err = error as Error;
        return res.status(500).json({ message: err.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await ProductService.deleteProduct(id);
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        const err = error as Error;
        return res.status(500).json({ message: err.message });
    }
};