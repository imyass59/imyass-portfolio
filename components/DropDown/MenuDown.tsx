import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

interface IItem {
  label: string
  href: string
  type: "link" | "button"
}

export default function MenuDown({
  children,
  label,
  items,
}: {
  children: React.ReactNode
  label: string
  items: IItem[]
}) {
  const router = useRouter()
  const handleClick = (item: IItem) => {
    switch (item.type) {
      case "link":
        router.push(item.href)
        break
      case "button":
        console.log("Button clicked")
        break
      default:
        break
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {label ? (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        ) : null}

        {items.map((item, index) => (
          <DropdownMenuItem
            className=" mt-3"
            onClick={() => handleClick(item)}
            data-testId={item?.label}
            key={index}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
