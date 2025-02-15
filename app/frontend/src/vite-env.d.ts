/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SECRET: string
    readonly VITE_BACKEND_PORT: number
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }