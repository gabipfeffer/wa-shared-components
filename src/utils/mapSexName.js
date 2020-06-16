export default function mapSexName(sexName) {
  switch(sexName) {
    case 'Men':
      return 'Male'
    case 'Women':
      return 'Female'
    default:
      return null
  }
}
