import { Request, Response } from 'express'
import Joi from "joi";
import {models} from "../../../db";
import {PatientModel} from "../../../db/models/patients";

export const requestSchema = Joi.object({
    body: Joi.object(),
    query:Joi.object(),
    params: Joi.object({
        patientID: Joi.number().integer().min(1).required(),
        age: Joi.string()
    })
})


export const workflow = async(req: Request, res: Response) => {

    const ID = req.params.patientID
    const{
        Patient
    } = models

    const deletePatient = await Patient.destroy({
        where: {
            id:ID,
                }
        }).then(function (deletePatient){
        if(deletePatient===1){
            res.status(200).json({message:'Patient deleted successfully',type:'SUCCESS'})
        }
        else
        {
            res.status(404).json({message:'Not possible to delete patient ',type:'FAILED'})
        }
    })
        .catch(function (error){
            res.status(500).json(error)
        });

    }