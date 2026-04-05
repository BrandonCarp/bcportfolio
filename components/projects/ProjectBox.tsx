import Image from "next/image";
import Link from "next/link";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";

interface Projects {
  id: number;
  title: string;
  shortDesc: string;
  tech: string;
  image: string;
  link: string;
}

const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
export default function ProjectBox({ details }: { details: Projects }) {
  return (
    <div className="group flex flex-col w-full max-w-[280px] sm:max-w-[350px] bg-white border border-[var(--color-accent)] rounded-2xl overflow-hidden mx-auto transition-all">
      <div className="relative aspect-video w-full bg-[#E0F2F1] flex items-center justify-center p-4">
        <Image
          src={details.image}
          alt={details.title}
          width={300}
          height={168}
          priority
          className="w-[85%] h-auto object-contain  "
          sizes="280px"
        />
      </div>

      <div className="bg-white p-3 sm:p-5 flex flex-col gap-1 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-slate-400">
          <Square3Stack3DIcon className="h-3 w-3 shrink-0 text-bg-main animate-bounce" />
          <span className="truncate">{details.tech}</span>
        </div>

        <div className="flex items-center justify-between mt-0.5">
          <h3 className="text-sm sm:text-lg font-black text-black uppercase tracking-tight">
            {details.title}
          </h3>
          <div className="flex gap-3 text-[12px] font-semibold">
            <Link
              href="https://github.com/BrandonCarp/data_clean"
              className=" bg-bg-secondary p-1 rounded"
            >
              Visit Site
            </Link>
            <Link
              href="https://github.com/BrandonCarp/data_clean"
              className=" text-bg-main"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
