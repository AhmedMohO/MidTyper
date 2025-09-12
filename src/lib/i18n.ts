import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
        getStarted: "Get Started"
      },
      // Hero Section
      hero: {
        title: "Expert Academic Writing Services",
        subtitle: "Professional Research Papers, Dissertations & Presentations",
        description: "Transform your academic ideas into compelling, well-researched documents with our expert writing team. From research papers to PowerPoint presentations, we deliver excellence.",
        cta: "Contact Us",
        ctaSecondary: "Explore Our Services"
      },
      // Services Section
      services: {
        title: "Our Services",
        subtitle: "Professional dental academic writing services tailored for students and professionals",
        orderNow: "Order Now",
        stats: {
          completed: "Projects Completed",
          clients: "Happy Clients",
          satisfaction: "Satisfaction Rate",
          delivery: "On-Time Delivery"
        },
        protocols: {
          title: "Thesis Protocols and Researches",
          description: "We provide highly-precise and scientifically rigorous research protocols tailored to meet your specific needs. Whether you're working on a clinical trial, experimental research, or literature review, we can help you design a structured and comprehensive research framework."
        },
        thesis: {
          title: "Master's and PhD Thesis",
          description: "We provide comprehensive support for Master's and PhD thesis projects in dentistry, from topic selection to final submission. We ensure that your thesis adheres to academic standards and demonstrates in-depth understanding."
        },
        assignments: {
          title: "Dental Assignments",
          description: "We offer a range of services for dental students who need help with assignments in the field of dentistry. Whether it's a clinical case study, research paper, or theoretical analysis, including PIP and GDP assignments, Essay Writing, Case Studies, Research Papers, and Critical Analysis."
        },
        presentations: {
          title: "PowerPoint and Poster Presentations",
          description: "Presenting your dental research, thesis, or clinical case study through a well-crafted PowerPoint presentation is critical for effective communication. We provide full PowerPoint or poster presentation services for any academic or professional setting."
        },
        guarantee: {
          title: "Quality Guarantee",
          description: "We guarantee 100% original content, timely delivery, and unlimited revisions until you're completely satisfied with our work."
        }
      },
      // About Section
      about: {
        title: "Why Choose Our Services?",
        subtitle: "Professional excellence meets academic integrity",
        quality: {
          title: "Premium Quality",
          description: "Every document is crafted by expert writers with advanced degrees in relevant fields."
        },
        plagiarism: {
          title: "100% Original",
          description: "All content is written from scratch with proper citations and plagiarism reports."
        },
        support: {
          title: "24/7 Support",
          description: "Round-the-clock customer service to assist you throughout your project journey."
        },
        delivery: {
          title: "Timely Delivery",
          description: "We respect deadlines and ensure your projects are completed on time, every time."
        }
      },
      // Contact Section
      contact: {
        title: "Ready to Start Your Project?",
        subtitle: "Get in touch with our expert team today",
        form: {
          name: "Full Name",
          email: "Email Address",
          subject: "Project Type",
          message: "Project Details",
          submit: "Send Message",
          success: "Message sent successfully!",
          error: "Failed to send message. Please try again."
        }
      },
      // Payment Methods
      payment: {
        title: "Payment Methods",
        subtitle: "Secure and convenient payment options for your academic projects",
        vodaCash: {
          title: "Vodafone Cash",
        },
        insta: {
          title: "InstaPay",
        },
        bank: {
          title: "SNB Bank",
        }
      },
      // Contact Info Page
      contactInfo: {
        title: "Contact Information",
        subtitle: "Choose your preferred way to reach us",
        copySuccess: "Copied to clipboard!",
        whatsapp: "WhatsApp",
        telegram: "Telegram",
        email: "Email",
      },
      // Footer
      footer: {
        description: "Your trusted partner for academic excellence and professional writing services.",
        links: {
          services: "Services",
          about: "About Us",
          contact: "Contact",
          privacy: "Privacy Policy",
          terms: "Terms of Service"
        },
        contact: {
          title: "Contact Info",
          email: "info@MidTyper.com",
          whatsapp: "+201120311258",
        },
        copyright: "©2025 MidTyper. All rights reserved.",
        creator: " Created With Love By AhmedMoh"
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "عن الشركة",
        contact: "اتصل بنا",
        getStarted: "ابدأ الآن"
      },
      // Hero Section
      hero: {
        title: "خدمات الكتابة الأكاديمية المتخصصة",
        subtitle: "أوراق بحثية وأطروحات وعروض تقديمية احترافية",
        description: "حوّل أفكارك الأكاديمية إلى وثائق مقنعة ومبحوثة جيداً مع فريق الكتابة المتخصص لدينا. من الأوراق البحثية إلى عروض PowerPoint، نقدم التميز.",
        cta: "تواصل معنا",
        ctaSecondary: "شاهد خدماتنا"
      },
      // Services Section
      services: {
        title: "خدماتنا",
        subtitle: "خدمات الكتابة الأكاديمية المهنية المصممة للطلاب والمهنيين في طب الأسنان",
        orderNow: "اطلب الآن",
        stats: {
          completed: "المشاريع المكتملة",
          clients: "العملاء السعداء",
          satisfaction: "معدل الرضا",
          delivery: "التسليم في الوقت المحدد"
        },
        protocols: {
          title: "بروتوكولات الأطروحات والأبحاث",
          description: "نوفر بروتوكولات بحثية دقيقة للغاية وصارمة علمياً مصممة لتلبية احتياجاتك المحددة. سواء كنت تعمل على تجربة سريرية أو بحث تجريبي أو مراجعة أدبية، يمكننا مساعدتك في تصميم إطار بحثي منظم وشامل."
        },
        thesis: {
          title: "رسائل الماجستير والدكتوراه",
          description: "نوفر دعماً شاملاً لمشاريع رسائل الماجستير والدكتوراه في طب الأسنان، من اختيار الموضوع إلى التسليم النهائي. نضمن أن رسالتك تلتزم بالمعايير الأكاديمية وتظهر فهماً عميقاً."
        },
        assignments: {
          title: "مهام طب الأسنان",
          description: "نقدم مجموعة من الخدمات لطلاب طب الأسنان الذين يحتاجون المساعدة في المهام في مجال طب الأسنان. سواء كانت دراسة حالة سريرية أو ورقة بحثية أو تحليل نظري، بما في ذلك مهام PIP وGDP وكتابة المقالات ودراسات الحالة والأوراق البحثية والتحليل النقدي."
        },
        presentations: {
          title: "عروض PowerPoint والملصقات",
          description: "تقديم بحثك السني أو أطروحتك أو دراسة الحالة السريرية من خلال عرض PowerPoint مصمم بعناية أمر بالغ الأهمية للتواصل الفعال. نوفر خدمات عرض PowerPoint أو الملصقات الكاملة لأي بيئة أكاديمية أو مهنية."
        },
        guarantee: {
          title: "ضمان الجودة",
          description: "نضمن محتوى أصلي بنسبة 100%، والتسليم في الوقت المحدد، والمراجعات غير المحدودة حتى تكون راضياً تماماً عن عملنا."
        }
      },
      // About Section
      about: {
        title: "لماذا تختار خدماتنا؟",
        subtitle: "التميز المهني يلتقي بالنزاهة الأكاديمية",
        quality: {
          title: "جودة متميزة",
          description: "كل وثيقة يتم إعدادها من قبل كتاب خبراء حاصلين على درجات علمية متقدمة في المجالات ذات الصلة."
        },
        plagiarism: {
          title: "100% أصلي",
          description: "جميع المحتويات مكتوبة من الصفر مع الاستشهادات المناسبة وتقارير الانتحال."
        },
        support: {
          title: "دعم 24/7",
          description: "خدمة عملاء على مدار الساعة لمساعدتك طوال رحلة مشروعك."
        },
        delivery: {
          title: "تسليم في الوقت المحدد",
          description: "نحترم المواعيد النهائية ونضمن إكمال مشاريعك في الوقت المحدد، في كل مرة."
        }
      },
      // Contact Section
      contact: {
        title: "هل أنت مستعد لبدء مشروعك؟",
        subtitle: "تواصل مع فريقنا المتخصص اليوم",
        form: {
          name: "الاسم الكامل",
          email: "عنوان البريد الإلكتروني",
          subject: "نوع المشروع",
          message: "تفاصيل المشروع",
          submit: "إرسال الرسالة",
          success: "تم إرسال الرسالة بنجاح!",
          error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى."
        }
      },
      // Payment Methods
      payment: {
        title: "طرق الدفع",
        subtitle: "خيارات دفع آمنة ومريحة لمشاريعك الأكاديمية",
        vodaCash: {
          title: "فودافون كاش",
        },
        insta: {
          title: "انستاباي",
        },
        bank: {
          title: "الاهلي SNB",
        }
      },
      // Contact Info Page
      contactInfo: {
        title: "معلومات الاتصال",
        subtitle: "اختر الطريقة المفضلة للتواصل معنا",
        copySuccess: "تم النسخ!",
        whatsapp: "واتساب",
        telegram: "تليجرام",
        email: "البريد الإلكتروني",
      },
      // Footer
      footer: {
        description: "شريكك الموثوق للتميز الأكاديمي وخدمات الكتابة المهنية.",
        links: {
          services: "الخدمات",
          about: "عن الشركة",
          contact: "اتصل بنا",
          privacy: "سياسة الخصوصية",
          terms: "شروط الخدمة"
        },
        contact: {
          title: "معلومات الاتصال",
          email: "info@MidTyper.com",
          whatsapp: "+201120311258",
        },
        copyright: "© 2025 ميدتايبر. جميع الحقوق محفوظة.",
        creator: "تم إنشاء هذا الموقع بأخلاص من قبل احمد محمد"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;