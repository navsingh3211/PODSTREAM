import MyVideos from '../models/video.model.js';

export const addVideo = async (req,res,next)=>{
  const {title,description} = req.body;
  const videoPath = req.file.path;
  // console.log(req.file,'videoPath');
  try{
    const createVideo = await MyVideos.create({
      title:title,
      description:description,
      filename:req.file.filename,
      videoUrl:videoPath
    })
    res.status(200).json({
      success:true,
      message:'video uploaded success!',
      createVideo
    })
  }catch(error){
    res.status(400).json({
      success:false,
      message:'video upload failed!'
    })
  }
}