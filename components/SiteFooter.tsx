type SiteFooterProps = {
  privacy: string;
  note: string;
};

export function SiteFooter({ privacy, note }: SiteFooterProps) {
  return (
    <footer className="border-t border-line bg-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-muted lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>Saga Tekno Studio</p>
        <p>{privacy}</p>
        <p>{note}</p>
      </div>
    </footer>
  );
}
