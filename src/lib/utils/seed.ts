import { prisma } from "./prisma";

const categorySeed = [
  {
    id: "cma5k889k0000vxro7xyi9i4k",
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8uSpNuecOX7Ti9dhYmjwp8PaHslGR0CWZNrKy",
    title: "پیتزا",
    englishTitle: "pizza",
    userId: "cma5k6s3c0000vx6gwx7m08yy",
  },
  {
    id: "cma5k889k0001vxroawoisz8e",
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8xqvlyhtqUNGej17vsy06DmwQ8LfCTagz34WY",
    title: "کافه",
    englishTitle: "coffee",
    userId: "cma5k6s3c0000vx6gwx7m08yy",
  },
  {
    id: "cma5k889k0002vxrohj9ggbvy",
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8WBhF2ij2Z9B3DhA8TSQbG5xUyHiORpLudw1e",
    title: "غذا",
    englishTitle: "food",
    userId: "cma5k6s3c0000vx6gwx7m08yy",
  },
  {
    id: "cma5k889k0003vxropgqx148q",
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8E3vCWE2NRBiMtZca1YkXhQuLxevD8jCF49dP",
    title: "دسر",
    englishTitle: "desert",
    userId: "cma5k6s3c0000vx6gwx7m08yy",
  },
  {
    id: "cma5k889k0004vxro4rxicsnd",
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8SzbAm0fpGCythgUe3b1BvOqAZHDk7VSrEYuF",
    title: "نوشیدنی",
    englishTitle: "drink",
    userId: "cma5k6s3c0000vx6gwx7m08yy",
  },
  {
    id: "cma5k889k0005vxro2aovtkop",
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ85FSPfD1ARIljSrCzd3gpHa9ckymOFetL0G7X",
    title: "بستنی",
    englishTitle: "ice-cream",
    userId: "cma5k6s3c0000vx6gwx7m08yy",
  },
];

