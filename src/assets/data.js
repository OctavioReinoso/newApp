export const productsShop = [
    {
        id:1, categoryProd:'calzado', title:'Jordan 1 red', price:35000, stock:5, gender:'man', imgURL: 'https://nikearprod.vtexassets.com/arquivos/ids/378364-1000-1000?v=1781470630&width=1000&height=1000&aspect=true'
    },
    {
        id:2, categoryProd:'calzado', title:'Air Force white', price:32000, stock:5, gender:'woman', imgURL: "https://nikearprod.vtexassets.com/arquivos/ids/408175-1000-1000?v=1781465014&width=1000&height=1000&aspect=true"
    },
    {
        id:3, categoryProd:'calzado', title:'Jordan 3 retro', price:36000, stock:5, gender:'man', imgURL: "https://nikearprod.vtexassets.com/arquivos/ids/698254-1000-1000?v=1781396566&width=1000&height=1000&aspect=true"
    },
    // {
    //     id:4, categoryProd:'', title:'', price:'', stock:'', gender:'', imgURL: "https://3.bp.blogspot.com/-2tY0VfSAXlo/WfC_OVu3MgI/AAAAAAABRAI/yudVLjsRyGoa1pzbdWJhgPXtsfBOEMTaACLcBGAs/s1600/mejores-tatuaje-bosque-arboles-09.jpg"
    // },
    // {
    //     id:5, categoryProd:'', title:'', price:'', stock:'', gender:'', imgURL: "https://i.pinimg.com/564x/cb/5f/ba/cb5fba64e336c98a9e5f94e95d0795b7.jpg"
    // },
    // {
    //     id:6, categoryProd:'', title:'', price:'', stock:'', gender:'', imgURL: "https://www.instyle.es/medio/2023/05/17/tatuaje-medio-brazo-hombre_00000000_4512ada3_230517110836_736x736.jpg"
    // },
    // {
    //     id:7, categoryProd:'', title:'', price:'', stock:'', gender:'', imgURL: "https://www.instyle.es/medio/2023/05/17/tatuaje-medio-brazo-hombre_00000000_4512ada3_230517110836_736x736.jpg"
    // },
    // {
    //     id:8, categoryProd:'', title:'', price:'', stock:'', gender:'', imgURL: "https://www.instyle.es/medio/2023/05/17/tatuaje-medio-brazo-hombre_00000000_4512ada3_230517110836_736x736.jpg"
    // },
    // {
    //     id:9, categoryProd:'', title:'', price:'', stock:'', gender:'', imgURL: "https://www.instyle.es/medio/2023/05/17/tatuaje-medio-brazo-hombre_00000000_4512ada3_230517110836_736x736.jpg"
    // }
];

export const CatalogoImg = [
    {
        title:'imgSneakers', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c7940092-cba3-4786-a987-686c7407f67d/jordan-dri-fit-sport-mens-golf-diamond-shorts-s4xCzd.png'
    },
    {
        title:'imgPants', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/762b17a5-2c3e-4f3b-b72f-4efed807ae18/jordan-sport-jam-mens-warm-up-pants-n551RP.png'
    },
    {
        title:'imgHoodie', imgURL: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9492abb8-2f73-4dbf-b662-0ef672eb6650/jordan-artist-series-by-umar-rashid-fleece-pullover-hoodie-RgD91D.png'
    },
    {
        title:'..', imgURL:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd46996b-0b19-48b4-8a11-afe861b84a02/jordan-dri-fit-sport-mens-diamond-shorts-9mXgXS.png'
    },
    {
        title:'...', imgURL:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc7aaf0c-34cf-43b5-9c12-074a6fba2a9d/jordan-essentials-holiday-mens-fleece-pants-cTR1jG.png'
    }
] 

export const getCatalogue = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(CatalogoImg)
        }, 100)
    })
}

export const getProducts = () => {
    return new Promise((resolve, ) => {
        setTimeout(() => {
            resolve(productsShop)
        }, 500);
    })
}
