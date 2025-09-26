"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Code, BookOpen, TrendingUp, Menu, Home, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    description: "Overview and quick access",
  },
  {
    title: "Code Review",
    href: "/dashboard/code-review",
    icon: Code,
    description: "AI-powered code analysis",
  },
  {
    title: "Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
    description: "Personalized recommendations",
  },
  {
    title: "Career",
    href: "/dashboard/career",
    icon: TrendingUp,
    description: "Career guidance and insights",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
    description: "Manage your profile and settings",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Code className="h-4 w-4" />
          </div>
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            AI Student Toolkit
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Back to Home Button */}
          {pathname !== "/" && (
            <Button variant="outline" size="sm" asChild className="hidden md:flex bg-transparent">
              <Link href="/">Back to Home</Link>
            </Button>
          )}

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Code className="h-4 w-4" />
                    </div>
                    <span className="text-xl font-bold">AI Student Toolkit</span>
                  </div>
                  <ThemeToggle />
                </div>

                <div className="space-y-4">
                  {navigationItems.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-muted text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
