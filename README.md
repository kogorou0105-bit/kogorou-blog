# Kogorou Blog

Kogorou Blog 是一个个人技术博客 / 笔记站点。

这个项目是在 [Docusaurus](https://docusaurus.io/) 的基础上改造的，保留了 Docusaurus 的文档、博客、标签、主题和构建能力，并在此基础上调整了首页、导航、页脚、博客侧边栏和内容结构。

## 主要内容

- `博客`：较完整的前端技术文章
- `笔记`：技术学习、项目记录和问题排查
- `关于`：站点说明
- `标签`：按主题浏览博客内容

## 技术栈

- Docusaurus 3
- React 19
- TypeScript
- MDX

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run start
```

默认会在本地启动 Docusaurus 开发服务，并支持页面热更新。

## 构建

```bash
npm run build
```

构建产物会生成到 `build/` 目录。

## 类型检查

```bash
npm run typecheck
```

## 项目结构

```text
blog/                  博客文章
docs/                  笔记文档
src/pages/             首页、关于页等独立页面
src/css/custom.css     全局样式和主题覆盖
src/theme/             Docusaurus 主题组件覆盖
static/                静态资源
docusaurus.config.ts   Docusaurus 站点配置
sidebars.ts            文档侧边栏配置
```

## 当前改造点

- 改造首页为单屏技术博客入口
- 调整顶部导航和底部栏信息架构
- 替换默认 Docusaurus 教程内容
- 新增前端方向博客文章
- 博客侧边栏支持年份和月份分组
- 浏览器标签标题固定为 `Kogorou Blog`

## License

This project is built on top of Docusaurus. Site content and customization are maintained for personal use.
