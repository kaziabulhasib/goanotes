"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast, Toaster } from "sonner";

import { Loader2 } from "lucide-react";
import { resolve } from "path";
import { useRouter } from "next/navigation";

function LogoutBtn() {
  //   const toast = useToast();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMessage = null;
    if (!errorMessage) {
      toast.success("You have been logged out successfully");
      router.push("/");
    } else {
      toast.error("logout failed");
    }
    setLoading(false);
  };
  return (
    <Button onClick={handleLogout} variant="outline" className="w-24">
      {loading ? <Loader2 /> : "Logout"}
    </Button>
  );
}

export default LogoutBtn;
