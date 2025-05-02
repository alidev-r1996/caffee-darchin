export type EditFoodModalProps = {
  id: string;
  title: string;
  price: string;
  image: string;
  rating: string;
  ingredients: string[];
};

export type UseEditFoodProps = {
  title: string;
  price: string;
  image: string;
  rating: string;
  ingredients: string[];
  id: string;
};

export type FoodRowProps = {
  index: number;
  item: any;
};
