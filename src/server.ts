// importando o express 
import express, { Request, Response } from 'express' 

//importando o arquivo index.ts das rotas 
import mainRoutes from './routes/index'
import path from 'path'

//importando template engine( para usar HTML)
import mustache from 'mustache-express'
import dotenv from 'dotenv'

dotenv.config()

//usando express
const server = express()

//configurando o Mustache
server.set('view engine','mustache')

//configurando o caminho da pasta views
server.set('views', path.join(__dirname,'views'))
server.engine('mustache', mustache())

//configuração da pasta public
server.use(express.static(path.join(__dirname,'../public')))

//habilitando o POST no código
server.use(express.urlencoded({extended:true}))

//inserindo a rota no servidor
server.use(mainRoutes)

//pagina não escontrada
server.use((req :Request , res: Response) =>{
    res.status(404).send("Pagina não encontrada")
})


server.listen(process.env.PORT)