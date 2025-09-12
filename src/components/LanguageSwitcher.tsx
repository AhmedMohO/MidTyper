import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => changeLanguage(currentLanguage === 'en' ? 'ar' : 'en')}
      className="flex items-center gap-2 transition-smooth hover:shadow-soft"
    >
      <Globe className="h-4 w-4" />
      {currentLanguage === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};