import NoteForm from '@/components/(notes)/noteForm'
import { Button } from '@/components/ui/button'
import { deleteNote, getNotes } from '@/lib/noteActions'

export default async function Notes() {
  const notes = await getNotes()

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='py-3 text-center'>Notes</h1>

      <NoteForm mode='create' id='' title='' />

      {notes?.map((note) => (
        <div
          className='flex items-center gap-4 py-2 px-4 md:px-0'
          key={note.id}
        >
          <div className='basis-1/16 nid'>{note.id}</div>
          <div className='basis-9/16'>{note.title}</div>
          <div className='basis-2/16'>{note.email}</div>
          <div className='ml-auto basis-2/16'>
            {Intl.DateTimeFormat('ko-KR', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit'
            }).format(note.create_at)}
          </div>
          <div className='text-right flex items-center gap-4 basis-2/16'>
            <NoteForm mode='edit' id={note.id} title={note.title} />

            <form action={deleteNote}>
              <input type='hidden' name='id' value={note.id} />
              <Button variant='outline' type='submit'>
                Delete
              </Button>
            </form>
          </div>
        </div>
      ))}
    </div>
  )
}
