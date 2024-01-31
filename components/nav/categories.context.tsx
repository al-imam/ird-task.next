"use client";

import { useSearchParams } from "next/navigation";
/* eslint-disable no-unused-vars */

import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParam } from "react-use";

interface CategoriesValue {
  active: Record<"cat" | "sub" | "dua", number | null>;
  setActiveDua: (id: number | null) => void;
  setActiveSub: (id: number | null) => void;
  setActiveCat: (id: number | null) => void;
}

const CategoriesContext = createContext<CategoriesValue | null>(null);

export function CategoriesProvider({ children }: React.PropsWithChildren) {
  const [active, setActive] = useState<CategoriesValue["active"]>({ cat: null, dua: null, sub: null });
  const sp = useSearchParams();

  useEffect(() => {
    const sub = parseInt(sp.get("sub") ?? "", 10);
    const cat = parseInt(sp.get("cat") ?? "", 10);
    if (!isNaN(cat)) setActive(prev => ({ ...prev, sub, cat }));
    if (!isNaN(sub)) setActive(prev => ({ ...prev, sub }));
  }, []);

  useEffect(() => {
    const sub = parseInt(sp.get("sub") ?? "", 10);
    const cat = parseInt(sp.get("cat") ?? "", 10);
    if (!isNaN(sub) && !isNaN(cat)) {
      const element = document.getElementById(`${cat}-${sub}`);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [sp.get("sub")]);

  function setActiveDua(id: number | null) {
    setActive(prev => ({ ...prev, dua: id }));
  }

  function setActiveSub(id: number | null) {
    setActive(prev => ({ ...prev, sub: id }));
  }

  function setActiveCat(id: number | null) {
    setActive(prev => ({ ...prev, cat: id }));
  }

  return (
    <CategoriesContext.Provider value={{ active, setActiveCat, setActiveDua, setActiveSub }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategory() {
  const values = useContext(CategoriesContext);
  if (values) return values;
  throw new Error("useCategory will only work inside CategoriesProvider!");
}
