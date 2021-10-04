export function filterNotEqualTo(
  filterIn: Array<object>,
  compareTo: any,
  argumentToCompare: string,
) {
  const arrayFiltered = filterIn.filter(
    (item: object) => item[argumentToCompare] !== compareTo,
  );
  return arrayFiltered;
}
