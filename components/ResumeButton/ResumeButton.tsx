import useBreakpoints from "@/hooks/useBreakpoints"
import { Button } from "../ui/button"
import { FileText } from "lucide-react"

export default function ResumeButton() {
  const breakpoint = useBreakpoints()
  return (
    <Button className="md:" variant={breakpoint?.md ? "default" : "link"}>
      <span className="text-white md:block hidden">My Resume</span>
      <FileText className="text-white md:hidden block" size={20} />
    </Button>
  )
}
