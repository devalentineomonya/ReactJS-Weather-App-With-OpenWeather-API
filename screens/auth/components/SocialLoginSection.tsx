import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const SocialButton = ({
    provider,
    iconSrc,
  }: {
    provider: string;
    iconSrc: string;
  }) => (
    <Button
      variant="outline"
      className="w-full flex gap-2 items-center py-6 px-4 border border-ld"
      asChild
    >
      <Link href="/">
        <Image
          alt={provider}
          width={18}
          height={18}
          src={iconSrc}
          priority
          className="dark:invert"
        />
        {provider}
      </Link>
    </Button>
  );

  export const SocialLoginSection = () => (
    <div className="flex gap-4 my-6">
      <SocialButton
        provider="Google"
        iconSrc="/google.svg"
      />
      <SocialButton provider="Facebook" iconSrc="/facebook.svg" />
    </div>
  );
