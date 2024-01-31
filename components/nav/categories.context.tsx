"use client";

/* eslint-disable no-unused-vars */

import { createContext, useContext, useEffect, useState } from "react";

interface CategoriesValue {
  active: Record<"cat" | "sub" | "dua", number | null>;
  setActiveDua: (id: number | null) => void;
  setActiveSub: (id: number | null) => void;
  setActiveCat: (id: number | null) => void;
}

const CategoriesContext = createContext<CategoriesValue | null>(null);

export function CategoriesProvider({ children }: React.PropsWithChildren) {
  const [active, setActive] = useState<CategoriesValue["active"]>({ cat: null, dua: null, sub: null });

  useEffect(() => {
    const qp = new URLSearchParams(window.location.search);
    const sub = parseInt(qp.get("sub") ?? "", 10);
    const cat = parseInt(qp.get("cat") ?? "", 10);
    const dua = parseInt(qp.get("dua") ?? "", 10);
    if (!isNaN(cat)) setActive(prev => ({ ...prev, cat }));
    if (!isNaN(sub)) setActive(prev => ({ ...prev, sub }));
    if (!isNaN(dua)) setActive(prev => ({ ...prev, dua }));

    if (!isNaN(sub)) {
      const element = document.getElementById(`sub-${sub}`);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    if (!isNaN(dua)) {
      const element = document.getElementById(`dua-${dua}`);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  function setActiveDua(id: number | null) {
    setActive(prev => ({ ...prev, dua: id }));
    setTimeout(() => {
      const element = document.getElementById(`dua-${id}`);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }

  function setActiveSub(id: number | null) {
    setActive(prev => ({ ...prev, sub: id }));
    setTimeout(() => {
      const element = document.getElementById(`sub-${id}`);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 200);
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
