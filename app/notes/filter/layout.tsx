import css from './LayoutNotes.module.css'


export default function LayoutNotes ({ children, sidebar, modal }:
    {
    children: React.ReactNode;
    sidebar: React.ReactNode;
    modal: React.ReactNode;
    }) {
    return (
        <div className={css.container}>
            <aside className={css.sidebar}>{sidebar}</aside>
            <div className={css.notesWrapper}>{children}{modal}</div>
        </div>
    )
}