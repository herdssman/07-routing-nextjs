import css from './TagsMenu.module.css'
import { getTags } from '@/lib/api';
import Link from 'next/link';


const TagsMenu = async () => {

    const tags = await getTags();

    return (
        <div className={css.menuContainer}>
          <button className={css.menuButton}>
            Notes ▾
          </button>
            <ul className={css.menuList}>
                    <li className={css.menuItem}>
                        <Link href={`/notes/filter`}>All Notes</Link> 
                    </li> 
                {tags.map((tag)=>(
                    <li key={tag} className={css.menuItem}>
                        <Link href={`/notes/filter/${tag}`}>{tag}</Link> 
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default TagsMenu;