# LLM Agent 指令

這是 Link Shortener 專案的 AI Agent 指令文件入口點。

## ⚠️ 重要：程式碼產生前必讀

**在產生或修改任何程式碼之前，必須先閱讀 `/docs` 目錄下的相關說明檔。**

這是強制性的工作流程：
1. 📖 **先閱讀** - 根據任務類型，閱讀對應的 .md 文件
2. 💻 **再撰寫** - 依照文件中的規範和最佳實踐撰寫程式碼
3. ✅ **檢查** - 確保程式碼符合文件中的所有要求

## 📖 完整文件

完整的 agent 指令文件位於 `/docs` 目錄中，涵蓋專案的所有開發標準和最佳實踐。

## 📚 文件列表

- [Clerk 驗證規範](docs/clerk-authentication.md) - 使用 Clerk 進行用戶驗證的標準和最佳實踐
- [shadcn/ui 元件規範](docs/shadcn-ui-components.md) - 使用 shadcn/ui 元件的標準和最佳實踐

## 🎯 快速開始

### 對於開發者
1. 設定開發環境（參考專案概覽）
2. 熟悉程式碼標準和命名約定
3. 參考對應的模式文件進行開發

## 💡 核心原則

### TypeScript 優先
- 啟用嚴格模式
- 明確的型別定義
- 避免使用 `any`

### Next.js App Router
- 預設使用伺服器元件
- 客戶端元件僅在需要互動時使用
- 適當的資料快取策略

### 安全性
- 所有 API 路由必須驗證
- 驗證所有使用者輸入
- 保護敏感資料

### 效能
- 程式碼分割與懶載入
- 圖片和字體優化
- 資料庫查詢優化

## 🔧 常用命令

```bash
# 開發
npm run dev              # 啟動開發伺服器
npm run build           # 建構專案
npm run lint            # 執行 ESLint

# 資料庫
npx drizzle-kit generate # 產生遷移
npx drizzle-kit migrate  # 套用遷移

# 測試
npm test                 # 執行測試
npm run test:coverage    # 測試覆蓋率
```

## 📋 程式碼檢查清單

每次提交前：
- [ ] TypeScript 型別檢查通過
- [ ] ESLint 無錯誤
- [ ] 測試通過
- [ ] 遵循程式碼標準
- [ ] 安全性已考量

## 🌐 語言與術語

本專案使用 **zh-TW (繁體中文)** 作為主要語言，並遵循以下術語對照：

- create → 建立
- object → 物件
- function → 函式
- class → 類別
- code → 程式碼
- library → 函式庫
- package → 套件
- documentation → 文件

完整的術語對照請參考各文件內容。

---

**最後更新：2026年1月14日**

詳細內容請參閱 `/docs` 目錄中的各個文件。
