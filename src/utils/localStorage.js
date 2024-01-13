// setItem - записати
// getItem - отримати
// removeItem - видалити

const price = 500;

addDataLocalStorage();

function addDataLocalStorage() {
  localStorage.setItem("price", JSON.stringify(price));
}

function getDataFromLocalStorage(key) {
  const itemJson = localStorage.getItem(key);
  const item = JSON.parse(itemJson);
  return item;
}

console.log(getDataFromLocalStorage("price"));

clearLocalStorage();

function clearLocalStorage() {
  localStorage.clear();
}
