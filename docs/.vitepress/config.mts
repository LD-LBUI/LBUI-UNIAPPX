import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LandBlue UI - LBUI",
  description: "一个基于 UNIAPP-X 的组件库, 主题可调, 使用 UTS, 尽量多端适配",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/introduction" },
      { text: "组件", link: "/components/introduction" },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "介绍",
          items: [{ text: "LandBlue UI", link: "/docs/introduction" }],
        },
        {
          text: "快速上手",
          items: [
            { text: "安装", link: "/docs/installation" },
            { text: "主题定制", link: "/docs/theme" },
            { text: "更新日志", link: "/docs/changelog" },
          ],
        },
      ],

      "/components/": [
        {
          text: "组件",
          items: [{ text: "按钮", link: "/components/button" }],
        },
      ],
    },

    footer: {
      message: "Apache2.0 Licensed",
      copyright: "Copyright © 2022-present LandonBlue",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/LD-LBUI/LBUI-UNIAPPX" },
    ],

    // 中文配置
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
        hour12: false,
        timeZone: "Asia/Shanghai",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换为亮色主题",
    darkModeSwitchTitle: "切换为暗色主题",
  },
});
