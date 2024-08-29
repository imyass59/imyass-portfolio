export const getNavigationMenu = () => {
  return [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
  ] as {
    name: string
    href: string
  }[]
}
