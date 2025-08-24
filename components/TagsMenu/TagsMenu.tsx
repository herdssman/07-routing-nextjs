'use client'

import css from './TagsMenu.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { tags } from '@/app/notes/filter/@sidebar/default';


const TagsMenu = () => {

    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={css.menuContainer}>
          <button className={css.menuButton} onClick={handleClick}>
            Notes ▾
          </button>
            <ul className={`${css.menuList} ${isActive ? css.active : css.inactive}`}>
                    <li className={css.menuItem}>
                        <Link href={`/notes/filter/all`} className={css.menuLink}>All Notes</Link> 
                    </li> 
                {tags.map((tag)=>(
                    <li key={tag} className={css.menuItem}>
                        <Link href={`/notes/filter/${tag}`} className={css.menuLink}>{tag}</Link> 
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default TagsMenu;