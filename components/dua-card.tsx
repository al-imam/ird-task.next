import bookmarkIcon from "$assets/icons/bookmark.svg";
import copyIcon from "$assets/icons/copy.svg";
import duaCardIcon from "$assets/icons/duacard.svg";
import planIcon from "$assets/icons/plan.svg";
import playButtonIcon from "$assets/icons/play-button.svg";
import reportIcon from "$assets/icons/report.svg";
import shareIcon from "$assets/icons/share.svg";
import Image from "next/image";

export function DuaCard() {
  return (
    <div className="flex flex-col gap-7 rounded-[0.625rem] border bg-background px-8 py-4">
      <p className="flex items-center gap-2.5 text-base font-medium text-primary">
        <Image src={duaCardIcon} alt="allah" /> <span>2. Conditions for Dua to be successful</span>
      </p>

      <p className="text-base text-foreground">
        Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously
        and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of
        the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except
        according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give
        what he resists.
      </p>

      <p className="font-quran text-right text-2xl text-foreground">
        لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ
        قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ
        مِنْكَ الْجَدُّ
      </p>

      <div className="space-y-2.5">
        <p>
          <span className="font-semibold">Transliteration:</span> Laa ilaaha illallahu wahdahu laa sharika lahu,
          lahul-mulku wa lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir. Allaahumma laa maani&apos;a limaa
          a&apos;taita wa laa mu&apos;tia limaa mana&apos;ta wa laa yanfa&apos;u dhal-jaddi minka al-jaddu
        </p>
        <p>
          <span className="font-semibold"> Translation:</span> There is none worthy of worship except Allah alone with
          no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O
          Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune
          can benefit anyone for from You comes all wealth and fortune.
        </p>
      </div>

      <div className="">
        <p className="font-semibold text-primary">Reference:</p>
        <p className="font-semibold">Bukhari: 844</p>
      </div>

      <div className="flex items-center justify-between">
        <button className="rounded-full">
          <Image src={playButtonIcon} alt="play-audio" />
        </button>

        <div className="flex h-full items-center justify-between gap-8">
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
