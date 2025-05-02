import CategoryDashboard from "./category";


const Profile = () => {
  return (
    <div className="flex flex-col  gap-4">
      <h1 className=" text-slate-700 dark:text-slate-300 text-center md:text-right mt-7">به داشبورد مدیریت  <strong className="">کافه رستوران دارچین</strong> خوش آمید!</h1>
      <CategoryDashboard />
    </div>
  );
};

export default Profile;
