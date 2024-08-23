import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.segurarse.misegurarse',
  appName: 'MiSegurarse',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    
  },
  ios: {
    contentInset: "always"
  }
  // server: {
  //   androidScheme: "https",
  //   cleartext: true,
  //   allowNavigation: [
  //     "https://segurarse.com.ar/qa/admin/api/*"
  //   ]
  // }
};

export default config;
