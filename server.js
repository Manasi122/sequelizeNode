const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./utils/swagger');

const cors = require('cors');
var corOptions = {
    origin : 'https://localhost:3001'
}
app.use(cors(corOptions));



// Swagger implementation;
const swaggerOptions = {
    swaggerDefinition,
    apis: ['./routes/*.js', './utils/swagger.js'],
  };
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));



const router = require('./routes/userRouter.js')
app.use('/api/users', router)

const routerRegister = require('./routes/loginRouter.js')
const loginRegister = require('./routes/loginRouter.js')
app.use('/api/register', routerRegister)
app.use('/api/login', loginRegister)

// routers
const routerProduct = require('./routes/productRouter.js')
app.use('/api/products', routerProduct)


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server up on ${PORT}`);
})