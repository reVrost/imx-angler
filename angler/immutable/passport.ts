import { blockchainData, config, passport } from "@imtbl/sdk";

const BASE_URL = process.env.BASEURL || "http://localhost:3000";
export const passportInstance = new passport.Passport({
  baseConfig: {
    environment: config.Environment.SANDBOX,
  },
  clientId: "WtXUevuPFHrvJyXo7cvk736u8xmAzGHC",
  redirectUri: BASE_URL + "/redirect",
  logoutRedirectUri: BASE_URL + "/logout",
  audience: "platform_api",
  scope: "openid offline_access email transact",
  logoutMode: "silent",
});

export const blockchainDataInstance = new blockchainData.BlockchainData({
  baseConfig: {
    environment: config.Environment.SANDBOX,
    apiKey: process.env.IMMUTABLE_API_KEY,
  },
});
