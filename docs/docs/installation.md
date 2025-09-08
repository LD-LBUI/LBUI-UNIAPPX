# 安装 <Badge type="warning" text="HBuilderX 3.9+" />

::: warning
**HBuilder X 版本要求**

因为 LBUI 默认使用 UTS ，所以需要 HBuilder X 3.9.0+ 以上版本。
:::

## Easycom

LBUI 原生支持 easycom ，也是最为推荐的安装方式。

### 1. 导入组件
你可以到 HBuilder X 的插件市场搜索到 LBUI，也可以点击链接进入 LBUI 组件页面。

### 2. 引入 CSS 样式文件
LBUI 将默认样式导出到 `LD-LBUI/styles/index.scss` 文件中，因此需要在 `uni.scss` 中引入该文件。

在 `uni.scss` 中添加以下内容：

```scss
@forward "~@/uni_modules/LD-LBUI/styles/index.scss";
```

### 3. H5使用
H5使用需要额外将样式导入到 `app.uvue` 中

在 `app.uvue` 中添加以下内容：
```scss
@forward "~@/uni_modules/LD-LBUI/styles/index.scss";
```

### 4.使用组件
完成如上步骤后，恭喜你！🎉🎉🎉🎉 已经完成了组件库的安装，接下来你可以直接在页面中使用组件啦！

是不是很简单呢？😆😆😆😆

## GITHUB

如果你需要保持组件库为最新状态，你可以采用 GITHUB 安装的方式。

### 1.克隆/下载仓库

```bash
git clone https://github.com/LD-LBUI/LBUI-UNIAPPX.git
```

### 2.复制依赖

将示例项目中 `uni_modules/LD-LBUI` 目录拷贝到你的项目中 `uni_modules/` 目录下。

### 3. 引入 CSS 样式文件
LBUI 将默认样式导出到 `LD-LBUI/styles/index.scss` 文件中，因此需要在 `uni.scss` 中引入该文件。

在 `uni.scss` 中添加以下内容：

```scss
@forward "~@/uni_modules/LD-LBUI/styles/index.scss";
```

### 4. H5使用
H5使用需要额外将样式导入到 `app.uvue` 中

在 `app.uvue` 中添加以下内容：
```scss
@forward "~@/uni_modules/LD-LBUI/styles/index.scss";
```