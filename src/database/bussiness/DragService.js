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

  update(model) {
    return this.dragDal.update(model);
  }

  delete(id) {
    this.dragDal.delete(id);
  }
}
