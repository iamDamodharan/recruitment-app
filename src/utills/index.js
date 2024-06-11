import React from "react";
import axios from "axios";

const baseURL = "https://66582a755c3617052647267f.mockapi.io";

const header = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const initialize = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
  error: null,
};

const useGetAllCadidates = () => {
  const [data, setDate] = React.useState(initialize);

  const getAllCandidates = () => {
    axios
      .get(`${baseURL}/candidate-detail`, header())
      .then((res) => {
        setDate({ ...initialize, isSuccess: true, data: res.data });
      })
      .catch((error) => {
        setDate({ ...initialize, isError: true, error });
      });
  };

  React.useEffect(() => {
    setDate({ ...initialize, isLoading: true });
    getAllCandidates();
  }, []);

  return data;
};

const useGetCadidateById = () => {
  const [data, setDate] = React.useState(initialize);

  const getCandidateById = (id) => {
    setDate({ ...initialize, isLoading: id ? true : false });
    if (!id) {
      return;
    }
    axios
      .get(`${baseURL}/candidate-detail/${id}`, header())
      .then((res) => {
        setDate({ ...initialize, isSuccess: true, data: res.data });
      })
      .catch((error) => {
        setDate({ ...initialize, isError: true, error });
      });
  };

  React.useEffect(() => {
    setDate({ ...initialize });
  }, []);

  return [data, getCandidateById];
};

const useEditCandidateInfo = () => {
  const [data, setDate] = React.useState(initialize);

  const editCandidateInfo = (id, data) => {
    setDate({ ...initialize, isLoading: id && data ? true : false });
    if (!id || !data) {
      return;
    }
    axios
      .put(`${baseURL}/candidate-detail/${id}`, JSON.stringify(data), header())
      .then((res) => {
        setDate({ ...initialize, isSuccess: true, data: res.data });
      })
      .catch((error) => {
        setDate({ ...initialize, isError: true, error });
      });
  };

  React.useEffect(() => {
    setDate({ ...initialize });
  }, []);

  return [data, editCandidateInfo];
};

export { useGetAllCadidates, useGetCadidateById, useEditCandidateInfo };
