import qs from 'querystring';
const CLIENT_ID = 'e57d1e4978b04512b596bdca2157263f';
const ROOT_URL = `https://accounts.spotify.com`;
const REDIRECT_URI = 'http://localhost:8080/callback';

export default {
  login: () => {
    const queryString = {
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scopes: 'user-read-email',
      response_type: 'token'
    }
    window.location = `${ROOT_URL}/authorize?${qs.stringify(queryString)}`;
  }
}