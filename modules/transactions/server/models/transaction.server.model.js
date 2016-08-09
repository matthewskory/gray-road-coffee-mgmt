'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Transaction Schema
 */
var TransactionSchema = new Schema({
  customerName: {
    type: String,
    default: '',
    required: 'Please add customer name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Transaction', TransactionSchema);
