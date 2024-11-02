const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const issueBookSchema = new Schema(
  {
    title: {
      type: String,
      required: true, // Required for a book issuance
    },
    bookId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book', // Replace 'Book' with the name of your book model
      required: true
    },
    studentId: {
      type: String,
      required: true, // Ensure student ID is provided
      index: true, // Index for faster searching
    },
    course: {
      type: String,
      required: true, // Ensure course is provided
    },
  
    book: {
      type: String,
      required: true, // Ensure the book reference is provided
      index: true, // Index for faster searching
    },
    contact: {
      type: Number,
      required: true, // Ensure review is provided
    },
    issueDate: {
      type: Date,
      default: Date.now, // Automatically set to current date
    },
    dueDate: {
      type: Date,
      default: function () {
        // Set the default due date to 14 days after the issue date
        const issueDate = this.issueDate || Date.now();
        return new Date(issueDate.getTime() + 14 * 24 * 60 * 60 * 1000);
      },
    },
    returnDate: {
      type: Date,
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

const Booking = mongoose.model("Booking", issueBookSchema);
module.exports =Booking;