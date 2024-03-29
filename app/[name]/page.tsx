import { DuaCard } from "$components/dua-card";
import { Category, Navigation } from "$types";
import { joinUrl } from "$util";
import axios from "axios";
import { notFound, redirect } from "next/navigation";
import { Fragment } from "react";
import slugify from "slugify";

export async function generateStaticParams(): Promise<{ name: string }[]> {
  const { data } = await axios.get<Navigation[]>(joinUrl(process.env.NEXT_PUBLIC_API_URL, "navigation"));
  return data.map(nav => ({ name: slugify(nav.cat_name_en, { lower: true }) }));
}

interface DuaPageProps {
  searchParams: Record<string, string>;
  params: { name: string };
}

export default async function DuaPage({ searchParams, params }: DuaPageProps) {
  const cat = parseInt(searchParams.cat ?? "", 10);
  if (isNaN(cat)) redirect("/");

  const { data } = await axios.get<Category[]>(joinUrl(process.env.NEXT_PUBLIC_API_URL, "/dua/category", cat));
  if (data.length === 0) return notFound();

  const name = slugify(data[0].cat_name_en, { lower: true });
  if (params.name !== name) return redirect(`/${name}?cat=${cat}`);

  const subCats = data.map(c => c.sub_categories).flat(1);

  return (
    <main className="flex flex-col gap-5">
      {subCats.length === 0 && <p className="my-auto h-full py-10 text-center text-4xl font-semibold">No duas found</p>}
      {subCats.map(subCat => (
        <Fragment key={subCat.id}>
          <div
            id={`sub-${subCat.subcat_id}`}
            className={`scroll-m-10 rounded-[0.625rem] border bg-background px-4 py-4 sm:px-8`}
          >
            <p className="text-base font-medium">
              <span className="text-primary">Section:</span> {subCat.subcat_name_en}
            </p>
          </div>
          {subCat.duas.map(dua => (
            <DuaCard dua={dua} key={dua.id + dua.dua_id} />
          ))}
        </Fragment>
      ))}
    </main>
  );
}
