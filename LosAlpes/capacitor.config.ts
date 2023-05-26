import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.losAlpes.app',
  appName: 'los-alpes-store',
  webDir: 'dist/los-alpes',
  server: {
    androidScheme: 'https'
  }
};

export default config;
