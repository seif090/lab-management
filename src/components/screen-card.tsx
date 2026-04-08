import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ScanSearch } from "lucide-react";
import type { Screen } from "@/lib/screens";
import { Card, CardContent } from "@/components/ui/card";

export function ScreenCard({ screen }: { screen: Screen }) {
  return (
    <Link href={`/screens/${screen.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden border border-white/50 bg-card/90 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_-20px_rgba(0,92,85,0.35)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={screen.image}
            alt={screen.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-3 py-1 text-xs font-semibold text-accent-foreground">
              <ScanSearch className="size-3.5" />
              {screen.category}
            </span>
            {screen.hasForm ? (
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Form
              </span>
            ) : null}
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-foreground">{screen.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {screen.description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            عرض الشاشة
            <ArrowLeft className="size-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
