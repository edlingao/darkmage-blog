'use client';
import HomeIcon from "@/assets/Icons/house.svg";
import { SaveIcon } from "@/assets/Icons/save-icon.svg";
import { SearchIcon } from "@/assets/Icons/search.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarOption {
  name: string;
  path: string;
}

const navBarOptions: NavBarOption[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Search',
    path: '/search',
  },
  {
    name: 'Saved',
    path: '/saved',
  },
];

function ChooseIcon({name, className, isCurrent}: {name: string, className: string, isCurrent: boolean}): FunctionComponentElement {
  const fill = isCurrent ? "fill-background" : "fill-text";
  switch (name) {
    case 'Home':
      return <HomeIcon className={className} fill={fill}/>;
    case 'Search':
      return <SearchIcon className={className} fill={fill} />;
    case 'Saved':
      return <SaveIcon className={className} fill={fill} />;
  }
}

export function NavBar() {
  const pathname = usePathname();
  const isCurrentPath = (path: string) => pathname === path;
  return (
    <div className="flex items-center justify-center flex-wrap w-full">
      <nav className="flex items-center justify-between flex-shrink-0 text-white mr-6 bg-primary p-2 mt-auto rounded-full w-9/12">
        {navBarOptions.map((option) => (
          <Link
            key={option.name}
            href={option.path}
            className={`flex items-center justify-center rounded-full p-2 ${ isCurrentPath(option.path) ? 'bg-text' : 'bg-background' }`}
          >
            <ChooseIcon name={option.name} className="w-6 h-6" isCurrent={isCurrentPath(option.path)} />
          </Link>
        ))}
      </nav>
    </div>
  )
}
