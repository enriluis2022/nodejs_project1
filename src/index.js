//console.log('Hello World')
import express from 'express'          // import express; tambiés es válido: const express = require ('express'). Ya no gracias a type: "module"
//import ejs from 'ejs'                // ejs: motor de plantillas, no es necesario el código porque Express tiene integración con ejs
import {dirname,join} from 'path'      // dirname crea una ruta absoluta
import { fileURLToPath } from 'url'

const app = express()       
         
//app.get('/', (req,res)=>res.send('hello world'))   //Crear la primera ruta o URL

app.set('view engine', 'ejs')     //crear un motor de plantillas, conectamos con la carpeta "views". Tranformar a HTML puro con caracteristicas extras


//crea la ruta absoluta
       const __dirname = dirname(fileURLToPath(import.meta.url))   
       //console.log(__dirname,'/views')
       app.set('views', join(__dirname,'views'))
       console.log(join(__dirname,'views'))
//finaliza la ruta absoluta

import indexRoutes from './routes/index.js'
app.use(indexRoutes)

app.use(express.static(join(__dirname,'public')))    // backend para usar CSS


app.listen(3000)
console.log('Server is listening on port', 3000)