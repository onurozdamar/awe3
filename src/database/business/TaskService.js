import {TaskDal} from '../data-access';
import {TaskType} from '../types';

export class TaskService {
  constructor() {
    this.taskDal = new TaskDal(TaskType);
  }

  create() {
    this.taskDal.create();
  }

  get() {
    return this.taskDal.get();
  }

  getById(id) {
    return this.taskDal.get({
      where: {keyword: 'WHERE', value: 'id= ' + id},
    });
  }

  getByRecordId(recordId) {
    return this.taskDal.get({
      where: {keyword: 'WHERE', value: 'recordId= ' + recordId},
      orderBy: {keyword: 'ORDER BY', value: 'date DESC'},
    });
  }

  add(model) {
    return this.taskDal.add(model);
  }

  update(model) {
    return this.taskDal.update(model);
  }

  updateComplete(model) {
    return this.taskDal.update(model);
  }

  delete(id) {
    return this.taskDal.delete(id);
  }

  deleteByRecordId(id) {
    return this.taskDal.delete(id, 'recordId');
  }
}
