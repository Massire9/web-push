import withPWAInit from "@ducanh2912/next-pwa";


const withPWA = withPWAInit({
    dest: "public",
  });

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
});

export default nextConfig;
