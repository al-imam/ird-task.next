import duaCardIcon from "$assets/icons/duacard.svg";
import { PLayer } from "$components/audio";
import { DuaCardAction } from "$components/dua-card-action";
import { Dua } from "$types";
import Image from "next/image";

export function DuaCard({ dua }: { dua: Dua }) {
  return (
    <div id={`dua-${dua.dua_id}`} className="flex flex-col gap-7 rounded-[0.625rem] border bg-background px-8 py-4">
      <p className="flex items-center gap-2.5 text-base font-semibold text-primary">
        <Image src={duaCardIcon} alt="allah" /> <span>{dua.dua_name_en}</span>
      </p>

      {dua.top_en && <p className="text-base text-foreground">{dua.top_en}</p>}
      {dua.dua_arabic && <p className="py-2.5 text-right font-quran text-2xl text-foreground">{dua.dua_arabic}</p>}

      {(dua.translation_en || dua.transliteration_en) && (
        <div className="space-y-2.5">
          {dua.transliteration_en && (
            <p>
              <span className="font-semibold">Transliteration:</span> {dua.transliteration_en}
            </p>
          )}
          {dua.translation_en && (
            <p>
              <span className="font-semibold"> Translation:</span> {dua.translation_en}
            </p>
          )}
        </div>
      )}

      {dua.refference_en && (
        <div className="">
          <p className="font-semibold text-primary">Reference:</p>
          <p className="font-semibold">{dua.refference_en}</p>
        </div>
      )}

      <div className="flex items-center gap-4">
        {dua.audio && (
          <div className="sm:flex-1">
            <PLayer src={dua.audio} />
          </div>
        )}

        <DuaCardAction />
      </div>
    </div>
  );
}
