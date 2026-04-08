export type ScreenCategory =
  | "الأساسيات"
  | "التشخيص"
  | "التشغيل"
  | "الحوكمة"
  | "البوابة";

export type Screen = {
  slug: string;
  title: string;
  description: string;
  category: ScreenCategory;
  image: string;
  hasForm?: boolean;
  featured?: boolean;
};

export const screens: Screen[] = [
  {
    slug: "splash_screen",
    title: "شاشة البداية",
    description: "شاشة تحميل النظام وتأمين الاتصال.",
    category: "الأساسيات",
    image: "/designs/splash_screen/screen.png",
    featured: true,
  },
  {
    slug: "main_layout",
    title: "الواجهة الرئيسية",
    description: "لوحة الإجراءات السريعة والملخص التشغيلي.",
    category: "الأساسيات",
    image: "/designs/main_layout/screen.png",
    featured: true,
  },
  {
    slug: "quick_actions",
    title: "الإجراءات السريعة",
    description: "وصول مباشر لطلب جديد وطباعة التقارير واستلام العينات.",
    category: "الأساسيات",
    image: "/designs/quick_actions/screen.png",
  },
  {
    slug: "enhanced_dashboard",
    title: "لوحة النشاط اليومي",
    description: "ملخص الطلبات والتنبيهات وزمن الإنجاز.",
    category: "التشغيل",
    image: "/designs/enhanced_dashboard/screen.png",
    featured: true,
  },
  {
    slug: "orders_management",
    title: "إدارة الطلبات",
    description: "حالة الطلبات والاختيار الجماعي وإرسالها للمحلل.",
    category: "التشغيل",
    image: "/designs/orders_management/screen.png",
  },
  {
    slug: "new_order_form",
    title: "طلب جديد",
    description: "جمع البيانات السريرية واختيار الفحوصات.",
    category: "التشغيل",
    image: "/designs/new_order_form/screen.png",
    hasForm: true,
  },
  {
    slug: "sample_registration",
    title: "تسجيل العينات",
    description: "التحقق من بيانات المريض ومسار العينة.",
    category: "التشغيل",
    image: "/designs/sample_registration/screen.png",
    hasForm: true,
  },
  {
    slug: "sample_tracking_with_voice_search",
    title: "تتبع العينات",
    description: "لوحة تتبع دورة حياة العينات والتحديثات.",
    category: "التشغيل",
    image: "/designs/sample_tracking_with_voice_search/screen.png",
  },
  {
    slug: "fast_search_patients_list",
    title: "سجل المرضى",
    description: "بحث سريع عن المرضى مع فلاتر الحالة.",
    category: "التشغيل",
    image: "/designs/fast_search_patients_list/screen.png",
  },
  {
    slug: "patient_profile",
    title: "ملف المريض",
    description: "بيانات ديموغرافية وتاريخ الطلبات والمؤشرات.",
    category: "التشغيل",
    image: "/designs/patient_profile/screen.png",
  },
  {
    slug: "referring_doctors",
    title: "إدارة الأطباء المحيلين",
    description: "تحليل أداء الأطباء وجدول العيادات.",
    category: "التشغيل",
    image: "/designs/referring_doctors/screen.png",
  },
  {
    slug: "inventory_reagents",
    title: "إدارة المخزون والكواشف",
    description: "متابعة صلاحية المواد والتنبيهات وسجل التتبع.",
    category: "التشغيل",
    image: "/designs/inventory_reagents/screen.png",
  },
  {
    slug: "supplier_purchase_orders",
    title: "الموردون والمشتريات",
    description: "إدارة أوامر الشراء ودليل الموردين.",
    category: "التشغيل",
    image: "/designs/supplier_purchase_orders/screen.png",
  },
  {
    slug: "test_catalog",
    title: "دليل الفحوصات",
    description: "فهرس التحاليل مع الأسعار وTAT.",
    category: "التشغيل",
    image: "/designs/test_catalog/screen.png",
  },
  {
    slug: "billing_payments",
    title: "الفواتير والمدفوعات",
    description: "نظرة شاملة على المعاملات المالية اليومية.",
    category: "التشغيل",
    image: "/designs/billing_payments/screen.png",
  },
  {
    slug: "enhanced_results_entry_with_voice_search",
    title: "إدخال النتائج",
    description: "واجهة إدخال النتائج مع بحث صوتي وقائمة مهام.",
    category: "التشخيص",
    image: "/designs/enhanced_results_entry_with_voice_search/screen.png",
    hasForm: true,
  },
  {
    slug: "enhanced_results_approval",
    title: "اعتماد النتائج الطبية",
    description: "قائمة انتظار الاعتماد مع تعليقات فنية.",
    category: "التشخيص",
    image: "/designs/enhanced_results_approval/screen.png",
  },
  {
    slug: "enhanced_sample_rejection_with_voice_search",
    title: "رفض العينات",
    description: "توثيق أسباب الرفض مع سجل التواصل.",
    category: "التشخيص",
    image: "/designs/enhanced_sample_rejection_with_voice_search/screen.png",
    hasForm: true,
  },
  {
    slug: "enhanced_qc_dashboard",
    title: "لوحة الجودة",
    description: "متابعة Westgard وتحكم الجودة للأجهزة.",
    category: "التشخيص",
    image: "/designs/enhanced_qc_dashboard/screen.png",
  },
  {
    slug: "ai_diagnostic_hub",
    title: "مركز التشخيص بالذكاء الاصطناعي",
    description: "مقارنة الشرائح وتحليل الميزات الشاذة.",
    category: "التشخيص",
    image: "/designs/ai_diagnostic_hub/screen.png",
    featured: true,
  },
  {
    slug: "clinical_collaboration",
    title: "مساحة التعاون السريري",
    description: "مراجعة متعددة التخصصات وتعليقات الحالة.",
    category: "التشخيص",
    image: "/designs/clinical_collaboration/screen.png",
  },
  {
    slug: "clinical_research",
    title: "الأبحاث السريرية",
    description: "متابعة تجربة سريرية وسجل الالتزام الدوائي.",
    category: "التشخيص",
    image: "/designs/clinical_research/screen.png",
  },
  {
    slug: "tele_pathology",
    title: "الاستشارات عن بُعد",
    description: "جلسة Tele-Pathology مع محادثة الحالة.",
    category: "التشخيص",
    image: "/designs/tele_pathology/screen.png",
  },
  {
    slug: "exome_ngs",
    title: "تحليل NGS",
    description: "نتائج Exome والتغطية والمتحورات المكتشفة.",
    category: "التشخيص",
    image: "/designs/exome_ngs/screen.png",
  },
  {
    slug: "pharmacogenomics",
    title: "الصيدلة الجينومية",
    description: "توصيات الجرعات وتداخلات SNP.",
    category: "التشخيص",
    image: "/designs/pharmacogenomics/screen.png",
  },
  {
    slug: "global_hie",
    title: "الربط الصحي العالمي",
    description: "HL7 FHIR والتحقق من التوافق وتدفق البيانات.",
    category: "الحوكمة",
    image: "/designs/global_hie/screen.png",
  },
  {
    slug: "data_governance",
    title: "حوكمة البيانات",
    description: "سجلات الوصول والتشفير والجاهزية التدقيقية.",
    category: "الحوكمة",
    image: "/designs/data_governance/screen.png",
  },
  {
    slug: "detailed_rbac_matrix",
    title: "مصفوفة الصلاحيات",
    description: "إدارة المستخدمين وصلاحيات الوصول التفصيلية.",
    category: "الحوكمة",
    image: "/designs/detailed_rbac_matrix/screen.png",
  },
  {
    slug: "enhanced_audit_log_rbac_tracking",
    title: "سجل التدقيق والصلاحيات",
    description: "تتبع تعديل الأذونات ونزاهة البيانات.",
    category: "الحوكمة",
    image: "/designs/enhanced_audit_log_rbac_tracking/screen.png",
  },
  {
    slug: "enhanced_system_settings",
    title: "إعدادات النظام",
    description: "اللغة والشعار والنطاقات المرجعية وتكامل الأجهزة.",
    category: "الحوكمة",
    image: "/designs/enhanced_system_settings/screen.png",
  },
  {
    slug: "compliance_training",
    title: "الامتثال والتدريب",
    description: "الجاهزية التدقيقية ووحدات تدريب العاملين.",
    category: "الحوكمة",
    image: "/designs/compliance_training/screen.png",
  },
  {
    slug: "iot_maintenance",
    title: "الصيانة الاستباقية",
    description: "شبكة الحساسات وتحليل الأعطال المتوقع.",
    category: "الحوكمة",
    image: "/designs/iot_maintenance/screen.png",
  },
  {
    slug: "predictive_analytics",
    title: "التحليلات التنبؤية",
    description: "توقع أحجام الفحوصات وخرائط تفشي الأمراض.",
    category: "الحوكمة",
    image: "/designs/predictive_analytics/screen.png",
  },
  {
    slug: "public_health_surveillance",
    title: "المراقبة الصحية العامة",
    description: "حالة الإبلاغ الحرجة وموجات الإنفلونزا وRSV.",
    category: "الحوكمة",
    image: "/designs/public_health_surveillance/screen.png",
  },
  {
    slug: "patient_portal_login",
    title: "دخول بوابة المرضى",
    description: "تسجيل الدخول باستخدام رقم الهوية والباركود.",
    category: "البوابة",
    image: "/designs/patient_portal_login/screen.png",
    hasForm: true,
    featured: true,
  },
  {
    slug: "patient_portal_dashboard",
    title: "لوحة بوابة المرضى",
    description: "المواعيد القادمة والنتائج الحديثة والاتجاهات الصحية.",
    category: "البوابة",
    image: "/designs/patient_portal_dashboard/screen.png",
  },
  {
    slug: "notifications_center",
    title: "مركز التنبيهات",
    description: "إدارة رسائل SMS والبريد والحالة التشغيلية.",
    category: "البوابة",
    image: "/designs/notifications_center/screen.png",
  },
];

export const featuredScreens = screens.filter((screen) => screen.featured);

export const categoryOrder: ScreenCategory[] = [
  "الأساسيات",
  "التشخيص",
  "التشغيل",
  "الحوكمة",
  "البوابة",
];

export const categoryLabels: Record<ScreenCategory, string> = {
  الأساسيات: "الشاشات الأساسية",
  التشخيص: "مسارات التشخيص",
  التشغيل: "التشغيل اليومي",
  الحوكمة: "الحوكمة والامتثال",
  البوابة: "بوابة المرضى",
};

export function getScreenBySlug(slug: string) {
  return screens.find((screen) => screen.slug === slug);
}
