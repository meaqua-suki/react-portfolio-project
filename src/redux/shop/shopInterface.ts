export interface ShopItem {  
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

export type ShopItems = ShopItem[];

export interface Collection {
  id: number,
  title:string,
  routeName:string,
  items:ShopItems
}

export type Collections = Collection[];



export interface ShopProps {
  collections:Collection[]
}

