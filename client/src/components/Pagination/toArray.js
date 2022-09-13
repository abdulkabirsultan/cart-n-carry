const paginateCount = (products) => {
  const productLength = products.products?.length;
  const length = products?.totalProducts / productLength;
  return Array.from({ length }, (_, i) => i);
};
export default paginateCount;
