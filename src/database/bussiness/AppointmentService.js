import {AppointmentDal} from '../data-access';
import {AppointmentType} from '../types';

export class AppointmentService {
  constructor() {
    this.appointmentDal = new AppointmentDal(AppointmentType);
  }

  create() {
    this.appointmentDal.create();
  }

  get() {
    return this.appointmentDal.get();
  }

  getById(id) {
    return this.appointmentDal.get({
      where: {keyword: 'WHERE', value: 'id= ' + id},
    });
  }

  getByRecordId(recordId) {
    return this.appointmentDal.get({
      where: {keyword: 'WHERE', value: 'recordId= ' + recordId},
    });
  }

  add(model) {
    return this.appointmentDal.add(model);
  }

  update(model) {
    return this.appointmentDal.update(model);
  }

  delete(id) {
    return this.appointmentDal.delete(id);
  }
}
