"use client";

import Image from "next/image";
import { useState } from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/Select";
import { formatAmount } from "@/lib/utils";

export const BankDropdown = ({ accounts = [], setValue, otherStyles, value }: IBankDropdownProps) => {
  const [selected, setSelected] = useState(value);

  const handleBankChange = (id: string) => {
    const account = accounts.find((account) => account.appwriteItemId === id)!;

    setSelected(account.name);

    if (setValue) {
      setValue("senderBank", id);
    }
  };

  return (
    <Select defaultValue={value} onValueChange={(value) => handleBankChange(value)}>
      <SelectTrigger className={`flex w-full bg-white gap-3 md:w-[300px] ${otherStyles}`}>
        {selected ? (
          <div className="flex gap-2">
            <Image src="icons/credit-card.svg" width={20} height={20} alt="account" />
            <span className="line-clamp-1 text-left">{selected}</span>{" "}
          </div>
        ) : (
          "Select an account"
        )}
      </SelectTrigger>
      <SelectContent className={`w-full bg-white md:w-[300px] ${otherStyles}`} align="end">
        <SelectGroup>
          <SelectLabel className="py-2 font-normal text-gray-500">Select a bank to display</SelectLabel>
          {accounts.map((account: Account) => (
            <SelectItem key={account.id} value={account.appwriteItemId} className="cursor-pointer border-t">
              <div className="flex flex-col ">
                <p className="text-16 font-medium">{account.name}</p>
                <p className="text-14 font-medium text-blue-600">{formatAmount(account.currentBalance)}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
