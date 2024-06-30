import axios from "axios";
const baseUrl = "/api/example"; //added the new endpoint
// could be localhost:3001/api/example above is relative url

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (dataObject) => {
  const request = axios.post(baseUrl, dataObject);
  return request.then((response) => response.data);
};

const deleteEntry = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const update = (id, dataObject) => {
  const request = axios.put(`${baseUrl}/${id}`, dataObject);
  return request.then((response) => response.data);
};

export default { getAll, create, deleteEntry, update };
