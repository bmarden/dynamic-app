import type { ExpoConfig, ConfigContext } from '@expo/config';
import 'dotenv/config';

const getEnvVar = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not defined`);
  }
  return value;
};

const getBundleIdentifier = () => getEnvVar('BUNDLE_IDENTIFIER');
const getIcon = () => getEnvVar('APP_ICON');
const getAppName = () => getEnvVar('APP_NAME');

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'dynamic-app',
  slug: getAppName(),
  version: '1.0.0',
  orientation: 'portrait',
  icon: `./assets/${getIcon()}.png`,
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: getBundleIdentifier()
  },
  android: {
    adaptiveIcon: {
      foregroundImage: `./assets/adaptive-${getIcon()}.png`,
      backgroundColor: '#ffffff'
    },
    package: getBundleIdentifier()
  },
  extra: {
    config: {

    }
  }
});
