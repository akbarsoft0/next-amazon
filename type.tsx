export interface ProductProps {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}
export interface StateProps {
  productData: [];
  favoriteData: [];
  allProducts: [];
  userInfo: null | string;
  next: any;
}
