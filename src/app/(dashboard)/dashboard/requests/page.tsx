"use client";

import RequestTable from "./_components/request-table";

const Reserve = () => {
  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">درخواست‌های رزرو </h1>
      </div>
      <RequestTable />
    </div>
  );
};

export default Reserve;
