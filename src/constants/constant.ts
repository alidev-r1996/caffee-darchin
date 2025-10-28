import {
  HomeIcon,
  UtensilsCrossed,
  Inbox,
  UsersIcon,
  LayoutGrid,
  MessageSquareQuote,
  BookOpenText,
} from "lucide-react";

export const SIGNUP_FORM = [
  {
    id: 1,
    name: "name",
    placeholder: "نام خود را وارد کنید",
    label: "نام",
  },
  {
    id: 2,
    name: "email",
    placeholder: "ایمیل خود را وارد کنید",
    label: "ایمیل",
  },
  {
    id: 3,
    name: "password",
    placeholder: "رمز عبور خود را وارد کنید",
    label: "رمزعبور",
  },
];

export const SIGNIN_FORM = [
  {
    id: 1,
    name: "email",
    placeholder: "ایمیل خود را وارد کنید",
    label: "نام",
  },
  {
    id: 2,
    name: "password",
    placeholder: "رمز عبور خود را وارد کنید",
    label: "عبور",
  },
];

export const sidebarItem = [
  { id: 1, title: "داشبورد", href: "/dashboard", icon: HomeIcon },
  {
    id: 2,
    title: "دسته‌بندی‌ها",
    href: "/dashboard/categories",
    icon: LayoutGrid,
  },
  { id: 3, title: "غذاها", href: "/dashboard/foods", icon: UtensilsCrossed },
  // {
  //   id: 4,
  //   title: "نظرات",
  //   href: "/dashboard/comments",
  //   icon: MessageSquareQuote,
  // },
  { id: 5, title: "درخواست‌ها", href: "/dashboard/requests", icon: Inbox },
  { id: 6, title: "کاربران", href: "/dashboard/users", icon: UsersIcon },
  // { id: 7, title: "سفارشات", href: "/dashboard/orders", icon: BookOpenText },
];

export const sideBarItemProfile = [
  { id: 1, title: "داشبورد", href: "/profile", icon: HomeIcon },
  {
    id: 2,
    title: "رزروها",
    href: "/profile/reservations",
    icon: Inbox,
  },
  // { id: 3, title: "سفارشات", href: "/profile/orders", icon: BookOpenText },
  { id: 4, title: "پروفایل", href: "/profile/info", icon: UsersIcon },
];

export const categoryFormFields = [
  {
    id: 1,
    label: "عنوان",
    name: "title",
    placeholder: "عنوان دسته‌بندی را وارد کنید",
  },
  {
    id: 2,
    label: "عنوان انگلیسی",
    name: "englishTitle",
    placeholder: "عنوان را به لاتین وارد کنید",
  },
];

export const profileFormFields = [
  {
    id: 1,
    label: "نام",
    name: "name",
    placeholder: " نام خود را وارد کنید",
  },
  {
    id: 2,
    label: "ایمیل ",
    name: "email",
    placeholder: "ایمیل خود را وارد کنید",
  },
  {
    id: 3,
    label: "رمز عبور ",
    name: "password",
    placeholder: "رمزعبور خود را وارد کنید",
  },
]

export const categoryItems = [
  {
    id: 1,
    title: "ردیف",
  },
  {
    id: 2,
    title: "عنوان",
  },
  {
    id: 3,
    title: "عنوان به انگلیسی",
  },
  {
    id: 4,
    title: "تصویر",
  },
  {
    id: 5,
    title: "عملیات",
  },
];

export const commentItems = [
  { id: 1, title: "ردیف" },
  { id: 2, title: "نام" },
  { id: 3, email: "ایمیل " },
  { id: 8, title: " پست" },
  { id: 4, title: " تاریخ ارسال" },
  { id: 5, title: " محتوای نظر " },
  { id: 6, title: "وضعیت" },
  { id: 7, title: "عملیات " },
];

export const foodFormFields = [
  { id: 1, label: "عنوان", name: "title", type: "text" },
  { id: 2, label: "قیمت", name: "price", type: "number" },
  { id: 4, label: "امتیاز", name: "rating", type: "number" },
];

export const FoodItems = [
  { id: 1, title: "ردیف" },
  { id: 2, title: "عنوان" },
  { id: 3, title: "قیمت" },
  { id: 4, title: "دسته‌بندی" },
  { id: 5, title: "تصویر " },
  { id: 6, title: "مواد تشکیل‌دهنده" },
  { id: 7, title: "عملیات " },
];

export const requestItems = [
  { id: 1, title: "ردیف" },
  { id: 2, title: "نام" },
  { id: 3, title: "شماره تلفن" },
  { id: 8, title: "تاریخ درخواست" },
  { id: 4, title: "تعداد نفرات" },
  { id: 5, title: " تاریخ رزرو" },
  { id: 6, title: "ساعت رزرو  " },
  { id: 7, title: "عملیات " },
];

export const reserveItems = [
  { id: 1, title: "ردیف" },
  { id: 2, title: "نام" },
  { id: 3, title: "شماره تلفن" },
  { id: 8, title: "تاریخ درخواست" },
  { id: 4, title: "تعداد نفرات" },
  { id: 5, title: " تاریخ رزرو" },
  { id: 6, title: "ساعت رزرو  " },
]

export const userFormFields = [
  { id: 1, label: "نام", name: "name" },
  { id: 2, label: "ایمیل", name: "email" },
  { id: 3, label: "رمز عبور", name: "password" },
];

export const rolesOption = [
  { id: 1, label: "کاربر", value: "USER" },
  { id: 2, label: "مدیر", value: "ADMIN" },
];

export const userItems = [
  { id: 1, title: "ردیف" },
  { id: 2, title: "نام" },
  { id: 3, title: "ایمیل" },
  { id: 4, title: "رمزعبور" },
  { id: 5, title: "تصویر کاربر " },
  { id: 6, title: "سمت  " },
  { id: 7, title: "عملیات " },
];
