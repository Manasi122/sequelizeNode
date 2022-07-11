module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
    Review.bulkCreate([
        {rating:'5',description: 'amazing'},
        {rating:'4',description: 'bad'},
        {rating:'5',description: 'amazing'}
    ]);
    return Review


}