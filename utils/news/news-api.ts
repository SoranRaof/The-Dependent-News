import axios from "axios";

const baseURL = "https://sorans-backend-project.onrender.com/api";

export const fetchAllArticles = async () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleById = async (id: number) => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data;
  });
};

// fetchAllArticles().then((data) => console.log(data));
