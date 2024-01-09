function filterPlanets(arr, selPlanet) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.includes(selPlanet)) {
      return arr[i];
    }
  }
}
export { filterPlanets };
