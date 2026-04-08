"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, ClipboardList, LogIn, TestTube2 } from "lucide-react";
import { useFormTabs, type FormTabKey } from "@/hooks/use-form-tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ValidationErrors = Partial<Record<string, string>>;

const tabs: { key: FormTabKey; label: string; icon: typeof LogIn }[] = [
  { key: "login", label: "تسجيل الدخول", icon: LogIn },
  { key: "order", label: "طلب جديد", icon: ClipboardList },
  { key: "specimen", label: "تسجيل عينة", icon: TestTube2 },
];

export function FormPanel() {
  const { activeTab, hint, setActiveTab } = useFormTabs();
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [login, setLogin] = useState({ nationalId: "", orderCode: "" });
  const [order, setOrder] = useState({
    patientName: "",
    doctorName: "",
    priority: "",
  });
  const [specimen, setSpecimen] = useState({
    sampleId: "",
    type: "",
    notes: "",
  });

  const handleSubmit = () => {
    const nextErrors: ValidationErrors = {};

    if (activeTab === "login") {
      if (!/^\d{10,14}$/.test(login.nationalId)) {
        nextErrors.nationalId = "أدخل رقم هوية من 10 إلى 14 رقمًا.";
      }
      if (!/^LAB-\d{4,}/.test(login.orderCode)) {
        nextErrors.orderCode = "صيغة الباركود يجب أن تبدأ بـ LAB-.";
      }
    }

    if (activeTab === "order") {
      if (order.patientName.trim().length < 3) {
        nextErrors.patientName = "اسم المريض مطلوب.";
      }
      if (order.doctorName.trim().length < 3) {
        nextErrors.doctorName = "اسم الطبيب مطلوب.";
      }
      if (!order.priority.trim()) {
        nextErrors.priority = "حدد أولوية الطلب.";
      }
    }

    if (activeTab === "specimen") {
      if (specimen.sampleId.trim().length < 6) {
        nextErrors.sampleId = "رقم العينة غير مكتمل.";
      }
      if (specimen.type.trim().length < 3) {
        nextErrors.type = "نوع العينة مطلوب.";
      }
      if (specimen.notes.trim().length < 5) {
        nextErrors.notes = "أضف ملاحظة مختصرة على الأقل.";
      }
    }

    setErrors(nextErrors);
    setMessage(
      Object.keys(nextErrors).length === 0
        ? "تم التحقق من الحقول بنجاح. النموذج جاهز للربط لاحقًا مع API فعلي."
        : "",
    );
  };

  return (
    <Card className="bg-white/90">
      <CardContent className="space-y-5">
        <div>
          <p className="text-xs font-semibold text-primary">تفاعل أساسي</p>
          <h2 className="mt-1 text-xl font-extrabold text-foreground">
            نماذج تشغيلية خفيفة
          </h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            {hint}
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveTab(tab.key);
                  setErrors({});
                  setMessage("");
                }}
                className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "teal-gradient text-white ambient-shadow"
                    : "bg-muted text-foreground hover:bg-accent/70"
                }`}
              >
                <Icon className="size-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab === "login" && (
          <div className="space-y-3">
            <Field
              label="الرقم القومي"
              error={errors.nationalId}
              input={
                <Input
                  placeholder="أدخل رقم الهوية"
                  value={login.nationalId}
                  onChange={(event) =>
                    setLogin((current) => ({
                      ...current,
                      nationalId: event.target.value,
                    }))
                  }
                />
              }
            />
            <Field
              label="باركود العينة/الطلب"
              error={errors.orderCode}
              input={
                <Input
                  placeholder="LAB-2026-00123"
                  value={login.orderCode}
                  onChange={(event) =>
                    setLogin((current) => ({
                      ...current,
                      orderCode: event.target.value.toUpperCase(),
                    }))
                  }
                  className="font-latin"
                />
              }
            />
          </div>
        )}

        {activeTab === "order" && (
          <div className="space-y-3">
            <Field
              label="اسم المريض"
              error={errors.patientName}
              input={
                <Input
                  placeholder="أحمد محمود حسن"
                  value={order.patientName}
                  onChange={(event) =>
                    setOrder((current) => ({
                      ...current,
                      patientName: event.target.value,
                    }))
                  }
                />
              }
            />
            <Field
              label="الطبيب المحول"
              error={errors.doctorName}
              input={
                <Input
                  placeholder="د. سارة خالد"
                  value={order.doctorName}
                  onChange={(event) =>
                    setOrder((current) => ({
                      ...current,
                      doctorName: event.target.value,
                    }))
                  }
                />
              }
            />
            <Field
              label="الأولوية"
              error={errors.priority}
              input={
                <Input
                  placeholder="عادي / مستعجل / STAT"
                  value={order.priority}
                  onChange={(event) =>
                    setOrder((current) => ({
                      ...current,
                      priority: event.target.value,
                    }))
                  }
                />
              }
            />
          </div>
        )}

        {activeTab === "specimen" && (
          <div className="space-y-3">
            <Field
              label="رقم العينة"
              error={errors.sampleId}
              input={
                <Input
                  placeholder="LAB-2026-00482"
                  value={specimen.sampleId}
                  onChange={(event) =>
                    setSpecimen((current) => ({
                      ...current,
                      sampleId: event.target.value.toUpperCase(),
                    }))
                  }
                  className="font-latin"
                />
              }
            />
            <Field
              label="نوع العينة"
              error={errors.type}
              input={
                <Input
                  placeholder="Blood (EDTA)"
                  value={specimen.type}
                  onChange={(event) =>
                    setSpecimen((current) => ({
                      ...current,
                      type: event.target.value,
                    }))
                  }
                />
              }
            />
            <Field
              label="ملاحظات العينة"
              error={errors.notes}
              input={
                <Input
                  placeholder="أي ملاحظات إضافية تخص جودة العينة أو حالة المريض"
                  value={specimen.notes}
                  onChange={(event) =>
                    setSpecimen((current) => ({
                      ...current,
                      notes: event.target.value,
                    }))
                  }
                />
              }
            />
          </div>
        )}

        <Button className="w-full" onClick={handleSubmit}>
          <CheckCircle2 className="size-4" />
          تحقق من النموذج
        </Button>

        {message ? (
          <div className="rounded-2xl bg-accent/60 px-4 py-3 text-sm text-accent-foreground">
            {message}
          </div>
        ) : null}

        <a
          href={
            activeTab === "login"
              ? "/screens/patient_portal_login"
              : activeTab === "order"
                ? "/screens/new_order_form"
                : "/screens/sample_registration"
          }
          className="flex items-center justify-center gap-2 text-sm font-semibold text-primary"
        >
          افتح شاشة التصميم المطابقة
          <ArrowLeft className="size-4" />
        </a>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      {input}
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
