export type useEditCategoryProps = {
  title: string;
  englishTitle: string;
  image: string;
  id: string;
};

export type CategoryRowProps = {
  index: number;
  item: any;
};

export type EditCategoryModalProps = {
  id: string;
  title: string;
  englishTitle: string;
  image: string;
};
