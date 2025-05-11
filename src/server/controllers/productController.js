import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"

// function for add product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()

        res.json({ success: true, message: "Product Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for list product
const listProducts = async (req, res) => {
    try {
        const response = await fetch('https://0mdsbb-0w.myshopify.com/admin/api/2025-04/products.json', {
            method: 'GET'
        });
        
        const data = await response.json();
        
        // Transform Shopify data to match our application's format
        const transformedProducts = data.products.map(product => {
            // Get all size options from the product
            const sizeOption = product.options.find(opt => 
                opt.name.toLowerCase() === 'size' || 
                opt.name.toLowerCase() === 'sizes' ||
                opt.name.toLowerCase().includes('size')
            );

            // Get sizes from variants if no explicit size option exists
            const sizesFromVariants = product.variants
                .map(variant => variant.option1)
                .filter((size, index, self) => self.indexOf(size) === index);

            // Use size option values if available, otherwise use variant sizes
            const sizes = sizeOption ? sizeOption.values : sizesFromVariants;

            return {
                _id: product.id.toString(),
                name: product.title,
                description: product.body_html || '',
                price: parseFloat(product.variants[0]?.price || 0),
                image: product.images.map(img => img.src),
                category: product.product_type || 'Uncategorized',
                subCategory: product.vendor || 'Uncategorized',
                sizes: sizes || [],
                bestseller: false,
                date: new Date(product.created_at).getTime()
            };
        });

        res.json({ success: true, products: transformedProducts });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// function for remove product
const removeProduct = async (req, res) => {
    try {
        
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {
        
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { listProducts, addProduct, removeProduct, singleProduct }