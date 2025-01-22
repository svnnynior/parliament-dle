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
    ? `พรรค${
        parties.find(
          (party) => party.id.toString() === selectedParty.toString()
        )?.name
      }`
    : "เลือกพรรคการเมือง...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between bg-zinc-200 dark:bg-zinc-800"
          value={displayValue}
        />
      </PopoverTrigger>
      <PopoverContent
        className="w-[270px] md:w-[320px]"
        align="start"
        side="bottom"
        avoidCollisions={false}
      >
        <Command
          filter={(value, search) => {
            const partyName = `พรรค${
              parties.find((party) => party.id.toString() === value.toString())
                ?.name
            }`;
            if (partyName && partyName.includes(search)) {
              return 1;
            }
            return 0;
          }}
        >
          <CommandInput placeholder="ค้นหาพรรคการเมือง..." />
          <CommandList>
            <CommandEmpty>ไม่พบพรรคการเมือง</CommandEmpty>
            <CommandGroup>
              {parties.map((party) => (
                <CommandItem
                  key={party.id.toString()}
                  value={party.id.toString()}
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
                      selectedParty === party.id.toString()
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
