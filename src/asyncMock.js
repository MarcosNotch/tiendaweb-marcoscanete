
const products = [
    { 
        id: '1', 
        name: 'iphone 12', 
        price: 1000, 
        category: 'celular', 
        img:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040', 
        stock: 25, 
        description:'Esta Iphone es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad.',
        shipping: 'Gratis'
    },
    { id: '2', name: 'samsung s21', price: 800, category: 'celular', img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock: 16, description:'Descripcion de Samsung s21',shipping: 'Gratis'},
    { id: '3', name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', stock: 10, description:'Des', shipping: 'Gratis'},
    { id: '4', name: 'samsung s21', price: 800, category: 'celular', img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock: 16, description:'Descripcion de Samsung s21',shipping: 'Gratis'},
   
]

    export const getProducts = () => {
        
        return (new Promise((resolve) =>{
            setTimeout(() => {
                resolve(products)
            }, 3000)
           
        })) 
    }


    export const getItem = () => {
        
        return (new Promise((resolve) =>{
            setTimeout(() => {
                resolve(products[0])
            }, 3000)
           
        })) 
    }