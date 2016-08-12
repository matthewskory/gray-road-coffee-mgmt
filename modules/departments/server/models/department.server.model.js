'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Department Schema
 */
var DepartmentSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Department name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  department: {
    type: String,
    default: ''
  },
  manager: {
    type: String,
    default: 'Date.now'
  },
  sales: {
    type: Number,
    default: ''
  },
  topseller: {
    type: String,
    default: ''
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Department', DepartmentSchema);
