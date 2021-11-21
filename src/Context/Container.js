 import React,{useState} from "react";
 import { MyContext } from "./context";

const Container = (props) => {
    const [user,setUser] = useState(null)


  return <MyContext.Provider value={{user,setUser}}>{props.children}</MyContext.Provider>;
 };

 export default Container;
