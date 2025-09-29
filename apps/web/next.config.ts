import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.{glsl,vs,fs,vert,frag}": {
        loaders: [
          "raw-loader",
          "glslify",
          {
            loader: "glslify-loader",
            options: {
              transform: ["glslify-import"],
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
