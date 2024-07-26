"use client";
import React from "react";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import { Box, Container, Flex } from "@radix-ui/themes";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/issues" },
  ];
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={classnames({
                        "text-zinc-900": link.href === currentPath,
                        "text-zinc-500": link.href !== currentPath,
                        "hover:text-zinc-800 transition-colors": true,
                      })}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Logout</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
