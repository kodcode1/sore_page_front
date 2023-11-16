
    export interface ProductInterface {
        _id: string
        id: number
        title: string
        rating: number
        price: number
        description: string
        images: string[]
        creationAt: string
        updatedAt: string
        category: Category
      }
      
      export interface Category {
        id: number 
        name: string
        image: string
        creationAt: string
        updatedAt: string
      }