import {QuickAddDal} from '../data-access';
import {QuickAddType} from '../types';

export class QuickAddService {
  constructor() {
    this.quickAddDal = new QuickAddDal(QuickAddType);
  }

  create() {
    this.quickAddDal.create();
  }

  get() {
    return this.quickAddDal.get();
  }

  getById(id) {
    return this.quickAddDal.get({
      where: {keyword: 'WHERE', value: 'id= ' + id},
    });
  }

  add(model) {
    return this.quickAddDal.add(model);
  }

  update(model) {
    return this.quickAddDal.update(model);
  }

  delete(id) {
    return this.quickAddDal.delete(id);
  }
}
