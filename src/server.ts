// importando o express 
import express, { Request, Response } from 'express' 

//importando o arquivo index.ts das rotas 
import mainRoutes from './routes/index'
import path from 'path'

//usando express
const server = express()

//configuração da pasta public
server.use(express.static(path.join(__dirname,'../public')))

//inserindo a rota no servidor
server.use(mainRoutes)

//pagina não escontrada
server.use((req :Request , res: Response) =>{
    res.status(404).send("Pagina não encontrada")
})







//gerar servidor na porta 3000 
server.listen(3000)