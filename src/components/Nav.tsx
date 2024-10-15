"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import ButtonTheem from "./ButtonTheem";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="pt-10">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>Infinity</NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" className=" font-Raleway " href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" className=" font-Raleway " href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className=" font-Raleway " href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className=" font-Raleway " href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className=" font-Raleway " href="#">
            Testomonials
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ButtonTheem
            content={"Contact Us"}
            bg_color={"none"}
            border_color={"border-white"}
            border="border"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      {/* <BackgroundBeams /> */}
    </Navbar>
  );
}
