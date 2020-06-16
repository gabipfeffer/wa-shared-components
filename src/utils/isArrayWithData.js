export default function isArrayWithData(entity) {
  return Boolean(entity) && Array.isArray(entity) && entity.length > 0;
}
