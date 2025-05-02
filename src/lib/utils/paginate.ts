export function Paginate_maker(
  total_Products: Array<any> | null,
  items_per_page: number = 5,
  page_number: number
) {
  if (!total_Products || total_Products.length === 0) {
    return { totalPages: 0, products: [] };
  }

  if (items_per_page <= 0 || page_number <= 0) {
    throw new Error("items_per_page and page_number must be greater than 0");
  }

  const totalPages = Math.ceil(total_Products.length / items_per_page);
  const startIndex = (page_number - 1) * items_per_page;
  const endIndex = Math.min(startIndex + items_per_page, total_Products.length);

  const products = total_Products.slice(startIndex, endIndex);
  return { totalPages, products };
}

export function Paginate_number_maker(
  total_Page: number,
  current_page: number
) {
  if (total_Page <= 5)
    return Array.from({ length: total_Page }, (_, i) => i + 1);
  
  if (total_Page > 3 && current_page > 3) {
    if (current_page == total_Page-1 ) return [1,"...", total_Page-3,total_Page-2,total_Page-1,total_Page];
    if (current_page < total_Page - 1) {
      if (current_page + 1 == total_Page - 1) {
        return [1, "...", current_page-1,current_page, current_page + 1, total_Page];
      } else {
        return [1, "...", current_page-1,current_page, current_page + 1, "...", total_Page];
      }
    } else {
      return [1, "...", total_Page-3,total_Page-2,total_Page-1,total_Page];
    }
  }
  return [1, 2, 3,4, "...", total_Page];
}
