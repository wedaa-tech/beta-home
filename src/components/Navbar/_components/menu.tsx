"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";

const components: { title: string; description: string }[] = [
  {
    title: "Frozen",

    description:
      "Recommended template for most use cases. Includes all the components you need to get started.",
  },
  {
    title: "Swift",

    description:
      "A template with a minimal set of components. Use this template if you want to build your own components.",
  },
  {
    title: "Tuscany",

    description:
      "Advanced template with more components and features. Use this template if you want to build a complex UI.",
  },
  {
    title: "Amber",

    description: "Great for building a marketing or landing page.",
  },
  {
    title: "Tide",

    description:
      "Layered template with a sidebar navigation. Great for building a dashboard or admin panel.",
  },
  {
    title: "Mint",

    description:
      "Nice template for building a blog or a content-heavy website.",
  },
];

export function NavigationMenuBar() {
  return (
    <div className="ml-20 mr-10">
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
        <NavigationMenuTrigger className="text-sm text-white hover:text-foreground/80">
  Features
</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />

                    <div className="mb-2 mt-4 text-lg font-medium">
                      Application
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    software for everyone.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/product" title="Product">
                Learn about the project goals and how to get started.
              </ListItem>
              <ListItem href="/" title="Demo">
                How to build a store in 60 seconds with WeDAA.
              </ListItem>
              <ListItem href="/" title="Community">
                Join the community and get help with your project.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger className="text-sm text-white hover:text-foreground/80">
  Solutions
</NavigationMenuTrigger>          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger className="text-sm text-white hover:text-foreground/80">
  Resources
</NavigationMenuTrigger>          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink
  className={cn(
    navigationMenuTriggerStyle(),
    "text-sm text-white hover:text-foreground/80"
  )}
>
  Enterprise
</NavigationMenuLink>

          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <div>
            <NavigationMenuLink
  className={cn(
    navigationMenuTriggerStyle(),
    "text-sm text-white hover:text-foreground/80"
  )}
>
  Pricing
</NavigationMenuLink>

            </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
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
  );
});
ListItem.displayName = "ListItem";