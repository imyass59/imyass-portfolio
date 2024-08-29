import { cn } from "@/lib/utils"
import { Code, FolderGit2, Home, User, AlignJustify } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Tooltip from "../Tooltip/Tooltip"
import ResumeButton from "../ResumeButton/ResumeButton"
import SidePanel from "../SidePanel/SidePanel"
import useBreakpoints from "@/hooks/useBreakpoints"
import { useEffect, useState } from "react"

interface NavigationBarProps {
  navigationLinks: {
    name: string
    href: string
  }[]
}

export default function NavigationBar({ navigationLinks }: NavigationBarProps) {
  const pathName = usePathname()

  const Icons: {
    [key: string]: string | React.ReactNode | JSX.Element | null
  } = {
    home: <Home size={30} />,
    about: <User size={30} />,
    projects: <FolderGit2 size={30} />,
    skills: <Code size={30} />,
    default: null,
  }

  const breakpoint = useBreakpoints()
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setOpen(!breakpoint?.md)

    return () => {
      setOpen(false)
    }
  }, [breakpoint?.md])

  console.log("breakpoint ", breakpoint)
  return (
    <>
      <aside className="flex h-16 md:h-screen w-full md:w-16 md:flex-col flex-row items-center justify-between md:justify-start bg-background3 transition-transform">
        <div className="flex h-[4.5rem] w-full items-center justify-center p-2">
          <Image
            src="/meta_logo.svg"
            height={150}
            width={150}
            className="h-8"
            alt="Imyass Portfolio"
          />
        </div>
        <nav className="md:flex hidden flex-1 md:flex-col gap-y-4 md:pt-10 items-center">
          {navigationLinks &&
            navigationLinks?.map((link, index) => (
              <Tooltip side="right" key={index} tooltipContent={link?.name}>
                <Link
                  data-testId={"navigation-link-" + link?.name?.toLowerCase()}
                  href={link.href}
                  aria-current={
                    pathName.toString() === link.href ? "page" : undefined
                  }
                  className="flex items-center justify-center w-12 h-12 rounded-md hover:text-primary text-gray-300 transition-colors"
                >
                  {Icons[link.name?.toLowerCase()] ?? link?.name}
                </Link>
              </Tooltip>
            ))}
        </nav>
        <div
          className={cn("md:hidden", "flex items-center justify-center w-full")}
        >
          <ResumeButton />

          <SidePanel
            trigger={<AlignJustify className="text-primary" size={32} />}
            sheetContentClaass={cn(
              "h-[400px] sm:h-[540px] w-full md:hidden bg-background3 border-0 ring-0 text-white flex items-center justify-center",
            )}
            side={"bottom"}
          >
            <nav className="md:hidden flex flex-1 flex-col gap-y-4 md:pt-10 items-center">
              {navigationLinks &&
                navigationLinks?.map((link, index) => (
                  <Link
                    data-testId={"navigation-link-" + link?.name?.toLowerCase()}
                    href={link.href}
                    aria-current={
                      pathName.toString() === link.href ? "page" : undefined
                    }
                    className="flex items-center justify-center rounded-md hover:text-primary text-gray-300 transition-colors gap-2"
                  >
                    {Icons[link.name?.toLowerCase()] ?? link?.name}
                    <span className="text-xl">{link?.name}</span>
                  </Link>
                ))}
            </nav>
          </SidePanel>
        </div>
      </aside>
    </>
  )
}
