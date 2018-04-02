const CONST = require("../../config/constant");
const moment = require('moment');

exports.getCurrentDate = function() {
  return moment().format(CONST.DEFAULT_TIME_FORMAT);
};
