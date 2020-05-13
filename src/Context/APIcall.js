import React,{createContext, useState, useEffect} from 'react';
import Axios from 'axios'

export const APIcallContext = createContext();

const APIcallContextProvider = (props) => {
    const [data1,setData1] = useState({})
    const [data2,setData2] = useState([])

    useEffect(()=>{
        Axios.get('https://wygtwu2p2j.execute-api.ap-south-1.amazonaws.com/test').then((res)=>{
            setData1(res.data.dataForTopFourBoxes)
            setData2(res.data.dataForBottomRightTable)
        })
    },[])
    return ( 
        <APIcallContext.Provider value={{data1,data2}}>
            {props.children}
        </APIcallContext.Provider>
     );
}
 
export default APIcallContextProvider;