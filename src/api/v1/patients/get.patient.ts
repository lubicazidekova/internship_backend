import { Request, Response } from 'express'
import Joi, {string} from 'joi'
import {models} from '../../../db'
import {PatientModel} from '../../../db/models/patients'
import {GENDER} from "../../../utils/enums"
import {DiagnoseModel} from "../../../db/models/diagnoses";



export const requestSchema = Joi.object({
    body: Joi.object(),
    query:Joi.object(),
    params: Joi.object({
        patientID: Joi.number().integer().min(1).required(),
        age: Joi.string()
    })
})
export const schema = Joi.object({
    firstName  : Joi.string().max(100).required(),
    lastName   : Joi.string().max(100).required(),
    birthdate  : Joi.date().less('now').required(),
    weight     : Joi.number().min(1).max(200).required(),
    height     : Joi.number().min(1).required(),
    identificationNumber: Joi.string().length(12).pattern(/^[a-zA-Z0-9]*$/).required(),
    gender     : Joi.string().valid(...GENDER.MALE).required(),
    diagnoseID : Joi.number().min(1).required()
})

export const workflow = async (req: Request, res: Response) => {
    const{
        Patient
    } = models

    const patient: PatientModel[] = await Patient.findAll({

         where: {
                id:6,
            },
            include:{
                model : DiagnoseModel,

            },
            logging:true,

        }
        )

    res.json({patient})
    console.log(patient)
}

/*
export const workflow = (req: Request, res: Response) => {

    res.json({
        "patient": {
            "id": 1,
            "firstName": "string",
            "lastName": "string",
            "birthdate": "2022-04-06T13:32:00.505Z",
            "weight": 200,
            "height": 1,
            "identificationNumber": "C3TITFoOjIqL",
            "gender": "MALE",
            "age": 0,
            "personType": "ADULT",
            "substanceAmount": 1,
            "diagnose": {
                "id": 1,
                "name": "string",
                "description": "string",
                "substance": {
                    "id": 1,
                    "name": "string",
                    "timeUnit": "SECOND",
                    "halfLife": 0
                }
            }
        }})
}
*/