/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack: (config, { webpack, isServer, dev }) => {
    const envs = {}

    Object.keys(process.env).forEach((env) => {
      if (env.startsWith("NEXT_PUBLIC_")) {
        envs[env] = process.env[env]
      }
    })

    if (!isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.env": JSON.stringify(envs),
        }),
      )
    }

    // Exclude test files from the build
    if (!dev && !isServer) {
      const testFiles = /(test|spec)\.(js|jsx|ts|tsx)$/
      config.module.rules.push({
        test: testFiles,
        loader: "ignore-loader",
      })
    }

    return config
  },
}
