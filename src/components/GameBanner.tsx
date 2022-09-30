interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  function PluralOrSingularAds() {
    if (props.adsCount > 1) {
      return `${props.adsCount} anúncios`;
    } else if (props.adsCount === 0) {
      return 'Nenhum anúncio';
    } else {
      return `${props.adsCount} anúncio`;
    }
  }

  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt={props.title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block mt-1">
          {PluralOrSingularAds()}
        </span>
      </div>
    </a>
  );
}
