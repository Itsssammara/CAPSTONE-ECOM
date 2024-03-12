import { express, userRouter } from "./controllers/UserControl.js";
import { productRouter } from "./controllers/ProductControl.js";
import cookieParser from "cookie-parser";
import { errorHandling } from "./middleware/ErrorHandling.js";
import path from 'path'
import { config } from "dotenv";
import cors from 'cors'
config()
const app=express()
const port = +process.env.PORT || 3307

//Middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
    })
    app.use(
        express.static('./static'),
        express.json(),
        express.urlencoded({
            extended:true,
        }),
        cookieParser(),
        cors()
    )
    app.get('/PRODUCTS', (req, res) => {
        res.status(200).sendFile(path.join(__dirname, './static/index.html'));
    });
    // users
    app.use('/users',userRouter)
    // Products
    app.use('/products',productRouter)
    app.use(errorHandling)
    app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })
    
    
    
    
    
    
    