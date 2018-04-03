var playlist = {odesza: 'intro'}

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  
  return obj;
}

function removeFromPlaylist(obj, key) {
  delete obj.value;
  
  return obj;
}