import { prisma } from "./prisma";


const categorySeed = [
  {img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8mVOe5dClOfngcBy6Z5JxiWs3eVKjQuqL2hkD", title: "پیتزا", englishTitle: "pizza" , userId: "cma3rcyf80000vxhwxua87ouj"  },
  {img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8PN1HJ6xdMJoeBxHI4srNWO016YFblqwTQ3XA", title: "کافه", englishTitle: "coffee", userId: "cma3rcyf80000vxhwxua87ouj"  },
  {img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ88LgHKVqeDFguWEtRqKSjlNIPyh4mGYU9rp0X", title: "غذا", englishTitle: "food", userId: "cma3rcyf80000vxhwxua87ouj"  },
  {img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8jvuW057VFvSw9YonQGCNq1zOyJMEgcUbeZk5", title: "دسر", englishTitle: "desert", userId: "cma3rcyf80000vxhwxua87ouj"  },
  {img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8Zg05GsD1BcPb3JSkVTeR5IihoKw7OzQYvqgs", title: "نوشیدنی", englishTitle: "drink", userId: "cma3rcyf80000vxhwxua87ouj"  },
  {img: "https://bvthk1nwyv.ufs.sh/f/UrRhinAsLtJ8IIMN9g86BtpWMY53qdaZjC9R0rhDFglw2SsN", title: "بستنی", englishTitle: "ice-cream", userId: "cma3rcyf80000vxhwxua87ouj"  },
  ];


  const foodSeed=[
      {img: "food1", title: "عنوان غذا", price: 100000, ingredients: ["سیر", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      {img: "food2", title: "عنوان غذا", price: 200000, ingredients: ["لوبیا", "ادویه‌", "نخود", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      {img: "food3", title: "عنوان غذا", price: 150000, ingredients: ["نخودفرنگی", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      {img: "food4", title: "عنوان غذا", price: 280000, ingredients: ["سیر", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      {img: "food5", title: "عنوان غذا", price: 185000, ingredients: ["دارچین", "ادویه‌", "لوبیا", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      {img: "food6", title: "عنوان غذا", price: 200000, ingredients: ["سیر", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      {img: "food7", title: "عنوان غذا", price: 100000, ingredients: ["سیر", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      {img: "food8", title: "عنوان غذا", price: 200000, ingredients: ["سیر", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      {img: "food9", title: "عنوان غذا", price: 150000, ingredients: ["سیر", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      { img: "food10", title: "عنوان غذا", price: 280000, ingredients: ["سیر", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      { img: "food11", title: "عنوان غذا", price: 185000, ingredients: ["سیر", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
      { img: "food12", title: "عنوان غذا", price: 200000, ingredients: ["سیر", "ادویه‌", "فلفل", "پیاز", "گوجه‌فرنگی"],userId: "cma3rcyf80000vxhwxua87ouj", rating: 5},
    ];


    const seedFoods = async () => {
      try {
        await prisma.food.createMany({
          data: foodSeed,
          skipDuplicates: true, // Optional: prevents errors on duplicate entries
        });
        console.log("✅ foods seeded");
      } catch (error) {
        console.error("❌ Seeding failed:", error);
      } finally {
        await prisma.$disconnect();
      }
    };
    
    seedFoods();




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
  