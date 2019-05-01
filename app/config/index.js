import productionConfig from './production';
import developmentConfig from './development';
const env = process.env.NODE_ENV;
const isProd = env === 'production';

const config = isProd ? productionConfig : developmentConfig;

export default config;
