import { Request, Response } from 'express'




export const workflow = (req: Request, res: Response) => {

    res.json({
        "messages": [
            {
                "message": "string",
                "type": "SUCCESS"
            }
        ]
    })
}