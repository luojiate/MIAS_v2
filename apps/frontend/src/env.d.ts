/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_FEATURE_FLAG_NEW_UI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
