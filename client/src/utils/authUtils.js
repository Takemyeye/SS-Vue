export function isTokenAvailable() {
  return !!localStorage.getItem('token');
}