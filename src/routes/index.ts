import { Router, Request, Response, response, RequestHandler } from 'express'
import { request } from 'http'


const router = Router()

router.get('/',(req: Request, res: Response) =>{
    res.send("Aqui é a home do site")
})

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




export default router

