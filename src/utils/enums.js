const baseUrl = 'http://localhost:3000';

const headers = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const methods = {
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  GET: 'GET'
};

const defaultLat = 52.5200;
const defaultLng = 13.4050;

export {
  baseUrl,
  headers,
  methods,
  defaultLat,
  defaultLng
}