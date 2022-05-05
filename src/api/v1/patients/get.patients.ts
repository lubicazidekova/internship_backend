import { Request, Response } from 'express'
import Joi from 'joi'
import {models} from '../../../db'
import {PatientModel} from '../../../db/models/patients'
import {DiagnoseModel} from "../../../db/models/diagnoses"
import {GENDER} from "../../../utils/enums";


export const requestSchema = Joi.object({
    body: Joi.object(),
    query:Joi.object(),
    params: Joi.object({
        patientID: Joi.number().integer().min(1).required()
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

export const responseSchema = Joi.object({
    array : Joi.array().items(schema)
});

export const workflow = async (req: Request, res: Response) => {
    const {
        Patient
    } = models

    const patients : PatientModel[] = await Patient.findAll({
        limit: 10,
        where:{
                gender:GENDER.FEMALE
        },
        include:{

            model : DiagnoseModel,

        },

            logging:true,
        }
    );
    res.json(patients)
    console.log(patients)

}


/*
export const workflow = (req: Request, res: Response) => {

    res.json({
        patients: [
            {
                "id": 0,
                "firstName": "string",
                "lastName": "string",
                "birthdate": "2022-03-25T11:28:35.964Z",
                "weight": 0,
                "height": 0,
                "identificationNumber": "string",
                "gender": "MALE",
                "age": 0,
                "personType": "ADULT",
                "substanceAmount": 0,
                "diagnose": {
                    "id": 0,
                    "name": "string",
                    "description": "string",
                    "substance": {
                        "id": 0,
                        "name": "string",
                        "timeUnit": "SECOND",
                        "halfLife": 0
                    }
                }
            }
        ],
        "pagination": {
            "limit": 0,
            "page": 0,
            "totalPages": 0,
            "totalCount": 0
        }
    })

}

*/