import bookmarkIcon from "$assets/icons/bookmark.svg";
import copyIcon from "$assets/icons/copy.svg";
import duaCardIcon from "$assets/icons/duacard.svg";
import planIcon from "$assets/icons/plan.svg";
import playButtonIcon from "$assets/icons/play-button.svg";
import reportIcon from "$assets/icons/report.svg";
import shareIcon from "$assets/icons/share.svg";
import { Dua } from "$types";
import Image from "next/image";

export function DuaCard({ dua }: { dua: Dua }) {
  return (
    <div className="flex flex-col gap-7 rounded-[0.625rem] border bg-background px-8 py-4">
      <p className="flex items-center gap-2.5 text-base font-medium text-primary">
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

      <div className="flex items-center">
        {dua.audio && (
          <button className="mr-auto rounded-full">
            <Image src={playButtonIcon} alt="play-audio" />
          </button>
        )}

        <div className="ml-auto flex h-full items-center justify-between gap-8">
          <button className="transition-transform hover:scale-105 focus-visible:ring-0">
            <Image src={copyIcon} alt="copy" />
          </button>
          <button className="transition-transform hover:scale-105 focus-visible:ring-0">
            <Image src={bookmarkIcon} alt="bookmark" />
          </button>
          <button className="transition-transform hover:scale-105 focus-visible:ring-0">
            <Image src={planIcon} alt="memorize" />
          </button>
          <button className="transition-transform hover:scale-105 focus-visible:ring-0">
            <Image src={shareIcon} alt="share" />
          </button>
          <button className="transition-transform hover:scale-105 focus-visible:ring-0">
            <Image src={reportIcon} alt="report" />
          </button>
        </div>
      </div>
    </div>
  );
}
