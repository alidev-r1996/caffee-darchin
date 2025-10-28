export type useEditCategoryProps = {
  title: string;
  englishTitle: string;
  image: string;
  id: string;
};

export type CategoryRowProps = {
  index: number;
  item: any;
  page: string | number;
};

export type EditCategoryModalProps = {
  id: string;
  title: string;
  englishTitle: string;
  image: string;
};

export type DashboardPagePropsType = {
  params?: Promise<{
    slug: string;
  }>
  searchParams?: Promise<{
    page: string
  }>;
};


export type RemoveCategoryModalProps = {
  categoryId: string;
  categoryTitle: string;
};
