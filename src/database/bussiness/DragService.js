import {DragDal} from '../data-access';
import {DragType} from '../types';

export class DragService {
  constructor() {
    this.dragDal = new DragDal(DragType);
  }

  create() {
    this.dragDal.create();
  }

  get() {
    return this.dragDal.get();
  }

  getById(id) {
    return this.dragDal.get({
      where: {keyword: 'WHERE', value: 'id= ' + id},
    });
  }

  getByRecordId(recordId) {
    return this.dragDal.get({
      where: {keyword: 'WHERE', value: 'recordId= ' + recordId},
    });
  }

  add(model) {
    return this.dragDal.add(model);
  }

  update(model) {
    return this.dragDal.update(model);
  }

  delete(id) {
    return this.dragDal.delete(id);
  }
}
