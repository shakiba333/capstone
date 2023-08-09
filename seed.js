require('dotenv').config();
require('./config/database');
const Category = require('./models/category');
const Item = require('./models/item');

(async function () {
    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'category1', sortOrder: 10 },
        { name: 'category2', sortOrder: 20 },
        { name: 'category3', sortOrder: 30 },
        { name: 'category4', sortOrder: 40 },
        { name: 'category5', sortOrder: 50 },
        { name: 'category7', sortOrder: 60 },
        { name: 'category8', sortOrder: 70 },
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        { name: 'test1', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[0], price: 5.95 },
        { name: 'test2', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[0], price: 6.95 },
        { name: 'test3', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[0], price: 3.95 },
        { name: 'test4', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[1], price: 14.95 },
        { name: 'test5', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[1], price: 13.95 },
        { name: 'test6', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[1], price: 25.95 },
        { name: 'test7', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[2], price: 1.95 },
        { name: 'test8', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[2], price: 4.95 },
        { name: 'test9', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[3], price: 3.95 },
        { name: 'test10', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[3], price: 7.95 },
        { name: 'test11', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[3], price: 1.95 },
        { name: 'test12', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[4], price: 2.95 },
        { name: 'test13', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[4], price: 3.95 },
        { name: 'test14', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[5], price: 1.95 },
        { name: 'test15', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[5], price: 0.95 },
        { name: 'test16', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[5], price: 2.95 },
        { name: 'test17', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[5], price: 3.95 },
        { name: 'test18', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[6], price: 0.95 },
        { name: 'test19', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[6], price: 0.95 },
        { name: 'test20', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[6], price: 8.95 },
        { name: 'test21', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[6], price: 3.95 },
        { name: 'test22', image: 'https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60', details: 'lorem epsom detail about the product', category: categories[6], price: 7.95 },
    ]);

    console.log(items)

    process.exit();
})();