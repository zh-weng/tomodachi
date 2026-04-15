# 🎮 Tomodachi Life 性格测试仪

> 回答 20 道题，精确生成你的 Mii 性格滑块设定，直接抄录到游戏机里。

**🔗 在线体验：[zh-weng.github.io/tomodachi](https://zh-weng.github.io/tomodachi)**

---

## 关于

这是一个**实用工具**而非泛化的性格测试。它将 20 道行为场景题精确映射到 Tomodachi Life 官方的 5 个性格维度，最终输出你应该在 DS/3DS 中调整到的 **8 格滑块位置**，让你的 Mii 获得期望的性格类型。

### 16 种官方性格类型

| 派系 | 性格 |
|------|------|
| 🟡 **温和派** | 天真无邪、笑口常开、温柔体贴、悠悠哉哉 |
| 🔴 **活力派** | 众人焦点、勇往直前、欢乐快活、热血沸腾 |
| 🟢 **沉稳派** | 谨慎寡言、认真勤勉、坚忍不拔、踏实内敛 |
| 🔵 **利落派** | 独立率直、自信果断、雷厉风行、严肃领袖 |

### 5 个测量维度

| 维度 | 左端 | 右端 |
|------|------|------|
| 行动 | 从容 | 利落 |
| 话语 | 温和 | 严厉 |
| 表情 | 淡然 | 丰富 |
| 想法 | 慎重 | 简单 |
| 总体来说 | 通情达理 | 性格张扬 |

---

## 技术栈

| 技术 | 说明 |
|------|------|
| [SolidJS](https://solidjs.com) | 响应式 UI 框架 |
| Vanilla CSS | 零依赖样式，手工设计 |
| [Vite](https://vitejs.dev) | 构建工具 |
| GitHub Actions | 自动部署到 GitHub Pages |

---

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

---

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

```bash
git add .
git commit -m "your changes"
git push origin main
```
