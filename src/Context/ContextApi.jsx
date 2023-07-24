/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { FetchApiData } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoriesData(selectCategories);
  }, [selectCategories]);
  const fetchSelectedCategoriesData = (query) => {
    setLoading(true);
    FetchApiData(`search/?q=${query}`).then(({ contents }) => {
      setSearchResult(contents);
      setLoading(false);
    });
  };
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSelectCategories,
        selectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
