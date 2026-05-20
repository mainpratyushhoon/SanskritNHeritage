(function() {
  'use strict';

  async function fetchJSON(path) {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Unable to load ${path}: ${response.statusText}`);
    }
    return response.json();
  }

  window.DataLoader = {
    fetchJSON
  };
})();
