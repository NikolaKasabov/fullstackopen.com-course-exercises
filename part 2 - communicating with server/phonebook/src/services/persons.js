import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

function getAll() {
  return axios.get(baseUrl)
    .then(res => res.data);
}

function create(newObject) {
  return axios.post(baseUrl, newObject)
    .then(res => res.data);
}

function update(id, newObject) {
  return axios.put(`${baseUrl}/${id}`, newObject)
    .then(res => res.data);
}

export default {
  getAll,
  create,
  update,
};
