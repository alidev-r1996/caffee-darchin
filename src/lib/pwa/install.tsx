"use client";
import { useEffect, useState } from "react";

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    // اگر کاربر نصب کرده یا قبلاً گفته "بعداً"، نمایش نده
    const dismissed = localStorage.getItem("pwa-dismissed");
    const isInstalled = window.matchMedia("(display-mode: standalone)").matches;
    if (dismissed === "true" || isInstalled) return;

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      localStorage.setItem("pwa-dismissed", "true"); // دیگه نشون نده
    }
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleLaterClick = () => {
    localStorage.setItem("pwa-dismissed", "true"); // دیگه نشون نده
    setShowInstall(false);
  };

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-slate-600 p-4 rounded-xl shadow-xl border flex items-center gap-4 z-50">
      <p className="text-sm">می‌تونی برنامه رو نصب کنی!</p>
      <button
        onClick={handleInstallClick}
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 cursor-pointer"
      >
        نصب
      </button>
      <button
        onClick={handleLaterClick}
        className="bg-gray-300 text-gray-800 px-4 py-1 rounded hover:bg-gray-400 cursor-pointer"
      >
        بعداً
      </button>
    </div>
  );
};

export default InstallPWA;
