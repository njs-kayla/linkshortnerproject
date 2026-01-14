# shadcn/ui 元件規範

本文件定義了 Link Shortener 專案中使用 shadcn/ui 元件的標準和最佳實踐。

## 📋 核心原則

### 唯一 UI 元件庫
- 專案使用 **shadcn/ui** 作為唯一的 UI 元件庫
- **禁止** 建立自定義 UI 元件
- 所有 UI 需求必須使用 shadcn/ui 提供的元件

### 元件使用策略
- 優先使用 shadcn/ui 的現成元件
- 如需特定元件，使用 shadcn CLI 新增至專案
- 僅透過 Tailwind CSS 調整樣式，不修改元件核心結構

## 🛠️ 實作指南

### 新增元件

使用 shadcn CLI 新增所需元件：

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

### 元件使用範例

#### 按鈕元件
```tsx
import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <Button variant="default">點擊我</Button>
  );
}
```

#### 卡片元件
```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>標題</CardTitle>
        <CardDescription>描述文字</CardDescription>
      </CardHeader>
      <CardContent>
        <p>內容</p>
      </CardContent>
    </Card>
  );
}
```

#### 對話框元件
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>開啟對話框</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>標題</DialogTitle>
          <DialogDescription>描述文字</DialogDescription>
        </DialogHeader>
        <p>對話框內容</p>
      </DialogContent>
    </Dialog>
  );
}
```

## 🎨 樣式自訂

### 使用 Tailwind CSS
透過 `className` 屬性調整元件樣式：

```tsx
import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <Button className="w-full bg-blue-600 hover:bg-blue-700">
      全寬按鈕
    </Button>
  );
}
```

### 使用 variant 和 size
利用元件內建的變體和尺寸選項：

```tsx
import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <>
      <Button variant="default">預設</Button>
      <Button variant="destructive">危險</Button>
      <Button variant="outline">外框</Button>
      <Button variant="ghost">幽靈</Button>
      <Button size="sm">小尺寸</Button>
      <Button size="lg">大尺寸</Button>
    </>
  );
}
```

## ❌ 禁止事項

### 不可建立自定義元件
```tsx
// ❌ 錯誤：建立自定義按鈕元件
export function CustomButton({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 rounded">
      {children}
    </button>
  );
}
```

```tsx
// ✅ 正確：使用 shadcn/ui 元件
import { Button } from "@/components/ui/button";

export function Example({ children }) {
  return (
    <Button className="bg-blue-500">
      {children}
    </Button>
  );
}
```

### 不可修改元件核心結構
```tsx
// ❌ 錯誤：修改 shadcn 元件的內部實作
// 在 components/ui/button.tsx 中大幅修改結構
```

```tsx
// ✅ 正確：透過組合和樣式擴展
import { Button } from "@/components/ui/button";

export function IconButton({ icon, children }) {
  return (
    <Button className="flex items-center gap-2">
      {icon}
      {children}
    </Button>
  );
}
```

## 📚 常用元件列表

專案中常用的 shadcn/ui 元件：

- `button` - 按鈕
- `card` - 卡片
- `dialog` - 對話框
- `form` - 表單
- `input` - 輸入框
- `label` - 標籤
- `select` - 選擇器
- `table` - 表格
- `toast` - 提示訊息
- `dropdown-menu` - 下拉選單
- `avatar` - 頭像
- `badge` - 徽章
- `sheet` - 側邊欄
- `tabs` - 分頁

## 🔍 資源連結

- [shadcn/ui 官方文件](https://ui.shadcn.com/)
- [shadcn/ui 元件範例](https://ui.shadcn.com/examples)
- [Tailwind CSS 文件](https://tailwindcss.com/docs)

---

**最後更新：2026年1月14日**

遵循這些規範能確保專案的 UI 一致性和可維護性。
