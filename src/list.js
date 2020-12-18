const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const URL = 'https://jobs.github.com/positions.json';

export function getList() {
    return fetch(PROXY_URL+URL)
      .then(data => data.json())
  }