import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Tooltip({
  children,
  tooltipContent,
  side = "top",
}: {
  children: React.ReactNode
  tooltipContent: React.ReactNode | string
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <TooltipProvider>
      <TooltipPrimitive>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent side={side}>{tooltipContent}</TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  )
}
