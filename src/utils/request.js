export function makePostReqToServer(state, url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.responseType = 'text';
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = () => resolve(xhr.response);
    xhr.send(JSON.stringify(state));
  });
}
