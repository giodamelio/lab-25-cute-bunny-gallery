/* eslint global-require: "off" */
module.exports = function(app) {
  require('./animal-image-link/animal-image-link')(app);
  require('./animal-image-thumbnail/animal-image-thumbnail')(app);
};
