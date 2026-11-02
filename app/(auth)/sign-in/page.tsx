"use client";

import { useRouter } from "next/navigation";
import type { AuthPage } from "@/components/auth/types";
import { LoginScreen } from "@/components/login";

export default function SignInPage() {
  const router = useRouter();

  function navigate(page: AuthPage) {
    if (page === "register") {
      router.push("/sign-up");
    } else if (page === "recover") {
      router.push("/recover");
    }
  }

  return <LoginScreen navigate={navigate} />;
}