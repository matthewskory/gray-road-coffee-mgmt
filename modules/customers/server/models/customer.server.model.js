'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Customer name',
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

  birthdate: {
  type: Date,
  default: '',
  },

  lastpurchase: {
  type: Date,
  default:'',
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

mongoose.model('Customer', CustomerSchema);
