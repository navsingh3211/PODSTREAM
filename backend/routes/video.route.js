import express from "express";
import videoUpload from "../middlewares/videoUpload.js";
import {addVideo} from '../controllers/video.controller.js';

const router = express.Router();

const routes = ()=>{
  router.get('/',(req,res)=>{
    return res.status(200).json({
      message:"Welcome to vidio upload module"
    })
  });
  router.post('/upload',videoUpload.single('video'),addVideo);

  return router;
}

export default routes;