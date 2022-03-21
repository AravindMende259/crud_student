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
   
  





