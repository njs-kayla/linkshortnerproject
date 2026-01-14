# Clerk 驗證規範

本文件定義了 Link Shortener 專案中使用 Clerk 進行用戶驗證的標準和最佳實踐。

## 📋 核心原則

### 唯一驗證方案
- 專案使用 **Clerk** 作為唯一的用戶驗證解決方案
- **禁止** 使用其他驗證方法（NextAuth、自建驗證等）
- 所有用戶驗證邏輯必須透過 Clerk 處理

### Modal 登入模式
- 註冊和登入功能 **必須** 以 modal（彈窗）形式啟動
- 使用 `mode="modal"` 屬性配置 `SignInButton` 和 `SignUpButton`
- 避免使用獨立的登入/註冊頁面

## 🔐 頁面保護策略

### 受保護頁面
- `/dashboard` 頁面是受保護的路由
- 用戶必須登入才能訪問 `/dashboard`
- 使用 Clerk 的 middleware 或 `auth()` 進行保護

### 重新導向邏輯
- **已登入用戶訪問首頁** → 自動重新導向至 `/dashboard`
- **未登入用戶訪問 /dashboard** → 重新導向至首頁或顯示登入 modal

## 🛠️ 實作指南

### 基本配置

#### 1. Root Layout 設定
```tsx
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="zh-TW">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

#### 2. Modal 登入按鈕
```tsx
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navigation() {
  return (
    <nav>
      <SignedOut>
        <SignInButton mode="modal">
          <button>登入</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button>註冊</button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
```

#### 3. 首頁重新導向（已登入用戶）
```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();
  
  if (userId) {
    redirect("/dashboard");
  }
  
  return <div>首頁內容</div>;
}
```

#### 4. Dashboard 頁面保護
```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/");
  }
  
  return <div>Dashboard 內容</div>;
}
```

### Middleware 配置（推薦）

建立 `middleware.ts` 檔案：

```typescript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
const isPublicRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  
  // 保護 /dashboard 路由
  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  
  // 已登入用戶訪問首頁時重新導向
  if (isPublicRoute(req) && userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
```

## 📦 必需套件

確保 `package.json` 包含以下依賴：

```json
{
  "dependencies": {
    "@clerk/nextjs": "^6.36.7"
  }
}
```

## 🔑 環境變數

在 `.env.local` 中配置：

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# 可選：自定義重新導向路徑
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
```

## ✅ 檢查清單

在實作驗證功能時，確認以下項目：

- [ ] 使用 Clerk 作為唯一驗證方案
- [ ] `SignInButton` 和 `SignUpButton` 設定 `mode="modal"`
- [ ] `/dashboard` 路由受到保護
- [ ] 已登入用戶訪問首頁時正確重新導向至 `/dashboard`
- [ ] 未登入用戶訪問 `/dashboard` 時正確重新導向
- [ ] 環境變數正確配置
- [ ] Middleware 正確配置（如果使用）

## 🚫 禁止事項

- ❌ 使用 NextAuth 或其他驗證函式庫
- ❌ 建立獨立的 `/sign-in` 或 `/sign-up` 頁面
- ❌ 自建 JWT 驗證邏輯
- ❌ 繞過 Clerk 的驗證流程
- ❌ 在客戶端元件中直接檢查驗證狀態進行重新導向

## 📚 參考資源

- [Clerk Next.js 官方文件](https://clerk.com/docs/quickstarts/nextjs)
- [Clerk App Router 指南](https://clerk.com/docs/references/nextjs/overview)
- [Clerk Middleware 文件](https://clerk.com/docs/references/nextjs/clerk-middleware)

---

**最後更新：2026年1月14日**
