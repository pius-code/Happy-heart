"use client";

import { PhoneIcon, WhatsappLogoIcon } from "@phosphor-icons/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

interface PhoneMenuInterface {
  // Classes for the clickable phone number
  className?: string;
  // Classes for the phone icon in front of the number
  iconClassName?: string;
}

// The school phone number. Clicking it asks whether to chat on WhatsApp or call.
export default function PhoneMenu({ className, iconClassName }: PhoneMenuInterface) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn("inline-flex cursor-pointer items-center gap-2 text-left", className)}
      >
        <PhoneIcon aria-hidden="true" className={cn("size-4 shrink-0", iconClassName)} />
        {site.phone.display}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-auto min-w-52 rounded-card p-1.5">
        <DropdownMenuItem asChild className="cursor-pointer gap-3 rounded-input px-3 py-2.5 text-base">
          <a href={site.phone.whatsappHref} target="_blank" rel="noopener noreferrer">
            <WhatsappLogoIcon aria-hidden="true" className="size-5 text-accent-emerald" />
            Chat on WhatsApp
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer gap-3 rounded-input px-3 py-2.5 text-base">
          <a href={site.phone.href}>
            <PhoneIcon aria-hidden="true" className="size-5 text-brand-coral" />
            Call {site.phone.display}
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
