import { Request, Response } from 'express'

import * as Joi from "joi"


enum GENDER{
    MALE ='MALE',
    FEMALE ='FEMALE'
}

const schema = Joi.object({
    firstName  : Joi.string().max(100),
    lastName   : Joi.string().max(100),
    birthdate  : Joi.date(),
    weight     : Joi.number().min(1).max(200),
    height     : Joi.number().min(1),
    identificationNumber: Joi.string().length(12).pattern(/^[a-zA-Z0-9]*$/),
    gender     : Joi.string().valid(GENDER),
    diagnoseID : Joi.number().min(1)
})



export const workflow = (req: Request, res: Response) => {

    req.body({
        "firstName": "string",
        "lastName": "string",
        "birthdate": "2022-04-06T13:40:09.811Z",
        "weight": 200,
        "height": 1,
        "identificationNumber": "stringstring",
        "gender": "MALE",
        "diagnoseID": 1
    })

    res.json({
        "messages": [
            {
                "message": "string",
                "type": "SUCCESS"
            }
        ]
    })
}