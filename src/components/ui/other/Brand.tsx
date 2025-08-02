import Link from "next/link";
import { Saira } from "@/utils/fonts";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export default function Brand() {
  return (
    <div>
      <Link href="/" className={Saira.className} style={{ fontWeight: 600, fontSize: 30 }}>
        <span className="flex items-center tracking-widest">
          Pop{" "}
          <span>
            <TbPlayerTrackNextFilled className="size-full px-[2px] text-primary" />
          </span>{" "}
          Stream
        </span>
      </Link>
    </div>
  );
}
