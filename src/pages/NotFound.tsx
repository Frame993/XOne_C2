import { Button, SectionHeading } from "../components/ui";
import { FrameSection, GRID_STEP, GridCanvas } from "../components/fx";
import { SiteLayout } from "../components/layout/SiteLayout";
import { link, t } from "../i18n";

export function NotFound() {
  return (
    <SiteLayout title={t("Página no encontrada | XOne", "Page not found | XOne")}>
      <FrameSection label="404" style={{ minHeight: 5 * GRID_STEP + 1 }} labels={["404", "XOne", "MXDP", "Native"]} background={<GridCanvas centerCols={7} className="h-full" />}>
        <div className="xo-container xo-rails relative flex flex-col items-center gap-8 px-5 py-20 text-center lg:border-x-0 lg:pt-[calc(101px+48px)]">
          <SectionHeading as="h1" eyebrow="404" title={t("Esta página", "This page")} accent={t("no existe", "does not exist")} subtitle={t("Puede que se haya movido o que todavía no esté publicada.", "It may have moved or may not be published yet.")} />
          <Button href={link("")} iconRight="arrow">{t("Volver al inicio", "Back to home")}</Button>
        </div>
      </FrameSection>
    </SiteLayout>
  );
}
