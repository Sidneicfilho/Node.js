import { Request,Response } from "express";


export const nome =((req: Request, res: Response) =>{
    /* iremos fazer uma requisição ao usuário(usando req) o 
    "as string" é para ajudar no typescript a especificar o tipo
    desse dado que vou receber, e o query significa que é um dado que será 
    enviado pela urç*/

    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})



export const atv = ((req: Request, res: Response) =>{
    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let telefone: number = parseInt(req.query.telefone as string)
    let endereco: string = req.query.endereco as string

    res.render('pages/atv',{
        nome,
        idade,
        telefone,
        endereco
    })

})

export const idade = ((req:Request, res: Response)=>{
    res.render('pages/idade')

//POST processa as informações
})

export const ResultadoIdade = ((req: Request, res: Response) => {
    let idade: number = 0
    let mostrarIdade: boolean = false
    if (req.body.anoNascimento) {
        let anoNascimento: number = parseInt(req.body.anoNascimento as string)
        let anoAtual: number = new Date().getFullYear()
        idade = anoAtual - anoNascimento
        mostrarIdade = true
    }
    res.render('pages/idade', {
        idade,
        mostrarIdade
    })
})

export const cadastro =((req: Request, res: Response) =>{
    res.render('pages/cadastro')
})

export const resultado = ((req:Request, res: Response)=>{
    let email
    let senha

    res.render('pages/cadastro',{
        email,
        senha
    })
})