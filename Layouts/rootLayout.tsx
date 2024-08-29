import NavigationBar from "@/components/NavigationBar/NavigationBar"
import RevealMotion from "@/components/Reveal/RevealMotion"
import { getNavigationMenu } from "@/services/AppService"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigationLinks = getNavigationMenu()
  return (
    <>
      <NavigationBar navigationLinks={navigationLinks ?? []} />
      <main className="w-full h-screen">
        <RevealMotion>{children}</RevealMotion>
      </main>
    </>
  )
}
