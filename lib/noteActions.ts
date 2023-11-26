'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function createNote(formData: FormData) {
  'use server'

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const title = formData.get('title')

  const result = await supabase.from('notes').insert({ title }).single()

  revalidatePath('/notes')

  return JSON.stringify(result)
}

export async function getNotes() {
  'use server'

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: notes } = await supabase.from('notes').select('*')

  return notes
}

export async function getNoteById(id: number) {
  'use server'

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: note } = await supabase.from('notes').select().eq('id', id)

  return note
}

export async function updateNote(formData: FormData) {
  'use server'

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const idStr = formData.get('id')
  const title = formData.get('title')
  const id = Number(idStr)

  await supabase.from('notes').update({ title: title }).eq('id', id)

  revalidatePath('/notes')
}

export async function deleteNote(formData: FormData) {
  'use server'

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const idStr = formData.get('id')
  const id = Number(idStr)

  await supabase.from('notes').delete().eq('id', id)

  revalidatePath('/notes')
}
