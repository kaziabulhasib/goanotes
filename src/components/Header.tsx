import Link from "next/link";
import Image from "next/image";
import { shadow } from "@/styles/utils";
import { Button } from "./ui/button";
import DarkMoodToggle from "./DarkMoodToggle"

const Header = () => {
  const user = null;
  return (
    <header
      className="bg-popover sm:px-8s relative flex h-24 w-full items-center justify-between px-3"
      style={{ boxShadow: shadow }}
    >
      <Link className="flex items-end gap-2" href="/">
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        />

        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          GOAT <span>Notes</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          "logout"
        ) : (
          <>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant={"outline"} className="hidden sm:block">
              <Link href="/signup">Sign up</Link>
            </Button>
          </>
        )}
        <DarkMoodToggle />
      </div>
    </header>
  );
};

export default Header;
