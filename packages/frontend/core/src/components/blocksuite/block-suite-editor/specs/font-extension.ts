import { AffineCanvasTextFonts, FontConfigExtension } from '@blocksuite/blocks';

export function getFontConfigExtension() {
  return FontConfigExtension(
    runtimeConfig.isSelfHosted
      ? AffineCanvasTextFonts.map(font => ({
          ...font,
          // self-hosted fonts are served from /assets
          url: '/assets/' + new URL(font.url).pathname.split('/').pop(),
        }))
      : AffineCanvasTextFonts
  );
}
