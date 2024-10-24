import { Request,Response } from "express";



export const home =((req: Request, res: Response) =>{
    res.render('pages/home',{
       name: 'Sidnei',
        sobrenome:'Filho',
        aparecerMensagem:true,
        produtos :[
            {titulo: 'Mesa', preco:200},
            {titulo: 'Xampu', preco:15},
            {titulo: 'Cadeira', preco:50}
          ],
        frases: [
            'Só sei que nada sei',
            'A vingança nunca é plena, mata a alma e envenena',
            'Maldito seja o homem que confia em outro homem',
            'Eu odeio você, Maria Joaquina'
        ]
    
    })
})