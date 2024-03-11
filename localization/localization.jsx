import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
const translations = {
  en: {
    defaultSelectWalletButtonText: "Select wallet",
    searchWallets: "Search wallets",
    defaultSelectAccountButtonText: "Select account",
    searchAccounts: "Search accounts",
    from: "From",
    to: "To",
  },
  ar: {
    defaultSelectWalletButtonText: "حدد محفظة",
    searchWallets: "ابحث بالحفظات",
    defaultSelectAccountButtonText: "حدد حساب",
    searchAccounts: "ابحث بالحسابات",
    from: "من",
    to: "الى",
  },
};

const i18n = new I18n(translations);
i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;

export default i18n;
