import React, { useContext, useEffect, useState } from "react";
import { CaptionDataContext } from "../context/CaptionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptionProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { caption, setCaption } = useContext(CaptionDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/caption-login");
    }
  }, [token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/caption/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setCaption(response.data.caption);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      localStorage.removeItem("token");
      navigate("/caption-login");
    });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptionProtectedWrapper;
