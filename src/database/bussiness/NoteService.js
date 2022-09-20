import {NoteDal} from '../data-access';
import {NoteType} from '../types';

export class NoteService {
  constructor() {
    this.noteDal = new NoteDal(NoteType);
  }

  create() {
    this.noteDal.create();
  }

  get() {
    return this.noteDal.get();
  }

  getById(id) {
    return this.noteDal.get({
      where: {keyword: 'WHERE', value: 'id= ' + id},
    });
  }

  getByRecordId(recordId) {
    return this.noteDal.get({
      where: {keyword: 'WHERE', value: 'recordId= ' + recordId},
      orderBy: {keyword: 'ORDER BY', value: 'date DESC'},
    });
  }

  add(model) {
    return this.noteDal.add(model);
  }

  update(model) {
    return this.noteDal.update(model);
  }

  delete(id) {
    return this.noteDal.delete(id);
  }

  deleteByRecordId(id) {
    return this.taskDal.delete(id, 'recordId');
  }
}
