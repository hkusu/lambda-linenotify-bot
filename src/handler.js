import dotenv from 'dotenv'
import axios from 'axios'
import querystring from 'querystring'

dotenv.config() // read configuration from .env file

export default (event, context, callback) => {
  const token = process.env.TOKEN // get token from .env file

  axios(
    {
      method: 'post',
      url: 'https://notify-api.line.me/api/notify',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: querystring.stringify({
        message: 'おはようございます！',
      }),
    }
  )
   .then(res => callback(null, res.data))
   .catch(err => callback(err))
}
