export default function(err) {
  if (Array.isArray(err.errorMessage) && err.errorMessage.indexOf('Socket closed') !== -1) {
    console.log('Socket closed');
  } else {
    throw err;
  }
}
