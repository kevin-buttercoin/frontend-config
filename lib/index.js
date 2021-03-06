var config, logger

logger = require('logmimosa');

config = require('./config');

module.exports = function(mimosaConfig) {
  if (mimosaConfig.frontend == null)
    mimosaConfig.frontend = config.defaults().frontend

  return function(req, res, next) {
    res.frontend = mimosaConfig.frontend
    next()
  };
};
