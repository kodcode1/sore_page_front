export interface ProductInterface {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
    }
    export interface Category {
        id: number 
        name: string
        image: string
        creationAt: string
        updatedAt: string
      }