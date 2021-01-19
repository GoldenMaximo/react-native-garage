interface Image {
  url: string
}

export interface CarProps {
  id: string
  model: string
  make: string
  year: string
  coverURL: string
  starred?: boolean
  image?: Image
}