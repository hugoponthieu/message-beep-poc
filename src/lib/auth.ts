export default class Jwt {
  private static instance: Jwt;

  private constructor() {}

  static getInstance(): Jwt {
    if (!Jwt.instance) {
      Jwt.instance = new Jwt();
    }
    return Jwt.instance;
  }

  getToken(): string | null {
    const tokenKey = `oidc.user:${import.meta.env.VITE_AUTHORITY_URL}:${
      import.meta.env.VITE_CLIENT_ID
    }`;
    const storedData = localStorage.getItem(tokenKey);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return parsedData.access_token || null;
    }
    return null;
  }
}
