/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test'
      readonly NEXT_PUBLIC_ENV: 'development' | 'staging' | 'production'
      readonly BASIC_AUTH_USER: string
      readonly BASIC_AUTH_PASSWORD: string
    }
  }
}

export {}
