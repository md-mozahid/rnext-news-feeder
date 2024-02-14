import { useState } from "react";
import { CategoryContext } from "../context";

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState({});

  return (
    <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
