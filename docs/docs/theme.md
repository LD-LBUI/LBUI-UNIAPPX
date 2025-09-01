# 主题

LBUI 使用 SCSS 预处理，可自定义主题。所有的主题样式都定义于 `～@/uni_modules/LD-LBUI/styles/_tokens.scss` 文件中。

## 主题 TOKEN

如果你了解 SCSS，你可以直接修改主题 TOKEN 来改变主题。

默认主题 TOKEN 如下：

```scss
// 主题颜色
$color-primary: #007aff !default;
$color-secondary: #5856d6 !default;
$color-tertiary: #34c759 !default;
$color-success: #00bc12 !default;
$color-warning: #ff9500 !default;
$color-danger: #f20c00 !default;
$color-info: #374151 !default;

// 中性色（灰阶基准）
$gray-0: #ffffff;
$gray-50: #f9fafb;
$gray-100: #f3f4f6;
$gray-200: #e5e7eb;
$gray-300: #d1d5db;
$gray-400: #9ca3af;
$gray-500: #6b7280;
$gray-600: #4b5563;
$gray-700: #374151;
$gray-800: #1f2937;
$gray-900: #111827;
$gray-1000: #000000;

$border-width: (
  0: 0,
  1: 1px,
  2: 2px,
) !default;

// 字体族
$font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
  "Noto Sans CJK SC", Arial, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol", sans-serif !default;
$font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace !default;

// 字号
$font-sizes: (
  xs: 12px,
  sm: 14px,
  md: 16px,
  lg: 20px,
  xl: 24px,
  "2xl": 30px,
  "3xl": 36px,
) !default;

// 行高 / 字重 / 字距
$line-heights: (
  tight: 1.2,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.7,
) !default;
$font-weights: (
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
) !default;
$letter-spacings: (
  tighter: -0.2px,
  tight: -0.1px,
  normal: 0,
  wide: 0.2px,
  wider: 0.4px,
) !default;

$border-radius: (
  none: 0,
  sm: 4px,
  md: 8px,
  lg: 16px,
  xl: 32px,
  full: 9999px,
) !default;

$spacing: (
  none: 0,
  xs: 4px,
  sm: 8px,
  md: 12px,
  lg: 16px,
  xl: 24px,
  "2xl": 32px,
  "3xl": 40px,
) !default;

$shadow: (
  sm: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px,
  md: rgba(99, 99, 99, 0.2) 0px 4px 16px 0px,
  lg: rgba(99, 99, 99, 0.2) 0px 8px 24px 0px,
) !default;
```

## 样式覆盖

如果你不想对核心 TOKENS 进行直接的修改，你还可以在 `uni.scss` 中覆盖 TOKENS。
覆盖 TOKENS 的方式有很多种，你可以选择使用 `@mixin` 或者 `@function` 亦或者直接将 `:root`或 `page` 下的变量进行直接覆盖。

以下是导出到 `:root` 中的样式变量，你也可以直接使用或覆盖:

```scss
--primary-base: #007aff;
--primary-text: #ffffff;
--primary-hover: #006ee6;
--primary-active: #0064d1;
--primary-subtle: #80bdff;
--primary-border: #99caff;
--success-base: #00bc12;
--success-text: #ffffff;
--success-hover: #00a910;
--success-active: #009a0f;
--success-subtle: #80de89;
--success-border: #99e4a0;
--warning-base: #ff9500;
--warning-text: #ffffff;
--warning-hover: #e68600;
--warning-active: #d17a00;
--warning-subtle: #ffca80;
--warning-border: #ffd599;
--danger-base: #f20c00;
--danger-text: #ffffff;
--danger-hover: #da0b00;
--danger-active: #c60a00;
--danger-subtle: #f98680;
--danger-border: #fa9e99;
--info-base: #374151;
--info-text: #ffffff;
--info-hover: #323b49;
--info-active: #2d3542;
--info-subtle: #9ba0a8;
--info-border: #afb3b9;
--gray-0: #ffffff;
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
--gray-1000: #000000;
--bg: #ffffff;
--bg-muted: #f9fafb;
--text: #1f2937;
--text-sub: #4b5563;
--border: #e5e7eb;
```
