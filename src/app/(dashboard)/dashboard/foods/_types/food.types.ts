export type EditFoodModalProps = {
  id: string;
  title: string;
  price: string;
  image: string;
  rating: string;
  ingredients: string[];
  category: any;
};

export type UseEditFoodProps = {
  title: string;
  price: string;
  image: string;
  rating: string;
  ingredients: string[];
  id: string;
  category: any;
};

export type FoodRowProps = {
  index: number;
  item: any;
  page: string | number;
};
