import {RecordDal} from '../data-access';
import {RecordType} from '../types';

export class RecordService {
  constructor() {
    this.recordDal = new RecordDal(RecordType);
  }

  create() {
    this.recordDal.create();
  }

  get() {
    return this.recordDal.get();
  }

  getById(id) {
    return this.recordDal.get({
      where: {keyword: 'WHERE', value: 'id= ' + id},
    });
  }

  add(model) {
    return this.recordDal.add(model);
  }

  update(model) {
    return this.recordDal.update(model);
  }

  delete(id) {
    return this.recordDal.delete(id);
  }
}
