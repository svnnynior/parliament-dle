"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { parties } from "@/data/party";

function PartyInput() {
  const [open, setOpen] = React.useState(false);
  const [selectedParty, setSelectedParty] = React.useState<string>("");

  const displayValue = selectedParty
    ? `พรรค${parties.find((party) => party.codeEN === selectedParty)?.name}`
    : "เลือกพรรคการเมือง...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
          value={displayValue}
        />
      </PopoverTrigger>
      <PopoverContent
        className="w-[300px]"
        side="bottom"
        avoidCollisions={false}
      >
        <Command>
          <CommandInput placeholder="ค้นหาพรรคการเมือง..." />
          <CommandList>
            <CommandEmpty>ไม่พบพรรคการเมือง</CommandEmpty>
            <CommandGroup>
              {parties.map((party) => (
                <CommandItem
                  key={party.codeEN}
                  value={party.codeEN}
                  onSelect={(currentValue) => {
                    setSelectedParty(
                      currentValue === selectedParty ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  พรรค{party.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedParty === party.codeEN
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default PartyInput;
