import React, { useEffect } from "react";
import { fetchMe } from "./features/auth/authThunks";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  return <div className="text-red-400">Blog App</div>;
};

export default App;
