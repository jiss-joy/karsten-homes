/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production'
      readonly NEXT_PUBLIC_ENV: 'development' | 'staging' | 'production'
    }
  }
}

export {}
