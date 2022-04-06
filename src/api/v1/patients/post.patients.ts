import { Request, Response } from 'express'
import * as Joi from "joi"


enum GENDER{
    MALE ='MALE',
    FEMALE ='FEMALE'
}

const schema = Joi.object({
    firstName  : Joi.string().max(100).required(),
    lastName   : Joi.string().max(100).required(),
    birthdate  : Joi.date().required(),
    weight     : Joi.number().min(1).max(200).required(),
    height     : Joi.number().min(1).required(),
    identificationNumber: Joi.string().length(12).pattern(/^[a-zA-Z0-9]*$/).required(),
    gender     : Joi.string().valid(GENDER).required(),
    diagnoseID : Joi.number().min(1).required()
})

 export interface PostPatients{
    firstName: "string",
    lastName: "string",
    birthdate: "2022-04-06T13:44:24.316Z",
    weight: 200,
    height: 1,
    identificationNumber: "SLPbDuv6Johd",
    gender: "MALE",
    diagnoseID: 1
}

export const workflow = (req: Request, res: Response) => {

    req.body(
        {
        "firstName": "string",
        "lastName": "string",
        "birthdate": "2022-04-06T13:44:24.316Z",
        "weight": 200,
        "height": 1,
        "identificationNumber": "SLPbDuv6Johd",
        "gender": "MALE",
        "diagnoseID": 1
    })
    res.json({
        messages: [
            {
                "message": "string",
                "type": "SUCCESS"
            }
        ],
        "patient": {
            "id": 1
        }
    })
}