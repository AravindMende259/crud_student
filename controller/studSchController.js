import Student from '../model/studSch.js';
import to from "await-to-js";
import bodyParser from 'body-parser'

// Get all users
export const getStudents = async (request, response) => {
  // Step -1 // Test API
  // response.send('Code for Interview');
  try {
    // finding something inside a model is time taking, so we need to add await
    const stud = await Student.find();
    response.status(200).json(stud);
  } catch (error) {
    response.status(404).json({ message: error.message })
  }
}
    //Save data of the user in database
    export const addStudent = async (request, response) => {
      // retreive the info of user from frontend
      const stud = request.body;
      console.log("inside")
  
      const newStudent = new Student(stud);
      try{
          await newStudent.save();
          response.status(201).json(newStudent);
      } catch (error){
          response.status(409).json({ message: error.message});     
      }
  }
   

  export const getStudentById = async (request, response) => {
    try{
        const stud = await Student.findById(request.params.id);
        response.status(200).json(stud);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editStudent = async (request, response) => {
  //   let stud = await Student.findById(request.params.id);
  //  // stud = request.body;
  //   console.log(stud,"usdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf")
  //   const editStudent = new Student(stud);
  //   try{
  //       await Student.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, editStudent);
        
  //       response.status(201).json(editStudent);
  //   } catch (error){
  //       response.status(409).json({ message: error.message});     
  //   }

  let stud;
  [err, stud] = await to(
    Student.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(request.params.id) },
      request.body
    )
  );
  if (err) {
    return response.status(500).json({ Error: err });
  }
  return response.status(200).json(stud);

}

// deleting data of user from the database
export const deleteStudent = async (request, response) => {
    try{
        await Student.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
  





