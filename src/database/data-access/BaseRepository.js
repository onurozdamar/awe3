import SQLite from 'react-native-sqlite-storage';
import {AppointmentType, DragType, RecordType, TaskType} from '../types';

class BaseRepository {
  constructor(entityType) {
    this.sqlite = SQLite;
    this.sqlite.DEBUG(true);
    this.sqlite.enablePromise(true);
    this.databaseName = 'awe3';
    this.openDatabase = () => {
      return new Promise((resolve, reject) => {
        this.sqlite
          .openDatabase({
            name: this.databaseName,
            location: 'default',
          })
          .then(db => {
            resolve(db);
          })
          .catch(err => {
            reject(err);
          });
      });
    };
    this.entityType = entityType;
  }

  create() {
    return new Promise((resolve, reject) => {
      this.openDatabase()
        .then(db => {
          const query = `CREATE TABLE IF NOT EXISTS ${
            this.entityType.className
          } (${Object.keys(this.entityType.columns)
            .map(column => column + ' ' + this.entityType.columns[column])
            .join(', ')});`;

          db.executeSql(query)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        })
        .catch(err => {
          reject(false);
        });
    });
  }

  get(options = {}) {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const query = `SELECT ${options.get || '*'} FROM ${
          this.entityType.className
        } ${Object.keys(options)
          .map(key => options[key].keyword + ' ' + options[key].value)
          .join(' ')}`;

        db.executeSql(query)
          .then(([values]) => {
            var array = [];

            for (let index = 0; index < values.rows.length; index++) {
              const element = values.rows.item(index);
              array.push(element);
            }

            resolve(array);
          })
          .catch(err => {
            reject(false);
          });
      });
    });
  }

  add(model) {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const filteredModel = Object.keys(model)
          .map(key => (this.entityType.columns[key] ? key : null))
          .filter(k => k);

        const query = `INSERT INTO ${this.entityType.className} (${filteredModel
          .map(key => key)
          .join(', ')}) VALUES (${filteredModel
          .map(key => "'" + model[key] + "'")
          .join(', ')})`;

        db.executeSql(query)
          .then(val => {
            resolve(true);
          })
          .catch(err => {
            reject(false);
          });
      });
    });
  }

  update(model) {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const query = `UPDATE ${this.entityType.className} SET ${Object.keys(
          model,
        )
          .map(key => (this.entityType.columns[key] ? key : null))
          .filter(k => k)
          .map(key => key + " = '" + model[key] + "'")
          .join(', ')} WHERE id = ${model.id}`;

        db.executeSql(query)
          .then(val => {
            resolve(true);
          })
          .catch(err => {
            reject(false);
          });
      });
    });
  }

  delete(id, option = 'id') {
    return new Promise((resolve, reject) => {
      this.openDatabase().then(db => {
        const query = `DELETE FROM ${this.entityType.className} WHERE ${option} = ${id}`;

        db.executeSql(query)
          .then(val => {
            resolve(true);
          })
          .catch(err => {
            reject(false);
          });
      });
    });
  }
}

export class RecordDal extends BaseRepository {
  constructor() {
    super(RecordType);
  }
}

export class AppointmentDal extends BaseRepository {
  constructor() {
    super(AppointmentType);
  }
}

export class TaskDal extends BaseRepository {
  constructor() {
    super(TaskType);
  }
}

export class DragDal extends BaseRepository {
  constructor() {
    super(DragType);
  }
}
