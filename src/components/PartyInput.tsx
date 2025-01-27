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
import { Party } from "@/data/party";

interface PartyInputProps {
  numGuess: number;
  partyList: Party[];
  selectedParty: Party | null;
  onPartyChange: (party: Party | null) => void;
}

function PartyInput({
  numGuess,
  partyList,
  selectedParty,
  onPartyChange,
}: PartyInputProps) {
  const [open, setOpen] = React.useState(false);

  const displayValue = selectedParty
    ? `พรรค${selectedParty.name}`
    : "เลือกพรรคการเมือง...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between bg-zinc-300 dark:bg-zinc-800 cursor-pointer text-ellipsis"
          value={displayValue}
        />
      </PopoverTrigger>
      <PopoverContent
        asChild
        className="w-[270px] md:w-[320px]"
        align="start"
        side={numGuess < 2 ? "bottom" : "top"}
        avoidCollisions={false}
      >
        <Command
          filter={(value, search) => {
            const partyName = `พรรค${
              partyList.find(
                (party) => party.id.toString() === value.toString()
              )?.name
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
              {partyList.map((party) => (
                <CommandItem
                  key={party.id.toString()}
                  value={party.id.toString()}
                  onSelect={(currentValue) => {
                    onPartyChange(
                      currentValue === selectedParty?.id.toString()
                        ? null
                        : party
                    );
                    setOpen(false);
                  }}
                >
                  พรรค{party.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedParty?.id.toString() === party.id.toString()
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
