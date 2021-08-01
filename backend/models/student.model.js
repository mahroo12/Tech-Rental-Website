const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const studentSchema = new Schema(
    {
    title:{type:String, required: true, trim:true, minlength: 3},
    studentid: {type:Number, required: true},
    studentemail:{type:String, required: true},
    major:{type:String, required: false},
    start:{type:Date, required: true},
    end:{type:Date, required: true},
    },
    
    {
        timestamps:true,
    }

);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;