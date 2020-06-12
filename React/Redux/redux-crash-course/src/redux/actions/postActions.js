import * as types from "./types";

export const fetchPosts = () => (dispatch) => {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: types.FECTH_POSTS,
        payload: posts,
      })
    );
};

