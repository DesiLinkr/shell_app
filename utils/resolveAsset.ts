export function resolveAsset(remoteName: string, assetPath: string): string {
  const envKey = remoteName.toUpperCase(); // e.g., "auth_app" → "AUTH_APP"
  const baseUrl = process.env[envKey];

  if (!baseUrl) {
    console.warn(`Missing environment variable: ${envKey}`);
    return assetPath;
  }

  return new URL(assetPath, baseUrl + "/").toString();
}
