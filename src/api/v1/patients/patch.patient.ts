import { Request, Response } from 'express'

import * as Joi from "joi"
import {GENDER} from "../../../utils/enums";
import {models} from "../../../db";
import {PatientModel} from "../../../db/models/patients";

export const requestSchema = Joi.object({
    body: Joi.object(),
    query:Joi.object(),
    params: Joi.object({
        patientID: Joi.number().integer().min(1).required()
    })
})

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



export const workflow = async(req: Request, res: Response) => {

    const{
        Patient
    } = models

    const [changedPatient] = await Patient.update(
        {firstName: 'Lubica Alexandra'},

        {  where: {id: 6},
            logging:true,
        }

    )

    if(changedPatient)
    {
            res.status(200).json({
                    'messages': [
                        {message:'Patient updated successfully ',
                            type:'SUCCESS'}]


            })
    }else {
        res.status(404).json({
            'messages': [
                {
                    message: 'Unable to update patient ',
                    type: 'FAILED'
                }]

        })
    }

}