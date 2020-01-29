import axios from 'axios'


class Api{
    static async getUserInfor(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }catch(err){
            console.log('Erro na API!!!');
        }
        
    }
}

Api.getUserInfor('HemersonRafael');
Api.getUserInfor('HemersonRafaels');