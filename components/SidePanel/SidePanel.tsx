import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SidePanel({
  children,
  title,
  trigger,
  sheetContentClaass = "w-[400px] sm:w-[540px]",
  sheetHeaderClaass,
  side,
}: {
  children: React.ReactNode
  title?: string
  trigger?: React.ReactDOM | unknown | any
  sheetContentClaass?: string | undefined
  sheetHeaderClaass?: string | undefined
  side?: string | any
}) {
  return (
    <Sheet>
      <SheetTrigger>{trigger ?? "Open"}</SheetTrigger>
      <SheetContent side={side ?? "right"} className={sheetContentClaass}>
        <SheetHeader className={sheetHeaderClaass}>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{children}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
