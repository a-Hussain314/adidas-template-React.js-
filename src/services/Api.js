import axios from "axios";

const  api = async (setter) => { await axios.get(`https://api.jsonbin.io/b/5ec392ddf7c0f67062cf1652`).then(res => {
    setter(res.data);
})
}


export default api;

