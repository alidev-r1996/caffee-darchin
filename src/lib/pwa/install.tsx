"use client";
import { useEffect, useState } from "react";

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true); // دکمه نصب رو نمایش بده
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // دیالوگ نصب رو باز کنه
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }

    setDeferredPrompt(null);
    setShowInstall(false);
  };

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-xl shadow-xl border flex items-center gap-4 z-50">
      <p className="text-sm">می‌تونی برنامه رو نصب کنی!</p>
      <button
        onClick={handleInstallClick}
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        نصب
      </button>
    </div>
  );
};

export default InstallPWA;
