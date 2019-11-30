import axios from 'axios';

let base_url=process.env.NODE_ENV==='production'?process.env.REACT_APP_PROD_API_URL:process.env.REACT_APP_DEV_API_URL;
console.log("Base url",base_url)




export const authentication = async (user) =>{
  try{
    const {data} = await axios.post(`${base_url}auth/user_login`,user);
    //console.log(data)
    return data;
  }
  catch(error){
    return error;
  }
}