import { noteTextFilterPipe } from './search-text.pipe';

describe('noteTextFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new noteTextFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
