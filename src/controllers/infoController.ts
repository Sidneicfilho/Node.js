import { Request,Response } from "express";



export const contato =((req: Request, res: Response) =>{
    let idade: number = 15
    let mostrarIdade: boolean = false

    if(idade >= 18){
       mostrarIdade = true
    }
 
   res.render('pages/contatos',{
     mostrarIdade,
     idade,
    
       })
   
})

export const sobre = ((req: Request, res: Response) =>{
    res.render('pages/sobre')
})