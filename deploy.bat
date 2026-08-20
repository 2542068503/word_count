@echo off
chcp 65001 > nul
echo ===================================================
echo     WordCount - Cloudflare Pages 一键免费部署
echo ===================================================
echo.
echo 正在检查环境并启动 Cloudflare Pages 部署流程...
echo.

npx -y wrangler pages deploy . --project-name word-counter

echo.
echo 部署流程已完成！
pause
