'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Employee Schema
 */
var EmployeeSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Employee name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },    
  address: {
    type: String,
    default: '',
  },
  phonenumber: {
    type: Number,
    default: '',
  },
  email: {
  type: String,
  default: '',
  },

  hiredate: {
  type: Date,
  default: '',
  },

  department: {
  type: String,
  default: ''
  },

  imagesrc: {
  type: String,
  default: ''
  },

  notes: {
  type: String,
  default: '',
  },
  
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Employee', EmployeeSchema);
