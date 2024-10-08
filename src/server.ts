// importando o express 
import express, { Request, Response } from 'express' 

//importando o arquivo index.ts das rotas 
import mainRoutes from './routes/index'
import { request } from 'http'

//usando express
const server = express()

//inserindo a rota no servidor
server.use(mainRoutes)

//pagina não escontrada
server.use((req :Request , res: Response) =>{
    res.status(404).send("Pagina não encontrada")
})










//gerar servidor na porta 3000 
server.listen(3000)