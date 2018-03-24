var config = {};

config.port = process.env.PORT || '3000';
config.host = process.env.HOST || 'localhost';

config.canvasURL = process.env.CANVAS_URL;
config.client_id = process.env.CANVAS_KEY;
config.client_secret = process.env.DEVELOPER_TOKEN;
config.redirectURL = process.env.REDIRECT_URL;

config.canvasAdminAuthToken= process.env.CANVAS_ADMIN_AUTH_TOKEN;
config.canvasPageResults = process.env.CANVAS_PAGE_RESULTS || "100";
config.points_id = process.env.POINTS_ID || '190';

config.redisURL = process.env.REDIS_URL || '';

config.mongo_username = process.env.MONGO_USERNAME || 'localhost',
config.mongo_password = process.env.MONGO_PASSWORD || '',
config.local_mongo_database = 'mongodb://localhost:27017/oneyxs_dev'

//configure MongoDB urls here - course ID to mongoDB URL
config.mongoURLs = {
    '38082': 'mongodb://'+config.mongo_username+':'+config.mongo_password+'@ds121189.mlab.com:21189/onexys_blue' || config.local_mongo_database,
    '10184': 'mongodb://'+config.mongo_username+':'+config.mongo_password+'@ds223509.mlab.com:23509/onexys_dev' || config.local_mongo_database,
}

config.cookieduration = 1000 * 60 * 60 * 24; //one hour

module.exports = config;
