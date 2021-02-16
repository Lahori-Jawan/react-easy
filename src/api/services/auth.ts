import { axios } from '@/app/config';
import AuthEndpoints from '../endpoints/auth';
import tryy from '@/utils/betterTry';
import { ILogin } from '@/app/types';

class AuthService {
  private authEndpoints: AuthEndpoints;

  constructor() {
    this.authEndpoints = new AuthEndpoints();
  }

  async loginUser(credentials: ILogin) {
    return await tryy(axios.post(this.authEndpoints.LOGIN, credentials));
  }
}

export default AuthService;
