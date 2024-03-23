import mongoose from "mongoose";


const database = async (mongoUrl)=>{
  try{
    const con = await mongoose.connect(mongoUrl,{
      dbName:'streamVideo'
    });
    console.log(`🔗🔗🔗🔗 MongoDB Connected: ${con.connection.host} 🔗🔗🔗🔗`);
    console.log('Connection to the database is successful✅.');
  }catch(error){
    console.error(
      `🔗‍💥🔗‍💥🔗‍💥🔗‍💥  ${error.message} 🔗‍💥🔗‍💥🔗‍💥🔗‍💥`
    );
    console.log('Could not connect to the database.', error);
    process.exit(1);
  }
}
export default database;