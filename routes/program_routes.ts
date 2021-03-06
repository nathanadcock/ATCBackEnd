import {Program } from "../models/index.js";
import { Router, Request, Response, NextFunction } from 'express';
 
export default Router()
.get('/', async (req: Request, res: Response)=>{
    try{
        let programs = await Program.find({});
        return res.json({success:true, "data":programs});
    }
    catch(err: any){
        return res.json({success:false, err}); 
    }
})
.get('/:id', async(req: Request, res: Response)=>{
    try {
        let programs = await Program.findById(req.params.id);
        return res.json({ success: true, "data": programs });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.post('/', async(req: Request, res: Response)=>{
    try {
        let savedProgram = await new Program(req.body).save();
        return res.json({ success: true, "data": savedProgram._id });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }

})
.delete('/', async(req: Request, res: Response)=>{
    try {
        await Program.deleteMany({});
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.delete('/:id', async(req: Request, res: Response)=>{
    try {
        await Program.findByIdAndDelete(req.params.id);
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
});

