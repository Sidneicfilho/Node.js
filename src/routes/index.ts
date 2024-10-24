import { Router, Request, Response, response, RequestHandler } from 'express'
import * as HomeController from '../controllers/homeController'
import * as InfoControllers from '../controllers/infoController'
import * as UserControllers from '../controllers/userController'



const router = Router()


//ROTA HOME
router.get('/',HomeController.home)

router.get('/contatos',InfoControllers.contato)

router.get('/sobre',InfoControllers.sobre)

router.get('/nome',UserControllers.nome)

router.get('/atv',UserControllers.atv)

router.get('/idade',UserControllers.idade)

router.post('/idade-resultado',UserControllers.ResultadoIdade)

router.get('/cadastro',UserControllers.cadastro)

router.post('/cadastro-resultado',UserControllers.resultado)




/*
//quando usamos middleware, colocamos next
const interferir:RequestHandler = (req : Request,res:Response, next) => {
    //console.log("PASSOU PELO MIDDLEWARE")

    let logged = false
    if(logged){
        next()
    }else{
        res.status(404).send("Loggin não permitido")
    }
    
    //next significa que liberamos o middleware a pag. contatos
   
}

router.get('/contatos',interferir,(req: Request,res: Response) =>{
    console.log("Executou a pag de contatos")
    res.send("Aqui é a página de contato")
})



router.get('/sobre', (req: Request, res: Response) =>{
    res.send("Aqui é a pagina de sobre")
})

//ROTA DINAMICA
router.get('/noticia/:slug',(req: Request,res: Response)=>{
    let slug: string = req.params.slug
    res.send(`Noticia : ${slug}`)
})

router.get('/voo/:origem-:destino',(req: Request,res: Response)=>{
    let{origem , destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

*/


export default router

