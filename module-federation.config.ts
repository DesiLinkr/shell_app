const auth_app_url = "https://auth-desilinkr.netlify.app";

export const mfConfig = {
  name: "shell_app",

  filename: "remoteEntry.js",
  remotes: {
    auth_app: `auth_app@${auth_app_url}/remoteEntry.js`,
  },
  shared: ["react", "react-dom"],
};
