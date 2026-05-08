# 图灵考试学生端首页

静态实现版的 Figma 学生端“我的考试”页面，使用原生 HTML、CSS 和 JavaScript 构建。

## 文件

- `index.html`：页面结构与静态容器
- `styles.css`：布局、视觉样式与响应式规则
- `script.js`：考试卡片、日历、公告和筛选逻辑
- `AGENTS.md`：本地 Codex 工作规则

## 使用方式

1. 直接在浏览器中打开 `index.html` 预览页面。
2. 通过顶部筛选区、状态切换和关键词搜索体验交互。
3. 如需继续贴近 Figma，可继续微调间距、文案或状态数据。

## 回写到 Figma

这个工作区现在默认按 Figma 写入流程协作。你之后如果想把当前页面重新写回 Figma，直接给我下面任意一种指令即可：

- `把当前页面写回 Figma，新建一个 screen：<Figma 文件链接>`
- `把 /Users/iriskong/Desktop/Code/codex/index.html 回写到这个 Figma 文件：<Figma 文件链接>`
- `把当前页面更新到这个 Figma frame：<带 node-id 的 Figma 链接>`
- `按现在代码的样式回写到 Figma，但尽量复用原文件里的设计系统组件`

推荐你提供两样信息：

- 页面入口：例如 `index.html` 或具体页面文件
- Figma 目标：文件链接，或者带 `node-id` 的具体 frame 链接

执行时会默认遵循这些规则：

- 先读取代码结构，再分区块写入 Figma
- 优先复用已有组件、变量、文字样式和 Auto Layout
- 每个大区块单独生成并校验，避免一次性大脚本写坏
- 返回创建或更新后的节点 ID，方便你继续让我细调
