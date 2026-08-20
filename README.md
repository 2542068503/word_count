# WordCount · 在线字数统计工具 (Apple Design)

基于 Apple Human Interface Guidelines 设计的高性能、实时在线字数统计工具。纯前端客户端运算，零网络请求传输文字，保障极致隐私。

## ✨ 核心特性

- 🍎 **Apple Design 美学**：
  - 动态磨砂玻璃卡片（`backdrop-filter: blur(24px)`）
  - SF Pro 系统级排版层级
  - 触感微交互与物理弹簧动效（`cubic-bezier(0.16, 1, 0.3, 1)`）
  - 浅色/深色模式自适应并支持持久化保存
- 📊 **全维度实时统计**：
  - **总字数**（中文字数 + 英文单词数）
  - **中文字数**（Unicode CJK 汉字准确匹配）
  - **英文单词数**（支持连字符与缩略词识别）
  - **数字统计**（数字词组与独立数字位数）
  - **标点符号**（中英文全半角标点精确统计）
  - **总字符数**（含空格 / 不含空格）
  - **有效段落数 & 物理行数**
  - **阅读/演讲时长预估**（静读 ~400字/分，演说 ~150字/分）
  - **内容组成百分比分布条**
- 🛠️ **文本增强工具集**：
  - 首尾去除空格、压缩连续多余空行、去除所有空格
  - 全角转半角、全部大写/小写/词首大写
  - 一键复制、一键清空、加载示例范文
  - 拖拽或选择本地 `.txt`/`.md`/`.json` 等文件一键读取
  - 一键导出详细的字数统计分析文本报告
- ⚡ **100% 隐私安全与秒开**：
  - 无需任何后端服务，纯客户端计算
  - 零依赖、零编译打包负担

---

## 🚀 免费部署至 Cloudflare Pages

### 方式一：使用 Wrangler 命令行一键部署（推荐）
在项目目录下直接运行：
```bash
npx wrangler pages deploy . --project-name word-counter
```
根据提示登录 Cloudflare 账号后，即可在 5 秒内获得全球 CDN 加速的专属永久 HTTPS 域名（如 `https://word-counter-xxx.pages.dev`）。

### 方式二：双击运行一键部署脚本
双击运行目录下的 `deploy.bat` 脚本即可。

### 方式三：Cloudflare 控制台直接拖拽
1. 打开 [Cloudflare Pages 控制台](https://dash.cloudflare.com/)
2. 点击 **Workers & Pages** -> **Create application** -> **Pages** -> **Upload assets**
3. 将当前 `word_count` 文件夹整体拖拽上传，即可完成上线。
