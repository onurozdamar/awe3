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

  update(model) {
    return this.taskDal.update(model);
  }

  delete(id) {
    this.taskDal.delete(id);
  }
}
