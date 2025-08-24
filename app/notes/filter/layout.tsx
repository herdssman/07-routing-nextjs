import css from './LayoutNotes.module.css'

interface LayoutNotesProps {
    children: React.ReactNode;
    sidebar: React.ReactNode;
    modal: React.ReactNode
}

export default function LayoutNotes ({ children, sidebar, modal }: LayoutNotesProps) {
    return (
        <div className={css.container}>
            <aside className={css.sidebar}>{sidebar}</aside>
            <div className={css.notesWrapper}>{children}{modal}</div>
        </div>
    )
};