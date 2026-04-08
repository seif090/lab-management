import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Bot,
  LayoutDashboard,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import { FormPanel } from "@/components/form-panel";
import { ScreenCard } from "@/components/screen-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { screenService } from "@/services/screen-service";

export default function HomePage() {
  const screens = screenService.getAll();
  const featuredScreens = screenService.getFeatured();
  const categories = screenService.getCategories();

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6">
        <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <Card className="overflow-hidden bg-card/90">
            <CardContent className="p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/60 px-3 py-1 text-xs font-semibold text-accent-foreground">
                <ShieldCheck className="size-3.5" />
                Ready for Vercel
              </div>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
                Clinical Nexus
                <span className="mt-2 block text-primary">مرجع بصري كامل لشاشات LIMS</span>
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-muted-foreground sm:text-base">
                المشروع مبني بـ Next.js App Router وTypeScript وTailwind، ويعرض كل
                الشاشات المرجعية العربية داخل راوتر موحد مع دعم RTL، بالإضافة إلى
                نماذج تفاعل خفيفة للتحقق من الحقول والتنقل بين الشاشات.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <MetricCard
                  icon={LayoutDashboard}
                  label="إجمالي الشاشات"
                  value={`${screens.length}`}
                />
                <MetricCard
                  icon={Microscope}
                  label="واجهات تشخيصية"
                  value={`${screens.filter((screen) => screen.category === "التشخيص").length}`}
                />
                <MetricCard
                  icon={Bot}
                  label="شاشات بنماذج"
                  value={`${screens.filter((screen) => screen.hasForm).length}`}
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/screens/splash_screen">
                  <Button size="lg">
                    ابدأ العرض
                    <ArrowLeft className="size-4" />
                  </Button>
                </Link>
                <Link href="/screens/patient_portal_login">
                  <Button size="lg" variant="secondary">
                    فتح شاشة الدخول
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <FormPanel />
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-primary">Featured</p>
            <h2 className="mt-1 text-2xl font-extrabold text-foreground">
              لقطات رئيسية من النظام
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredScreens.map((screen) => (
              <ScreenCard key={screen.slug} screen={screen} />
            ))}
          </div>
        </section>

        {categories.map((category) => (
          <section key={category.key} className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-primary">{category.key}</p>
                <h2 className="mt-1 text-2xl font-extrabold text-foreground">
                  {category.label}
                </h2>
              </div>
              <div className="rounded-full bg-card px-4 py-2 text-sm font-semibold text-muted-foreground ambient-shadow">
                {category.screens.length} شاشة
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {category.screens.map((screen) => (
                <ScreenCard key={screen.slug} screen={screen} />
              ))}
            </div>
          </section>
        ))}

        <Card className="bg-card/90">
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold text-primary">Run Notes</p>
              <h2 className="mt-1 text-xl font-extrabold text-foreground">
                جاهز للتشغيل والنشر
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                شغّل <code className="font-latin">npm run dev</code> للتطوير المحلي و
                <code className="font-latin"> npm run build</code> للتحقق النهائي قبل
                النشر على Vercel.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-accent/60 px-4 py-3 text-sm font-semibold text-accent-foreground">
              <BadgeCheck className="size-4" />
              Build-safe mock prototype
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof LayoutDashboard;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] bg-muted/90 p-4">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-card text-primary ambient-shadow">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground">{label}</p>
          <p className="font-latin text-2xl font-extrabold text-foreground">{value}</p>
        </div>
      </div>
    </div>
  );
}
