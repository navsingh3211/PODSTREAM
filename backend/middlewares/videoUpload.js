import multer from "multer";
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirnamee = dirname(__filename);
const directoryPath = join(__dirnamee, './../public/videos/');

//if folder for storing is not exit,create it
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req,file,cb){
    if(file.fieldname === 'video'){
      cb(null,directoryPath);
    }
  },
  filename: function (req,file,cb){
    cb(null,file.originalname);
  }
});

const filedFilter = (req,file,cb)=>{
  if(file.mimetype === 'video/mp4'){
    cb(null,true);
  }else{
    cb(null,false);
  }
}

const videoUpload = multer({storage,filedFilter});
export default videoUpload;