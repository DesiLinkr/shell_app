const auth_app_url = process.env.MF_URL || "http://localhost:3001";

export const mfConfig = {
  name: "shell_app",

  filename: "remoteEntry.js",
  remotes: {
    auth_app: `auth_app@${auth_app_url}/remoteEntry.js`,
  },
  shared: ["react", "react-dom"],
};
