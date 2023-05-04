import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../store/language/langSlice";

const useLangStore = () => {
  const dispatch = useDispatch();
  const { esp } = useSelector((state) => state.lang);

  const setLang = () => {
    dispatch(changeLang((esp == true) ? false : true))
  };

  return {
    setLang
  }
};

export default useLangStore;
