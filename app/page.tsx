import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignUpButton } from "@clerk/nextjs";
import { Link2, Zap, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const { userId } = await auth();
  
  // 如果用戶已登入，重新導向至 dashboard
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center md:py-32">
        <Badge variant="secondary" className="mb-4">
          🚀 免費使用
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mb-6">
          輕鬆縮短連結
          <span className="block text-primary mt-2">追蹤每一次點擊</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8 md:text-xl">
          強大的短網址服務，讓您的連結更簡潔、更易分享。即時追蹤點擊數據，提升行銷效率。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <SignUpButton mode="modal">
            <Button size="lg" className="text-base">
              立即開始使用
            </Button>
          </SignUpButton>
          <Button size="lg" variant="outline" className="text-base" asChild>
            <a href="#features">了解更多</a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              為什麼選擇我們？
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              提供最完整的短網址解決方案，助您輕鬆管理和追蹤連結
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Link2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>快速縮短</CardTitle>
                <CardDescription>
                  一鍵生成短網址，立即使用
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  只需貼上長網址，系統會自動生成簡短易記的短網址，讓分享更輕鬆。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>極速重新導向</CardTitle>
                <CardDescription>
                  毫秒級的訪問速度
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  採用最新技術架構，確保用戶點擊短網址後能夠快速跳轉到目標頁面。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>數據分析</CardTitle>
                <CardDescription>
                  深入了解點擊行為
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  追蹤點擊次數、來源和時間分布，幫助您做出更明智的行銷決策。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>安全可靠</CardTitle>
                <CardDescription>
                  企業級安全保障
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  採用業界標準的安全措施，保護您的連結和數據不被濫用。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              簡單三步驟
            </h2>
            <p className="text-lg text-muted-foreground">
              開始使用只需要幾秒鐘
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">註冊帳號</h3>
              <p className="text-muted-foreground">
                快速註冊，無需信用卡
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">建立短網址</h3>
              <p className="text-muted-foreground">
                貼上長網址，一鍵生成
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">分享與追蹤</h3>
              <p className="text-muted-foreground">
                分享連結並查看數據
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            準備好開始了嗎？
          </h2>
          <p className="text-lg mb-8 opacity-90">
            立即註冊，開始縮短您的第一個連結
          </p>
          <SignUpButton mode="modal">
            <Button size="lg" variant="secondary" className="text-base">
              免費註冊
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Link Shortner. 版權所有。</p>
        </div>
      </footer>
    </div>
  );
}
