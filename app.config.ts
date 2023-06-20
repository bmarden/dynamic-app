import type { ExpoConfig, ConfigContext } from '@expo/config';
import 'dotenv/config';

const getBundleIdentifier = () => {
  const { BUNDLE_IDENTIFIER } = process.env;
  if (!BUNDLE_IDENTIFIER) {
    throw new Error('BUNDLE_IDENTIFIER is not defined');
  }
  return BUNDLE_IDENTIFIER;
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'dynamic-app',
  slug: 'dynamic-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
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
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    package: getBundleIdentifier()
  },
});
