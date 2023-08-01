export interface IUser {
  _id: string,
  firstName: string,
  email: string,
  lastName: string,
}

export interface IAuthData {
  password: string,
  email: string,
}

export interface IRegistrationData extends IAuthData {
  firstName: string,
  lastName: string,
}

export interface ILoginData extends IAuthData {}