"use client";

import { FontIcon, GeneraleIcon, LanguageIcon } from "$icons";
import { Checkbox } from "$shadcn/ui/checkbox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "$shadcn/ui/select";
import { Slider } from "$shadcn/ui/slider";
import { Switch } from "$shadcn/ui/switch";
import { cn } from "$shadcn/utils";
import { AnimatePresence, motion } from "framer-motion";
import { SVGProps, useState } from "react";

interface SettingsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export function Settings({ className }: SettingsProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <aside className={cn("rounded-3xl border bg-background p-4", className)}>
      <div className="p-4 text-center max-2xl:py-8">
        <p className="text-base  font-semibold max-2xl:text-lg">Settings</p>
      </div>
      <div className="space-y-4">
        <SettingItem
          Icon={LanguageIcon}
          text="Language Settings"
          value="language"
          setActive={setActive}
          active={active}
        >
          <div className="flex gap-2 rounded-b-md border border-t-0 px-4 py-5 *:flex-1">
            <button className="rounded-md border bg-primary py-1.5 text-white hover:brightness-110">English</button>
            <button className="rounded-md border py-1.5 hover:bg-muted">Bangla</button>
          </div>
        </SettingItem>
        <SettingItem
          Icon={GeneraleIcon}
          text="Generale Settings"
          value="generale"
          setActive={setActive}
          active={active}
        >
          <div className="flex flex-col gap-2 rounded-b-md border border-t-0 px-4 py-5 *:flex-1">
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
          <div className="flex flex-col gap-4 rounded-b-md border border-t-0 px-4 py-5 *:flex-1">
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
          <div className="flex  gap-2 rounded-b-md border border-t-0 px-4 py-5">
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
            "relative flex cursor-pointer items-center gap-2.5 rounded-md bg-muted-100 p-2.5 pl-4 before:pointer-events-none before:absolute before:inset-0 before:right-auto before:w-1  before:rounded-l-full",
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
