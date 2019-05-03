import productionConfig from './production';
import developmentConfig from './development';
const env = process.env.FIREBASE_ENV;
const isProd = env === 'production';
console.log(env);
const config = isProd ? productionConfig : developmentConfig;

export default config;
