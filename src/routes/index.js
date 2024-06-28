import {Router} from 'express'
const router = Router()

router.get('/',(req,res)=>res.render('index.ejs'))      // enviar el archivo ejs de views para el fronted

router.get('/about',(req,res)=>res.render('about.ejs'))      // ir a otra ruta 

router.get('/contact',(req,res)=>res.render('contact.ejs'))      // ir a otra ruta

router.get('/projects',(req,res)=>res.render('projects.ejs'))      // ir a otra ruta

export default router