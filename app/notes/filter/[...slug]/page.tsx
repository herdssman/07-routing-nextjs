import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { Tag, tags} from '@/types/tag';

interface SlugProps {
    params: { slug?: string[] };
}

export default async function NotesPage({ params }: SlugProps) {
    const { slug } = params;
    const search = '';
    const page = 1;
    const perPage = 15;
    const sortBy = 'created';
      const rawTag = slug?.[0];
  const tag = rawTag === 'all' || !tags.includes(rawTag as Tag)
    ? undefined
    : (rawTag as Tag);

    const { notes, totalPages } = await fetchNotes({
        search,
        page, 
        perPage,
        sortBy,
    }, tag)

    return (
        <NotesClient notes={notes} totalPages={totalPages} tag={tag} />
    );
}







