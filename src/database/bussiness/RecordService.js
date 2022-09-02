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

  update(model) {
    return this.recordDal.update(model);
  }

  delete(id) {
    this.recordDal.delete(id);
  }
}
