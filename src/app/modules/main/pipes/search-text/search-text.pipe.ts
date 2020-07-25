import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../../components/notes/models/note';

@Pipe({
  name: 'noteTextFilter'
})
export class NoteTextFilterPipe implements PipeTransform {

  transform(notes: Note[], text: string): Note[] {
    return !text ? notes : notes.filter((note: Note) => note.title.toLowerCase().includes(text) || note.text.toLowerCase().includes(text));
  }

}
