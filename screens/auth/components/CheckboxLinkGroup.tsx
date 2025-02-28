import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const CheckboxLinkGroup = () => (
    <div className="flex justify-between my-5">
      <div className="flex items-center gap-2">
        <Checkbox
          id="remember"
          type="button"
          className="rounded border border-border dark:border-darkborder cursor-pointer text-primary"
        />
        <Label
          htmlFor="remember"
          className="text-sm text-gray-900 dark:text-white opacity-90"
        >
          Remember this Device
        </Label>
      </div>
      <Link
        href="/auth/forgot-password"
        className="text-primary text-sm font-medium"
      >
        Forgot Password?
      </Link>
    </div>
  );
