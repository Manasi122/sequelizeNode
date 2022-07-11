const { products } = require(".")

module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })

    // Product.bulkCreate([
    //     {title: 'apple',price : '400',description: 'amazing',published:'true'},
    //     {title: 'mi',price : '1000',description: 'okay',published:'true'},
    //     {title: 'samsung',price : '300',description: 'bad',published:'true'},
    // ]);
    return Product

}
