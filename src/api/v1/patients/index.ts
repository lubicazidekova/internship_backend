import { Router } from 'express'
import validationMiddleware from '../../../middlewares/validationMiddleware'


import * as GetPatients from './get.patients'
import * as PostPatients from './post.patient'
import * as GetPatient from './get.patient'
import * as PatchPatient from './patch.patient'
import * as DeletePatient from './delete.patient'
import passport from "passport";

const router = Router()

export default () => {
   /* // index.ts
    router.get('/',
        passport.authenticate('jwt-api'),
        validationMiddleware(GetPatients.schema),
        GetPatients.workflow)*/
    router.get('/', GetPatients.workflow)
    router.get('/:patientID',GetPatient.workflow)
    router.patch('/:patientID',PatchPatient.workflow)
    router.post('/',PostPatients.workflow)
    router.delete('/:patientID',DeletePatient.workflow)

    return router
}
