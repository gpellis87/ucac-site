import { UserRound } from "lucide-react";

type ArtistPortraitPlaceholderProps = {
  name: string;
  variant?: "avatar" | "profile";
};

export default function ArtistPortraitPlaceholder({
  name,
  variant = "profile",
}: ArtistPortraitPlaceholderProps) {
  if (variant === "avatar") {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-parchment/[0.07] text-terracotta/75"
        aria-label={`${name} portrait placeholder`}
        role="img"
      >
        <UserRound size={17} strokeWidth={1.7} />
      </div>
    );
  }

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_50%_35%,rgba(217,120,82,0.18),transparent_34%),linear-gradient(135deg,rgba(244,230,202,0.08),rgba(244,230,202,0.025))] px-8 text-center"
      aria-label={`${name} portrait placeholder`}
      role="img"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-terracotta/35 bg-black/10 text-terracotta/80">
        <UserRound size={40} strokeWidth={1.35} />
      </div>
      <p className="text-[0.75rem] uppercase tracking-[0.22em] text-parchment/60">
        Artist Portrait
      </p>
    </div>
  );
}
