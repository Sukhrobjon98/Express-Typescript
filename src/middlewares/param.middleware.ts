import { NextFunction, Request, Response } from "express";

function ParmaMiddleware(request:Request, response:Response, next:NextFunction){
   if(request.params.id=='5'){
      next();
   }
    else{
        response.status(400).send({
            status:400,
            message:"Bad Request"
        })
    }
}

export default ParmaMiddleware;