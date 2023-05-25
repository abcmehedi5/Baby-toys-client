import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Baby toys`;
  }, [title]);
};

export default useTitle;
