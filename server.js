const express = require('express');
const app = express();

const cors = require('cors');
var corOptions = {
    origin : 'https://localhost:3001'
}
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));



const router = require('./routes/userRouter.js')
app.use('/api/users', router)

const routerRegister = require('./routes/loginRouter.js')
app.use('/api/register', routerRegister)

const routerLogin = require('./routes/loginRouter.js')
app.use('/api/login', routerLogin)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server up on ${PORT}`);
})