//TODO: Campos opcionales
export interface IUser {
  id: string
  email: string
  name: string
  surname: string
  bio?: string
  location?: string
  phone_prefix: string
  phone: string
  picture?: string
  show_reviews: boolean
  rating: number
}
