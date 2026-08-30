"use client";

import { useState } from "react";
import { CreditCard, Crown, Linkedin, Mail, Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const productsMenu = [
  {
    name: "J-Optic",
    image: "/products (1).svg",
    description: "The only cold outreach tool that helps you reach inboxes",
  },
  {
    name: "J-Store",
    image: "/products (2).svg",
    description: "Keep your emails away from spam",
  },
  {
    name: "J-Optic-Pro",
    image: "/products (3).svg",
    description: "Book meetings in the easiest way ever",
  },
  {
    name: "J-Mall",
    image: "/products (4).svg",
    description: "Build your Personal brand on LinkedIn",
  },
  {
    name: "Jet-Next",
    image: "/products (5).svg",
    description: "Build your Personal brand on Twitter",
  },
];

const freeContentMenu = [
  {
    title: "Personal branding school",
    description: "Access free courses on the best ways to acquire customers",
    icon: Linkedin,
    color: "bg-blue-50 text-blue-500",
  },
  {
    title: "Deliverability masterclass",
    description:
      "Receive weekly tips and successful outreach strategies directly in your inbox",
    icon: Mail,
    color: "bg-emerald-50 text-emerald-500",
  },
  {
    title: "Multi-channel masterclass",
    description:
      "Access step-by-step playbooks on how to find customers and sign more deals",
    icon: CreditCard,
    color: "bg-purple-50 text-purple-500",
  },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest < 100) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }

    if (latest > previous && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -120 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-100 flex justify-center"
      >
        <motion.div
          animate={{
            width: isAtTop ? "calc(100% - 32px)" : "100%",
            maxWidth: isAtTop ? "1152px" : "100%",
            marginTop: isAtTop ? "16px" : "0px",
            borderRadius: isAtTop ? "16px" : "0px",
            paddingLeft: isAtTop ? "16px" : "24px",
            paddingRight: isAtTop ? "16px" : "24px",
            boxShadow: isAtTop
              ? "0 10px 15px -3px rgb(0 0 0 / 0.1)"
              : "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mx-auto bg-white border-b border-blue-50/50 py-2.5 flex items-center justify-between"
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-black rounded-lg inline-block lowercase leading-none hover:opacity-80 transition-opacity shrink-0"
          >
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded-md bg-black">
                <Crown className="text-white h-5 w-5 lg:h-6 lg:w-6" />
              </div>
              <span className="font-bold text-xl lg:text-2xl tracking-tight">
                jethings
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Products */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 font-medium text-lg bg-transparent hover:bg-gray-50/50 data-[state=open]:bg-gray-50/50">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-2 p-2 w-[550px]">
                      {productsMenu.map((product) => (
                        <NavigationMenuLink key={product.name} asChild>
                          <Link
                            href="#"
                            className="flex flex-row items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all group"
                          >
                            <div className="relative w-8 h-8 shrink-0">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain transition-transform group-hover:scale-110"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <h4 className="font-semibold text-gray-900 text-lg leading-tight">
                                {product.name}
                              </h4>
                              <p className="text-gray-500 leading-snug line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-gray-700 font-medium bg-transparent hover:bg-gray-50/50",
                      )}
                    >
                      <span className="text-lg">Our story</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-gray-700 font-medium text-lg bg-transparent hover:bg-gray-50/50",
                      )}
                    >
                      <span className="text-lg">Podcasts</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-gray-700 font-medium text-lg bg-transparent hover:bg-gray-50/50",
                      )}
                    >
                      <span className="text-lg">Blog</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="cursor-pointer text-gray-700 font-medium text-lg bg-transparent hover:bg-gray-50/50 data-[state=open]:bg-gray-50/50">
                    Free content
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col gap-1 p-2 w-[400px]">
                      {freeContentMenu.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            href="#"
                            className="flex flex-row items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-all group"
                          >
                            <div
                              className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-transform group-hover:scale-110",
                                item.color,
                              )}
                            >
                              <item.icon className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <h4 className="font-bold text-gray-900 text-lg leading-tight">
                                {item.title}
                              </h4>
                              <p className="text-gray-500 leading-snug">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <Button className="hidden lg:flex bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 rounded-xl px-7 py-2.5 text-lg h-auto font-semibold transition-all hover:scale-105 active:scale-95">
              Apply to jethings
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-10 w-10 rounded-xl hover:bg-gray-100 shrink-0"
                >
                  <Menu className="h-6 w-6 text-gray-900" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85%] max-w-[360px] border-l-0 p-0 z-250 bg-white rounded-tl-2xl rounded-bl-2xl"
              >
                <SheetHeader className="p-6">
                  <SheetTitle className="text-left">
                    <div className="flex text-2xl items-center space-x-2">
                      <div className="p-1 rounded-md bg-black">
                        <Crown className="text-white h-7 w-7" />
                      </div>
                      <span className="font-bold lowercase tracking-tight">
                        jethings
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="p-6 flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-100px)]">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-none">
                      <AccordionTrigger className="cursor-pointer text-xl font-semibold py-3 hover:no-underline hover:text-blue-600 transition-colors">
                        Products
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-4 pl-2 pt-2 pb-4">
                          {productsMenu.map((product) => (
                            <Link
                              key={product.name}
                              href="#"
                              className="flex flex-row items-start gap-4 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                              <div className="relative w-10 h-10 shrink-0">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex flex-col gap-1">
                                <h4 className="font-bold text-gray-900 leading-tight">
                                  {product.name}
                                </h4>
                                <p className="text-gray-500 text-sm leading-snug">
                                  {product.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="free" className="border-none">
                      <AccordionTrigger className="cursor-pointer text-xl font-semibold py-3 hover:no-underline hover:text-blue-600 transition-colors">
                        Free content
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-4 pl-2 pt-2 pb-4">
                          {freeContentMenu.map((item) => (
                            <Link
                              key={item.title}
                              href="#"
                              className="flex flex-row items-start gap-4 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                              <div
                                className={cn(
                                  "flex items-center justify-center w-10 h-10 rounded-lg shrink-0",
                                  item.color,
                                )}
                              >
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col gap-1">
                                <h4 className="font-bold text-gray-900 leading-tight">
                                  {item.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-snug">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link
                    href="#"
                    className="text-lg font-semibold py-3 hover:text-blue-600 transition-colors border-b border-transparent"
                  >
                    Our story
                  </Link>
                  <Link
                    href="#"
                    className="text-xl font-semibold py-3 hover:text-blue-600 transition-colors"
                  >
                    Podcasts
                  </Link>
                  <Link
                    href="#"
                    className="text-xl font-semibold py-3 hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </Link>

                  <div className="mt-8">
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/20 rounded-2xl h-14 text-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]">
                      Apply to jethings
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </motion.nav>

      <div className="h-20 lg:h-24" />
    </>
  );
};

export default Navbar;
