import { Request, Response } from 'express'




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