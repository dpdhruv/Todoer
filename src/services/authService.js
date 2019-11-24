import axios from 'axios';

let base_url='';

if(process.env.NODE_ENV==="development"){
  base_url="http://localhost:3000/";
}else{
  base_url="https://todoeerapi.herokuapp.com/"
}




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