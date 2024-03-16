// Task 1

const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,

        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    } 
]
let older30 = 0
let liveChicago = 0
let liveIL = 0
let gmailCount = 0
let younger35 = []
let ageSum = 0

for (const user of users) {
    if (user.age > 30) older30++
    if (user.address.city.toLowerCase() === 'chicago') liveChicago++
    if (user.address.state === 'IL') liveIL++
    if (user.email.includes('gmail')) gmailCount++
    if (user.age < 35) younger35.push(user.firstName)
    ageSum += user.age
}
let avgAge = ageSum/users.length

console.log(older30, liveChicago, liveIL, gmailCount, younger35, avgAge)

// Task 2

const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

let mostExpensive;
let highestPrice = 0;
let leastExpensive;
let lowestPrice = Infinity;
let mostCommon;
let biggestQ = 0;
let leastCommon;
let smallestQ = Infinity;
let productList = [];

for (const product of appleStore) {
    productList.push(product.productName);
    if (product.price > highestPrice) {
        mostExpensive = product.productName 
        highestPrice = product.price
    }
    if (product.price < lowestPrice) {
        leastExpensive = product.productName 
        lowestPrice = product.price
    }
    if (product.quantity > biggestQ) {
        mostCommon = product.productName
        biggestQ = product.quantity
    }
    if (product.quantity < smallestQ) {
        leastCommon = product.productName
        smallestQ = product.quantity
    }
}

console.log(mostExpensive, leastExpensive, mostCommon, leastCommon, productList)


// Task 3

const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];



let cheapestBookPrice = Infinity;
let cheapestBook;
let mostExpensiveBookPrice = 0;
let mostExpensiveBook;
let classicBooks = [];


for (const book of bookstore){
    if(book.price < cheapestBookPrice){
        cheapestBookPrice = book.price 
        cheapestBook = book.title
    } 
    if(book.price > mostExpensiveBookPrice){
        mostExpensiveBookPrice = book.price
        mostExpensiveBook = book.title
    }
    if(book.genre.toLowerCase().includes("classic")) classicBooks.push(book.title)
}

console.log(cheapestBook, mostExpensiveBook, classicBooks)

// Task 4

const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};

let totalPrice = 0;
const brands = [];
const itemsWithQuantity = [];



for (const item of shoppingCart.items) {
    totalPrice += item.price * item.quantity;
}


for (const item of shoppingCart.items) {
    brands.push(item.specifications.brand);
}


for (const item of shoppingCart.items) {
    itemsWithQuantity.push(`${item.productName}, ${item.quantity}`);
}


console.log(totalPrice);
console.log(brands);
console.log(itemsWithQuantity);