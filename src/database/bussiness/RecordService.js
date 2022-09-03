import {RecordDal} from '../data-access';
import {RecordType} from '../types';
import {AppointmentService} from './AppointmentService';
import {DragService} from './DragService';
import {TaskService} from './TaskService';

export class RecordService {
  constructor() {
    this.recordDal = new RecordDal(RecordType);
  }

  create() {
    this.recordDal.create();
  }

  get() {
    return this.recordDal.get({
      orderBy: {keyword: 'ORDER BY', value: 'date DESC'},
    });
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
    new DragService().deleteByRecordId(id);
    new TaskService().deleteByRecordId(id);
    new AppointmentService().deleteByRecordId(id);
    return this.recordDal.delete(id);
  }
}
