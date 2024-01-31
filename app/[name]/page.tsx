import { DuaCard } from "$components/dua-card";
import { ScrollArea } from "$shadcn/ui/scroll-area";
import { Category } from "$types";
import { joinUrl } from "$util";
import axios from "axios";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function DuaPage({ searchParams }: { searchParams: Record<string, string> }) {
  const cat = parseInt(searchParams.cat ?? "", 10);
  if (isNaN(cat)) redirect("/");

  const { data } = await axios.get<Category[]>(joinUrl(process.env.NEXT_PUBLIC_API_URL, "/dua/category", cat));
  const subCats = data.map(c => c.sub_categories).flat(1);

  return (
    <ScrollArea className="">
      <main className="flex flex-col gap-3 pb-[--padding-edge]">
        {subCats.map(subCat => (
          <Fragment key={subCat.id + subCat.cat_id + subCat.subcat_id}>
            <div className="rounded-[0.625rem] border bg-background px-8 py-4">
              <p className="text-base">
                <span className="font-medium text-primary">Section:</span> {subCat.subcat_name_en}
              </p>
            </div>
            {subCat.duas.map(dua => (
              <DuaCard dua={dua} key={dua.id + dua.dua_id} />
            ))}
          </Fragment>
        ))}
      </main>
    </ScrollArea>
  );
}
