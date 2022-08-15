
const products = [
    { 
        id: '1', 
        name: 'Samsung Galaxy S22 Ultra 12gb 256gb Green', 
        price: 1000, 
        category: 'celular', 
        imgs: [{id: '1', img: 'https://http2.mlstatic.com/D_NQ_NP_668050-MLA49303776893_032022-O.webp'},{id: '2', img: 'https://http2.mlstatic.com/D_NQ_NP_701749-MLA49303776898_032022-O.webp'},{id: '3', img: 'https://http2.mlstatic.com/D_NQ_NP_894779-MLA49303776900_032022-O.webp'}],
        stock: 25, 
        description:'Esta Iphone es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad.',
        shipping: 'Gratis'
    },
    {
        id: '2',
        name: 'monitor',
        price: 800,
        category: 'Monitor gamer Samsung F24T35 led 24 " azul y gris oscuro 100V/240V',
        imgs:[{id:'1', img: 'https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp'}, {id:'2', img:'https://http2.mlstatic.com/D_Q_NP_816471-MLA48131292347_112021-R.webp'}, {id:'3', img:'https://http2.mlstatic.com/D_Q_NP_905728-MLA48131292348_112021-R.webp'}, {id:'4', img:'https://http2.mlstatic.com/D_Q_NP_642347-MLA48131245448_112021-R.webp'}],
        stock: 16,
        description:'Descripcion de Samsung s21',
        shipping: 'Gratis'
    },

    {
        id: '3',
        name: 'Tablet  Samsung Galaxy Tab A7 Lite SM-T220 8.7" 32GB gris y 3GB de memoria RAM',
        price: 1200,
        category: 'tablet',
        imgs:[{id:'1', img:'https://http2.mlstatic.com/D_NQ_NP_765874-MLA47146197629_082021-O.webp'}, {id:'2', img:'https://http2.mlstatic.com/D_NQ_NP_662402-MLA47146427171_082021-O.webp'}, {id:'3', img:'https://http2.mlstatic.com/D_NQ_NP_609296-MLA47146197633_082021-O.webp'}],
        stock: 10,
        description:'Des',
        shipping: 'Gratis'
    },
    { 
        id: '4',
        name: 'Remera Nike Moda Nsw Worldwide Hbr Hombre Bl Tienda Oficial',
        price: 800,
        category: 'ropa',
        imgs:[{id:'1', img:'https://http2.mlstatic.com/D_NQ_NP_776753-MLA49480166433_032022-O.webp'}, {id:'2', img:'https://http2.mlstatic.com/D_Q_NP_866118-MLA49480166436_032022-R.webp'}, {id:'3', img:'https://http2.mlstatic.com/D_Q_NP_876300-MLA49577423322_042022-R.webp'}],
        stock: 16,
        description:'Camiseta Nike Sportswear Worldwide para hombre.',
        shipping: 'Gratis'
    }

]

    export const getProducts = () => {
        return (new Promise((resolve) =>{
            setTimeout(() => {
                resolve(products)
            }, 0)
        })) 
    }

    export const getProductsByCategoryID = (categoryID) => {
        return (new Promise((resolve) =>{
                resolve(products.filter(e => e.category === categoryID))
        })) 
    }


    export const getItem = (id) => {
        
        return (new Promise((resolve) =>{
                resolve(products.find(e => e.id === id))
        })) 
    }