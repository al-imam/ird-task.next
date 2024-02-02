"use client";

import { FontIcon, GeneraleIcon, LanguageIcon } from "$icons";
import { Button } from "$shadcn/ui/button";
import { Checkbox } from "$shadcn/ui/checkbox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "$shadcn/ui/select";
import { Slider } from "$shadcn/ui/slider";
import { Switch } from "$shadcn/ui/switch";
import { cn } from "$shadcn/utils";
import { rand } from "$util";
import { AnimatePresence, motion } from "framer-motion";
import { SVGProps, useState } from "react";

interface SettingsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export function Settings({ className }: SettingsProps) {
  const [active, setActive] = useState<string | null>("appearance");

  return (
    <aside className={cn("rounded-3xl border bg-background p-4", className)}>
      <div className="p-4 text-center max-2xl:py-8">
        <p className="text-base  font-semibold max-2xl:text-lg">Settings</p>
      </div>
      <div className="space-y-4 text-sm">
        <SettingItem
          Icon={LanguageIcon}
          text="Language Settings"
          value="language"
          setActive={setActive}
          active={active}
        >
          <div className="flex gap-2 rounded-b-md border border-t-0 p-4 py-6 *:flex-1">
            <Button>English</Button>
            <Button variant={"outline"}>Bangla</Button>
          </div>
        </SettingItem>
        <SettingItem
          Icon={GeneraleIcon}
          text="Generale Settings"
          value="generale"
          setActive={setActive}
          active={active}
        >
          <div className="space-y-2 rounded-b-md border border-t-0 p-4 py-6 text-foreground">
            <label htmlFor="show-arabic" className="flex w-full items-center justify-between">
              Show Arabic
              <Checkbox id="show-arabic" />
            </label>
            <label htmlFor="show-translation" className="flex w-full items-center justify-between">
              Show Translation
              <Checkbox id="show-translation" />
            </label>
            <label htmlFor="show-transliteration" className="flex w-full items-center justify-between">
              Show Arabic
              <Checkbox id="show-transliteration" />
            </label>
            <label htmlFor="show-refference" className="flex w-full items-center justify-between">
              Show Refference
              <Checkbox id="show-refference" />
            </label>
          </div>
        </SettingItem>
        <SettingItem Icon={FontIcon} text="Font Settings" value="font" setActive={setActive} active={active}>
          <div className="space-y-6 rounded-b-md border border-t-0 px-4 py-6">
            <div className="space-y-3">
              <span>Translation Font Size</span>
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <span>Select Arabic Script</span>
              <Select defaultValue="uthmani">
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="uthmani">Uthmani</SelectItem>
                    <SelectItem value="indopak">Indopak</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <span>Select Arabic Font</span>
              <Select defaultValue="kfgq">
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="kfgq">KFGQ</SelectItem>
                    <SelectItem value="me-quran">Me Quran</SelectItem>
                    <SelectItem value="al-mushaf">Al Mushaf</SelectItem>
                    <SelectItem value="amiri-quran">Amiri Quran</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <span>Arabic Font Size</span>
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
          </div>
        </SettingItem>
        <SettingItem
          Icon={FontIcon}
          text="Appearance Settings"
          value="appearance"
          setActive={setActive}
          active={active}
        >
          <div className="flex gap-2 rounded-b-md border border-t-0 px-4 py-6">
            <label className="flex-1" htmlFor="night-mode">
              Night Mode
            </label>
            <Switch id="night-mode" />
          </div>
        </SettingItem>
      </div>
    </aside>
  );
}

interface SettingItemProps {
  children: React.ReactNode;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  value: string;
  active: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
}

function SettingItem({ children, text, Icon, setActive, value, active }: SettingItemProps) {
  const isOpen = value === active;

  return (
    <motion.div>
      <AnimatePresence>
        <motion.div
          key="question"
          className={cn(
            "relative flex cursor-pointer items-center gap-2.5 rounded-md bg-muted-100 px-3.5 py-2.5 before:pointer-events-none before:absolute before:inset-0 before:right-auto before:w-1  before:rounded-l-full",
            { "before:bg-primary": isOpen }
          )}
          onClick={() => setActive(value)}
        >
          <div className="flex h-[2.375rem]  w-[2.375rem] items-center justify-center rounded-full bg-muted-selected">
            <Icon className={cn("text-[rgb(134,134,134)]", { "text-primary": isOpen })} />
          </div>
          <span className={cn("font-medium text-[rgb(134,134,134)]", { "text-primary": isOpen })}>{text}</span>
        </motion.div>

        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface SettingsSkeletonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export function SettingsSkeleton({ className }: SettingsSkeletonProps) {
  return (
    <div className={cn("rounded-3xl bg-background p-4", className)}>
      <div className="p-4 max-2xl:py-8">
        <div className="mx-auto h-6 rounded-md bg-muted" style={{ width: `${rand(40, 70)}%` }} />
      </div>
      <div className="space-y-4">
        <SettingsItemsSkeleton />
        <div className="flex gap-4 px-4 py-2">
          <div className="h-[2.375rem] flex-1 animate-pulse rounded-md bg-muted" />
          <div className="h-[2.375rem] flex-1 animate-pulse rounded-md bg-muted-selected" />
        </div>
        <SettingsItemsSkeleton />
        <SettingsItemsSkeleton />
        <SettingsItemsSkeleton />
      </div>
    </div>
  );
}

export function SettingsItemsSkeleton() {
  return (
    <div className="flex items-center gap-2.5 rounded-md bg-muted-100 px-3.5 py-2.5">
      <div className="h-[2.375rem] w-[2.375rem] animate-pulse rounded-full bg-muted-selected" />
      <div className="h-5 animate-pulse rounded-full bg-muted-selected" style={{ width: `${rand(40, 70)}%` }} />
    </div>
  );
}
