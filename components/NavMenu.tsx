"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const whoweare: { id: number; title: string; href: string; description: string }[] = [
  {
    id: 1,
    title: "Our History",
    href: "/pages/who-we-are/our-history",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    id: 2,
    title: "Board of Directors",
    href: "/pages/who-we-are/board-of-directors",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    id: 3,
    title: "Our Team",
    href: "/pages/who-we-are/our-team",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    id: 4,
    title: "Vision & Mission",
    href: "/pages/who-we-are/vision-mission",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    id: 5,
    title: "Partners",
    href: "/pages/who-we-are/partners",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]
const getinvolves: { title: string; href: string; description: string }[] = [
  {
    title: "Donate",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Volunteer",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Careers",
    href: "#",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/pages/what-we-do" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              What We Do
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Who We Are</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li className="row-span-3 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-md">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* < className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      AIMG
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {whoweare.map((whoweare) => (
                <ListItem
                  key={whoweare.id}
                  title={whoweare.title}
                  href={whoweare.href}
                >
                  {whoweare.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {getinvolves.map((getinvolve) => (
                <ListItem
                  key={getinvolve.title}
                  title={getinvolve.title}
                  href={getinvolve.href}
                >
                  {getinvolve.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pages/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"