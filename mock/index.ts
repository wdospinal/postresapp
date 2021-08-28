import { Category, CategoryName, Dessert } from "../types";

export const mockCategories: Array<Category> = [
  { name: "Postres", id: 1, type: CategoryName.general },
  { name: "Frutales", id: 2, type: CategoryName.fruit },
  { name: "Artificiales", id: 3, type: CategoryName.artificial },
];

export const mockDesserts: Array<Dessert> = [
  {
    name: "Browniw Light",
    id: 1,
    type: [CategoryName.general, CategoryName.artificial],
    price: "5.200",
    uri: "https://i.ytimg.com/vi/fZPzqJGY4jM/maxresdefault.jpg",
    description: ""
  },{
    name: "Cheesecake de frutos amarillos",
    id: 2,
    type: [CategoryName.general, CategoryName.fruit],
    price: "8.800",
    uri: "https://lh3.googleusercontent.com/proxy/eOMuhzeQb8DqJWfACaXF59TVB7yaAVaIWVeHHXDaeftwzsynagSAX0DadXKQc1qGr5f-_Lur29TZarKUPtmG6JMpOHGGfl-Vdop0fvDrV0SCBLbgQh2GUz3K",
    description: ""
  },{
    name: "Cheesecake de fresa",
    id: 3,
    type: [CategoryName.general, CategoryName.fruit],
    price: "8.800",
    uri: "https://recetastips.com/wp-content/uploads/2020/08/Cheescake-de-Fresa-Casero.jpg",
    description: ""
  },{
    name: "Cheesecake de frutos rojos",
    id: 4,
    type: [CategoryName.general, CategoryName.fruit],
    price: "8.800",
    uri: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/05/cheesecake-de-chocolate-blanco-sin-horno.jpg",
    description: ""
  },{
    name: "Fantasia de las tres cheles",
    id: 5,
    type: [CategoryName.general, CategoryName.artificial],
    price: "9.800",
    uri: "https://blog.rappi.com/wp-content/uploads/2018/11/receta-3-leches.jpeg",
    description: ""
  },{
    name: "Oreo",
    id: 6,
    type: [CategoryName.general, CategoryName.artificial],
    price: "9.800",
    uri: "https://peterpan24horas.com/wp-content/uploads/2018/08/DSC_0094-1000x1081.jpg",
    description: ""
  },{
    name: "Milo",
    id: 7,
    type: [CategoryName.general, CategoryName.artificial],
    price: "9.800",
    uri: "https://peterpan24horas.com/wp-content/uploads/2018/08/DSC_0105.jpg",
    description: ""
  },{
    name: "Maracuya",
    id: 8,
    type: [CategoryName.general, CategoryName.fruit],
    price: "8.800",
    uri: "https://fascr.com/wp-content/uploads/2018/02/75240-760x428.jpg",
    description: ""
  },{
    name: "Arequipe",
    id: 9,
    type: [CategoryName.general, CategoryName.artificial],
    price: "9.800",
    uri: "https://static.wixstatic.com/media/f8fed5_b397d2fa2b3941baa41091ba58fa5188~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    description: ""
  },{
    name: "Durazno",
    id: 10,
    type: [CategoryName.general, CategoryName.fruit],
    price: "8.800",
    uri: "https://d37k6lxrz24y4c.cloudfront.net/v2/es-ar/e9dc924f238fa6cc29465942875fe8f0/bf6756d0-d7f1-4d46-a656-476d5804bd48-600.jpg",
    description: ""
  },{
    name: "Fresa",
    id: 11,
    type: [CategoryName.general, CategoryName.fruit],
    price: "8.800",
    uri: "https://www.alqueria.com.co/sites/default/files/receta-de-postre-de-fresa_0.jpg",
    description: ""
  },{
    name: "Mora",
    id: 12,
    type: [CategoryName.general, CategoryName.fruit],
    price: "8.800",
    uri: "https://idealaweb.s3.amazonaws.com/sitio223/Archivos/Productos/p673md0txkcdg69j3hhv.jpg",
    description: ""
  }
  ];
