import { BackendConsts } from "./BackendConsts";

export const Backend = {
    calculate
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.status !== 200)
    {
        console.log("Ошибка " + response.status)
        return {error: true, status: response.status}
    }
    return response.json(); // parses JSON response into native JavaScript objects
  }

function calculate(dto) {
    return postData(BackendConsts.URL + 'calculations/process', dto) 
}