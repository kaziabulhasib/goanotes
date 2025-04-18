"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

function LogoutBtn() {
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    console.log("clicked");
  };
  return (
    <Button onClick={handleLogout} variant="outline" className="w-24">
      {loading ? <Loader2 /> : "Logout"}
    </Button>
  );
}

export default LogoutBtn;
