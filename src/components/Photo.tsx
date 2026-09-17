import { PHOTO_WIDTHS, photoUrl, type Photo as PhotoData } from "@/lib/images";

type Props = {
  photo: PhotoData;
  /** Intrinsic aspect ratio of the crop we request. */
  ratio?: "21/9" | "16/9" | "4/3" | "3/2" | "1/1";
  /** Layout width hint for the browser's srcset choice. */
  sizes?: string;
  /** Above-the-fold images load eagerly; everything else waits. */
  eager?: boolean;
  /**
   * How much veil sits on top of the photo:
   *  - "none"  bare photograph
   *  - "soft"  a light brand wash; use when nothing overlaps the image
   *  - "text"  darkens the lower half so overlaid copy stays readable
   *  - "side"  darkens the left edge for a headline beside the subject
   */
  tint?: "none" | "soft" | "text" | "side";
  className?: string;
  /** Rendered over the photo — captions, badges, headings. */
  children?: React.ReactNode;
};

const RATIOS: Record<NonNullable<Props["ratio"]>, [number, number]> = {
  "21/9": [21, 9],
  "16/9": [16, 9],
  "4/3": [4, 3],
  "3/2": [3, 2],
  "1/1": [1, 1],
};

/**
 * A photograph inside a framed container.
 *
 * Renders a real responsive image: one crop per breakpoint from the CDN, a
 * reserved aspect-ratio box so nothing shifts while it loads, and a light
 * brand wash that ties warm stock photography to the cyan/violet UI without
 * burying the picture itself.
 */
export function Photo({
  photo,
  ratio = "16/9",
  sizes = "100vw",
  eager = false,
  tint = "soft",
  className = "",
  children,
}: Props) {
  const [rw, rh] = RATIOS[ratio];
  const height = (w: number) => Math.round((w * rh) / rw);

  return (
    <figure
      className={`relative overflow-hidden bg-secondary ${className}`}
      style={{ aspectRatio: `${rw} / ${rh}` }}
    >
      <img
        src={photoUrl(photo.id, 1080, height(1080))}
        srcSet={PHOTO_WIDTHS.map((w) => `${photoUrl(photo.id, w, height(w))} ${w}w`).join(", ")}
        sizes={sizes}
        alt={photo.alt}
        width={1080}
        height={height(1080)}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        // Lifted slightly so dark photography still reads against the dark UI.
        className="absolute inset-0 h-full w-full select-none object-cover brightness-[1.08] contrast-[1.04] saturate-[1.05]"
      />

      {tint !== "none" && (
        <>
          {/* Cool brand wash — kept light so the photo stays the subject. */}
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-[oklch(0.55_0.18_275)]/15"
          />
          {/* Legibility ramp, bottom only. */}
          <span
            aria-hidden
            className={
              tint === "text"
                ? "absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent"
                : tint === "side"
                  ? "absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent md:via-background/35"
                  : "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/75 to-transparent"
            }
          />
        </>
      )}

      {children && <div className="relative h-full w-full">{children}</div>}
    </figure>
  );
}
