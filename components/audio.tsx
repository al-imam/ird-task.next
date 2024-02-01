"use client";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

export function PLayer({ src }: { src: string }) {
  return (
    <AudioPlayer
      src={src}
      customAdditionalControls={[]}
      customVolumeControls={[]}
      customProgressBarSection={[]}
      className="dua-player max-sm:dua-player-sm"
      customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR, RHAP_UI.CURRENT_LEFT_TIME, RHAP_UI.LOOP]}
      layout="horizontal"
    />
  );
}
