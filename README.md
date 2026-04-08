# Clinical Nexus

تطبيق Next.js عربي RTL يعرض شاشات نظام LIMS المرجعية داخل راوتر موحد، مع نماذج تفاعل أساسية وتجهيز كامل للنشر على Vercel.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui structure
- lucide-react

## Structure

```text
src/
  app/
    page.tsx
    screens/[slug]/page.tsx
  components/
    form-panel.tsx
    screen-card.tsx
    screen-viewer.tsx
    ui/
  lib/
    screens.ts
    utils.ts
public/
  designs/
```

## Run

```bash
npm install
npm run dev
```

ثم افتح:

```text
http://localhost:3000
```

## Build Check

```bash
npm run build
```

## Deploy to Vercel

1. ارفع المشروع إلى GitHub.
2. اربطه مع Vercel.
3. اختر Framework = `Next.js`.
4. اترك إعدادات build الافتراضية:
   - Build Command: `npm run build`
   - Output: `.next`
5. نفّذ Deploy.

## Notes

- الشاشات المرجعية مضافة داخل `public/designs` وتُعرض كما هي.
- تم إضافة طبقة نماذج تفاعلية خفيفة للتحقق من الحقول على الواجهة فقط.
- في حال الرغبة بتحويل كل شاشة من صورة مرجعية إلى مكونات واجهة كاملة 100% semantic، يلزم تنفيذ يدوي لكل شاشة على حدة فوق نفس التصميم المرجعي.
