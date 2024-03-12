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
    walletPlaceholder: "Wallet name example : Salary ... etc",
    accountPlaceholder: "Account name example : Ali ... etc",
    amount: "Amount",
    note: "Note",
    income: "Income",
    outcome: "Outcome",
    noData: "No data.",
  },
  ar: {
    defaultSelectWalletButtonText: "حدد محفظة",
    searchWallets: "ابحث بالحفظات",
    defaultSelectAccountButtonText: "حدد حساب",
    searchAccounts: "ابحث بالحسابات",
    from: "من",
    to: "الى",
    walletPlaceholder: "اسم المحفظة مثل : الراتب ... الخ",
    accountPlaceholder: "اسم الحساب مثل : علي ... الخ",
    amount: "المبلغ",
    note: "الملاحظة",
    income: "دخل/قبض",
    outcome: "دفع/صرف",
    noData: "لا يوجد بيانات",
  },
};

const i18n = new I18n(translations);
i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;

export default i18n;
