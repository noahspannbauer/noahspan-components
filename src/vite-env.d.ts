/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly STORYBOOK_API_URL: string;
  readonly STORYBOOK_CLIENT_ID: string;
  readonly STORYBOOK_TENANT_ID: string;
  readonly STORYBOOK_REDIRECT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
