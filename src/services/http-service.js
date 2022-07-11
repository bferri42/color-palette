const axios = require("axios");
const URL = "http://localhost:8080/api";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

function addPalette(title, colors) {
  return api.post(`/api/palettes`, { title, colors });
}

const http = {
  addPalette,
};

function useHttp() {
  return http;
}

export { useHttp };
