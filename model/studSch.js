//var mongoose = require('mongoose');
import mongoose from 'mongoose';
//Define a schema
var Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
            id: Number,
    student_name: String,
    student_age: Number
    
});

const Student = mongoose.model('Student', studentSchema);

export default Student;