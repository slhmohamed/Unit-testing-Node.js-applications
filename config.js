module.exports.environment = process.env.NODE_ENV;
module.exports.baseUrl = process.env.BASE_URL;
module.exports.port = process.env.PORT;

module.exports.db = {
  name: process.env.DB_NAME || '',
  host: process.env.DB_HOST || '',
  port: process.env.DB_PORT || ''
};

module.exports.corsUrl = process.env.CORS_URL;

 
 