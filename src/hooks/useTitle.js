import { useEffect } from "react";
const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - Pick 'n Book`
    },[title]);

    return null;
}
 
export default useTitle;