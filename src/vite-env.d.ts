/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_BASE_URL: string;
	VITE_RAPID_API_KEY: string;
	VITE_FIREBASE_API_KEY: string;
	VITE_AUTH_DOMAIN: string;
	VITE_PROJECT_ID: string;
	VITE_STORAGE_BUCKET: string;
	VITE_MESSAGING_SENDER_ID: string;
	VITE_ID: string;
	VITE_ADMIN_TOKEN: string;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.webp";
