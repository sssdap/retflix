/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string;
  // больше переменных окружения...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
