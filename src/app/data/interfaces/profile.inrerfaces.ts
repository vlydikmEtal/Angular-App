export interface Profile {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string | null,
  rating: {
    rate: number,
    count: number
  }
}
