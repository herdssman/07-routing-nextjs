import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { Tag } from '@/types/tag';
import { tags } from '../@sidebar/default';

interface SlugProps {
    params: { slug?: string[] };
}

export default async function NotesPage({ params }: SlugProps) {
    const { slug } = await params;
    const search = '';
    const page = 1;
    const perPage = 15;
    const sortBy = 'created';
    const rawTag = slug?.[0];
    const tag = rawTag === 'all' || !tags.includes(rawTag as Tag) ? undefined: (rawTag as Tag);

    const { notes, totalPages } = await fetchNotes({
        search,
        page, 
        perPage,
        sortBy,
    }, tag)

    return (
        <div>
            <NotesClient notes={notes} totalPages={totalPages} tag={tag} />
        </div>
    );
}