const foodSeed = [
  {
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8uuWnt8cOX7Ti9dhYmjwp8PaHslGR0CWZNrKy",
    title: "پیتزا مخصوص",
    price: 185000,
    ingredients: ["فلفل‌دلمه", "گوجه‌فرنگی", "کالباس", "قارچ", "پودر سیر"],
    rating: 4.9,
    userId: "cma5k6s3c0000vx6gwx7m08yy",
    categories: {
      create: [
        {
          category: {
            connect: { id: "cma5k889k0000vxro7xyi9i4k" },
          },
        },
      ],
    },
  },
  {
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8jHmtiS7VFvSw9YonQGCNq1zOyJMEgcUbeZk5",
    title: "پیتزا پپرونی",
    price: 170000,
    ingredients: ["پپرونی", "پنیر پیتزا", "سس گوجه", "پودر فلفل"],
    rating: 4.7,
    userId: "cma5k6s3c0000vx6gwx7m08yy",
    categories: {
      create: [
        {
          category: {
            connect: { id: "cma5k889k0000vxro7xyi9i4k" },
          },
        },
      ],
    },
  },
  {
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8cAz0U4nEZoyGUk3VDhmOTQ9Iq82lJgiFH0BW",
    title: "پیتزا سبزیجات",
    price: 160000,
    ingredients: ["ذرت", "قارچ", "زیتون", "فلفل‌دلمه", "گوجه‌فرنگی"],
    rating: 4.5,
    userId: "cma5k6s3c0000vx6gwx7m08yy",
    categories: {
      create: [
        {
          category: {
            connect: { id: "cma5k889k0000vxro7xyi9i4k" },
          },
        },
      ],
    },
  },
  {
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8y9gc35BXGK4qmMLiN2pSUD9h1ulfBJcYO76n",
    title: "پیتزا مرغ و قارچ",
    price: 175000,
    ingredients: ["مرغ گریل‌شده", "قارچ", "پنیر موزارلا", "سس سفید"],
    rating: 4.8,
    userId: "cma5k6s3c0000vx6gwx7m08yy",
    categories: {
      create: [
        {
          category: {
            connect: { id: "cma5k889k0000vxro7xyi9i4k" },
          },
        },
      ],
    },
  },
  {
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8h5et1QWjYmDgRQ1ekKZ2UFXuyIpTMONnrLi8",
    title: "پیتزا گوشت",
    price: 180000,
    ingredients: ["گوشت چرخ‌کرده", "پنیر پیتزا", "قارچ", "پیاز"],
    rating: 4.6,
    userId: "cma5k6s3c0000vx6gwx7m08yy",
    categories: {
      create: [
        {
          category: {
            connect: { id: "cma5k889k0000vxro7xyi9i4k" },
          },
        },
      ],
    },
  },
  {
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8BR6e7SXGsxPCWdOoqat3XFQZuJVfgA74068M",
    title: "پیتزا هاوایی",
    price: 190000,
    ingredients: ["کالباس", "آناناس", "پنیر", "سس گوجه"],
    rating: 4.2,
    userId: "cma5k6s3c0000vx6gwx7m08yy",
    categories: {
      create: [
        {
          category: {
            connect: { id: "cma5k889k0000vxro7xyi9i4k" },
          },
        },
      ],
    },
  },
  {
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8syzNOMofxr1V0R7M5uyCzB4SUNk3TQW6nFPZ",
    title: "پیتزا چهار پنیر",
    price: 200000,
    ingredients: ["پنیر موزارلا", "پنیر چدار", "پنیر پارمزان", "پنیر آبی"],
    rating: 4.9,
    userId: "cma5k6s3c0000vx6gwx7m08yy",
    categories: {
      create: [
        {
          category: {
            connect: { id: "cma5k889k0000vxro7xyi9i4k" },
          },
        },
      ],
    },
  },
  {
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8sO4jxHofxr1V0R7M5uyCzB4SUNk3TQW6nFPZ",
    title: "پیتزا مارگاریتا",
    price: 155000,
    ingredients: ["گوجه‌فرنگی", "ریحان تازه", "پنیر", "روغن زیتون"],
    rating: 4.4,
    userId: "cma5k6s3c0000vx6gwx7m08yy",
    categories: {
      create: [
        {
          category: {
            connect: { id: "cma5k889k0000vxro7xyi9i4k" },
          },
        },
      ],
    },
  },
];

const commentSeed = [
  { content: "", userId: "", foodId: "", verified: true },
  { content: "", userId: "", foodId: "", verified: true },
  { content: "", userId: "", foodId: "", verified: true },
  { content: "", userId: "", foodId: "", verified: true },
  { content: "", userId: "", foodId: "", verified: true },
  { content: "", userId: "", foodId: "", verified: true },
  { content: "", userId: "", foodId: "", verified: true },
];

const userSeed = [
  {
    id: "cma5k6s3c0000vx6gwx7m08yy",
    name: "علی رحیمی",
    email: "alidev.r1996@gmail.com",
    password: "123456",
    phone: "09358865344",
    img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8sO4jxHofxr1V0R7M5uyCzB4SUNk3TQW6nFPZ",
  },
];

export async function seedUsers() {
  try {
    for (const user of userSeed) {
      await prisma.user.create({
        data: user,
      });
    }
    console.log("✅ Users seeded successfully");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function seedComments() {
  try {
    for (const comment of commentSeed) {
      await prisma.comment.create({
        data: comment,
      });
    }
    console.log("✅ Comments seeded successfully");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function seedFoods() {
  try {
    for (const food of foodSeed) {
      await prisma.food.create({
        data: food,
      });
    }
    console.log("✅ Foods seeded successfully");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

const seedCategories = async () => {
  try {
    await prisma.category.createMany({
      data: categorySeed,
      skipDuplicates: true, // Optional: prevents errors on duplicate entries
    });
    console.log("✅ Categories seeded");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seedCategories();
seedFoods();
seedComments();
seedUsers();
