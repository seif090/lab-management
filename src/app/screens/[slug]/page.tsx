import { notFound } from "next/navigation";
import { ScreenViewer } from "@/components/screen-viewer";
import { screenService } from "@/services/screen-service";

export function generateStaticParams() {
  return screenService.getAll().map((screen) => ({ slug: screen.slug }));
}

export default async function ScreenPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const screen = screenService.getBySlug(slug);

  if (!screen) {
    notFound();
  }

  return <ScreenViewer screen={screen} />;
}
