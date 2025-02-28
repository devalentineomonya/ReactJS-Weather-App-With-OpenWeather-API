import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SocialLoginSection } from "@/screens/auth/components/SocialLoginSection";
import { InputField } from "@/screens/auth/components/InputField";
import { CheckboxLinkGroup } from "@/screens/auth/components/CheckboxLinkGroup";
import { Logo } from "@/screens/auth/components/Logo";
import { Separator } from "@/components/ui/separator";

const FormSection = () => (
  <form className="mt-6">
    <InputField label="Username" id="username" type="text" />
    <InputField label="Password" id="password" type="password" />
    <CheckboxLinkGroup />
    <Button className="w-full bg-primary dark:bg-slate-950  dark:hover:bg-slate-900 text-white rounded-md py-2 hover:bg-primary-dark">
      Sign In
    </Button>
  </form>
);

const SignupLink = () => (
  <div className="flex gap-2 text-base font-medium mt-6 justify-center">
    <p>New to Modernize?</p>
    <Link href="/auth/register" className="text-primary text-sm font-medium">
      Create an account
    </Link>
  </div>
);

export default function Login() {
  return (
    <div className="min-h-screen bg-[#5d87ff20] dark:bg-darkprimary flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-[450px] bg-white dark:bg-[#202936] shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px]   rounded-md p-6">
        <Logo />
        <SocialLoginSection />
        <div className="flex items-center gap-4">
          <Separator className="flex-1 dark:bg-gray-500" />
          <span className="text-muted-foreground">or sign in with</span>
          <Separator className="flex-1 dark:bg-gray-500" />
        </div>
        <FormSection />
        <SignupLink />
      </div>
    </div>
  );
}
