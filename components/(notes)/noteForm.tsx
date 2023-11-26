import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createNote, updateNote } from '@/lib/noteActions'

interface NoteEditFormProps {
  mode: string
  id: string
  title: string
}

const NoteForm = ({ mode, id, title }: NoteEditFormProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='capitalize'>
          {mode}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <form action={mode == 'create' ? createNote : updateNote}>
          <DialogHeader>
            <DialogTitle>{mode.toUpperCase()}</DialogTitle>
            <DialogDescription>
              Make changes to your note here. Click{' '}
              {mode == 'create' ? 'Submit' : 'Update'} when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <input type='hidden' name='id' value={id} />
              <Label htmlFor='name' className='text-right'>
                Title
              </Label>
              <Input
                type='text'
                id='title'
                name='title'
                defaultValue={title}
                className='col-span-3'
              />
            </div>
          </div>
          <DialogFooter>
            <DialogTrigger asChild>
              <Button type='submit'>
                {mode == 'create' ? 'Submit' : 'Update'}
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NoteForm
