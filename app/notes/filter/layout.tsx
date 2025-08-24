import css from "./LayoutNotes.module.css";

interface LayoutNotesProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function LayoutNotes({ children, sidebar }: LayoutNotesProps) {
  return (
    <section className={css.section}>
      <aside className={css.aside}>{sidebar}</aside>
      <div className={css.container}>{children}</div>
    </section>
  );
}