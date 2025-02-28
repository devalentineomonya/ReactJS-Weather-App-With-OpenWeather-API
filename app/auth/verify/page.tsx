import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { Logo } from "@/screens/auth/components/Logo";


const FormSection = () => (
  <form className="mt-6">
    <div className="flex items-center justify-center mb-4">

     <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    </div>

    <Button className="w-full bg-primary dark:bg-slate-950  dark:hover:bg-slate-900 text-white rounded-md py-2 hover:bg-primary-dark">
      Verify My Account
    </Button>
  </form>
);

export default function Verify() {
  return (
    <div className="min-h-screen bg-[#5d87ff20] dark:bg-darkprimary flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-[450px] bg-white dark:bg-[#202936] rounded-md p-6 shadow-[rgba(145,_158,_171,_0.3)_0px_0px_2px_0px,_rgba(145,_158,_171,_0.02)_0px_12px_24px_-4px] ">
        <Logo />
        <p className="text-darklink text-sm text-center my-4">
          We sent a verification code to your mobile. Enter the code from the
          mobile in the field below.
        </p>
        <h6 className="text-sm font-bold my-4 text-center">******1234</h6>
        <FormSection />
        <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
          <p>Didn&apos;t get the code?</p>
          <Link className="text-primary text-sm font-medium" href="/">
            Resend
          </Link>
        </div>
      </div>
    </div>
  );
}
