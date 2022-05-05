import { Request, Response } from 'express'
import * as Joi from "joi"
import {GENDER} from "../../../utils/enums"
import {models} from "../../../db";
import {PatientModel} from "../../../db/models/patients";
import {object} from "joi";
import {size} from "lodash";

export const schema = Joi.object({
    firstName  : Joi.string().max(100).required(),
    lastName   : Joi.string().max(100).required(),
    birthdate  : Joi.date().required(),
    weight     : Joi.number().min(1).max(200).required(),
    height     : Joi.number().min(1).required(),
    identificationNumber: Joi.string().length(12).pattern(/^[a-zA-Z0-9]*$/).required(),
    gender     : Joi.string().valid(GENDER).required(),
    diagnoseID : Joi.number().min(1).required()
})

export const requestSchema = Joi.object({
    body: Joi.object(),
    query:Joi.object(),
    params: Joi.object({
        patientID: Joi.number().integer().min(1).required()
    })
})
export const workflow = async (req: Request, res: Response) => {
    const {ID,firstname,lastname,birthdate, weight,height,
        identificationNumber,gender,diagnoseID}= req.body

    const{
        Patient
    } = models


const count = await Patient.count()
    const [newPatient,created] = await Patient.findOrCreate({
        where:{
            id:6
        },
        defaults:{
            firstName:'Lubica',
            lastName: 'Zidekova',
            birthdate: '1999-04-11',
            weight: '70',
            height:'158',
            identificationNumber:'990324pe37qs',
            gender:GENDER.FEMALE,
            diagnoseID:1

            /*

            firstName:firstname,
            lastName: lastname,
            birthdate:birthdate,
            weight:weight,
            height:height,
            identificationNumber:identificationNumber,
            gender:gender,
            diagnoseID:diagnoseID*/


        },
            logging:true,
        }

    )
    const count2 = await Patient.count()
        if(count == count2 - 1){
            res.status(200).json({'messages': [ {message:'Patient added successfully ',type:'SUCCESS',newPatientID: newPatient.id.toString()}]})
        }
        else
        {
            res.status(404).json({'messages': [{message:'Not possible to add patient ',type:'FAILED',newPatientID: newPatient.id.toString()}]})
        }

}