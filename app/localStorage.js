export class LocalDb {
  constructor() {
    this.sessionKey = '';
  }

  static getSessions() {
    const itemGot = localStorage.getItem(this.sessionKey);
    if (itemGot !== null) {
      return JSON.parse(itemGot);
    }
    return null;
  }

  static getUser() {
    const itemGot = localStorage.getItem(this.sessionKey);
    if (itemGot) {
      return JSON.parse(itemGot).user;
    }
    return null;
  }

  static isUserLoggedIn() {
    const accessToken = LocalDb.getAccessToken();
    const refreshToken = LocalDb.getRefreshToken();
    if (accessToken && refreshToken) return true;
    return false;
  }

  static setTokens(tokens) {
    const { refreshToken, accessToken } = tokens;
    accessToken && localStorage.setItem('accessToken', accessToken);
    refreshToken && localStorage.setItem('refreshToken', refreshToken);
  }

  static clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  static getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  static getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }
}

export default LocalDb;
