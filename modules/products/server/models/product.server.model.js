'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Product name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  manufacturer: {
    type: String,
    default: ''
  },
  upc: {
    type: Number,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  inventory: {
    type: Number,
    default: ''
  },
  price: {
    type: Number,
    default: ''
  },
  cost: {
    type: Number,
    default: ''
  },
  department: {
    type: String,
    default: ''
  },
  imgsrc: {
    type: String,
    default: ''
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Product', ProductSchema);
