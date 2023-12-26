import * as path from "path"

const config = {
  projectName: "taro-issus",
  date: "2023-11-6",
  cache: {
    enable: false,
  },
  alias: {
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/images": path.resolve(__dirname, "..", "src/images"),
    "@/models": path.resolve(__dirname, "..", "src/models"),
  },
  // designWidth: 375,
  designWidth(input) {
    // 配置 NutUI 375 尺寸
    if (input?.file?.replace(/\\+/g, "/").indexOf("@nutui") > -1) {
      return 375
    }
    // 全局使用 Taro 默认的 750 尺寸
    return 750
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: ["@tarojs/plugin-html"],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  compiler: {
    type: "webpack5",
    prebundle: {
      enable: false,
      exclude: ["@nutui/nutui-react-taro", "@nutui/icons-react-taro"],
    },
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ["nut-"],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: "module",
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    // esnextModules: ['nutui-react'],
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ["nut-"],
        },
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: "module",
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"))
  }
  return merge({}, config, require("./prod"))
}
