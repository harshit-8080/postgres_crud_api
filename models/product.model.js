const {DataTypes } = require("sequelize");

module.exports = (sequelize , Sequelize) => {

    const Product = sequelize.define("product",{

        productid:{
            type:DataTypes.STRING,
            defaultValue:null
        },
        name:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.INTEGER
        },
        catagory:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        }
    })

    return Product;
}