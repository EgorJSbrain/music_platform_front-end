export const ROUTES = {
  root: '/',
  home: '/home',
  settings: '/settings',
  storage: '/storage',
  login: '/login',
  registration: '/registration',
}

export enum RouteNames {
  root = 'root',
  home = 'home',
  registration = 'registration',
  login = 'login',
  settings = 'settings',
  storage = 'storage',
}

export const LOCAL_STORAGE_ITEMS = {
  accessToken: 'accessToken',
}

export const enum ButtonVariants {
  text = "text",
  contained = "contained"
}

export const ButtonVariant = {
  [ButtonVariants.text]: ButtonVariants.text,
  [ButtonVariants.contained]: ButtonVariants.contained
}

export const enum UploadFileType {
  image = "image",
  audio = "audio"
}