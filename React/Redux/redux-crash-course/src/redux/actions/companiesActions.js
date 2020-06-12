import * as types from "./types";

export const getCompanies = () => (dispatch) => {
  fetch("http://localhost:5000/project/companies")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: types.GET_COMPANIES,
        payload: posts.data,
      })
    );
};

export const createProject = (postData) => (dispatch) => {
  fetch("http://localhost:5000/project/add/companies", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: types.SET_COMPANIES,
        payload: post.data,
      })
    );
};
