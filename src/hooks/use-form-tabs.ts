"use client";

import { useMemo, useState } from "react";

export type FormTabKey = "login" | "order" | "specimen";

export function useFormTabs(initialTab: FormTabKey = "login") {
  const [activeTab, setActiveTab] = useState<FormTabKey>(initialTab);

  const hint = useMemo(() => {
    switch (activeTab) {
      case "login":
        return "نموذج مطابق لفكرة بوابة المرضى مع تحقق بسيط على الواجهة.";
      case "order":
        return "إدخال سريع لبيانات الطلب السريري قبل الانتقال إلى شاشة التصميم.";
      default:
        return "تسجيل بيانات العينة والتحقق من الحقول الإلزامية.";
    }
  }, [activeTab]);

  return {
    activeTab,
    setActiveTab,
    hint,
  };
}
