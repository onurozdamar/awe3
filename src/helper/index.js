export function formatDate(dateStr) {
  if (!dateStr) {
    return '';
  }

  var date = new Date(dateStr);
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();

  return dd + '/' + mm + '/' + yyyy;
}

export function formatTime(dateStr) {
  if (!dateStr) {
    return '';
  }

  var date = new Date(dateStr);
  var h = String(date.getHours()).padStart(2, '0');
  var m = String(date.getMinutes()).padStart(2, '0');

  return h + ':' + m;
}
