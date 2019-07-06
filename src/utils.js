export function isSearch(list, searchKey) {
  if (searchKey) {
    searchKey = searchKey.toLowerCase()
    return list.filter(item =>
      Object.keys(item).some(k =>
        typeof item[k] === 'string'
          ? item[k].toLowerCase().includes(searchKey)
          : false,
      ),
    )
  }
  return list
}
