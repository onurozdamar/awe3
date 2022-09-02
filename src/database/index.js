import SQLite from 'react-native-sqlite-storage';

export class BaseManager {
  constructor() {
    this.sqlite = SQLite;
    this.sqlite.DEBUG(true);
    this.sqlite.enablePromise(true);
  }

  createRecordTable() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'CREATE TABLE IF NOT EXISTS Record (' +
              'recordId INTEGER PRIMARY KEY NOT NULL ,' +
              'title TEXT, date TEXT);',
          )
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

  createAppointmentTable() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'CREATE TABLE IF NOT EXISTS Appointment (' +
              'id INTEGER PRIMARY KEY NOT NULL ,' +
              'title TEXT , date TEXT, rezDate TEXT,doctor TEXT, recordId INTEGER);',
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  createDragTable() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'CREATE TABLE IF NOT EXISTS Drag (' +
              'id INTEGER PRIMARY KEY NOT NULL ,' +
              'title TEXT, date TEXT, endDate TEXT, frequency TEXT, recordID INTEGER);',
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  createTaskTable() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'CREATE TABLE IF NOT EXISTS Task (' +
              'id INTEGER PRIMARY KEY NOT NULL ,' +
              'title TEXT, date TEXT,endDate TEXT, desc TEXT, recordId INTEGER, complete TEXT);',
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  addRecord(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'INSERT INTO Record (title,date)' +
              `VALUES('${model.title}','${new Date()}')`,
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  addAppointment(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'INSERT INTO Appointment (title,date,rezDate,doctor,recordId)' +
              `VALUES('${model.title}','${new Date()}','${model.rezDate}','${
                model.doctor
              }','${model.recordId}')`,
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  addDrag(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'INSERT INTO Drag (title,date,endDate,frequency,recordId)' +
              `VALUES('${model.title}','${new Date()}','${model.endDate}','${
                model.frequency
              }','${model.recordId}')`,
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  addTask(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'INSERT INTO Task (title,date,endDate,desc,complete,recordId)' +
              `VALUES('${model.title}','${new Date()}','${model.endDate}','${
                model.desc
              }','${model.complete}','${model.recordId}')`,
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  updateRecord(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Record SET ' +
              `title = '${model.title}'
               where recordId = ${model.id};`,
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  updateAppointment(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Appointment SET ' +
              `title = '${model.title}',
               rezDate = '${model.rezDate}',
               doctor = '${model.doctor}'
               where id = ${model.id};`,
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  updateDrag(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Drag SET ' +
              `title = '${model.title}',
               endDate = '${model.endDate}',
               frequency = '${model.frequency}'
               where id = ${model.id};`,
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  updateTask(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Task SET ' +
              `title = '${model.title}',
             endDate = '${model.endDate}',
             desc = '${model.desc}',
             complete = '${model.complete}'
             where id = ${model.id};`,
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  updateTaskComplete(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Task SET ' +
              `complete = '${model.complete}'
             where id = ${model.id};`,
          )
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  getRecord() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Record ORDER BY date')
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

  getAllAppointments() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'SELECT * FROM Record INNER JOIN Appointment ON Record.recordId = Appointment.recordId',
          )
            .then(([values]) => {
              var array = [];

              for (let index = 0; index < values.rows.length; index++) {
                const element = values.rows.item(index);
                array.push(element);
              }

              resolve(
                array.sort((a, b) => new Date(b.rezDate) - new Date(a.rezDate)),
              );
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  getAppointment(recordId) {
    return new Promise((resolve, reject) => {
      if (!recordId) {
        reject(false);
        return;
      }
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Appointment where recordId=' + recordId)
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

  getDrag(recordId) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Drag where recordId=' + recordId)
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

  getTask(recordId) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Task where recordId=' + recordId)
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

  getRecordById(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Record where recordId=' + id)
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

  getAppointmentById(id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        reject(false);
        return;
      }
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Appointment where id=' + id)
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

  getDragById(id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        reject(false);
        return;
      }
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Drag where id=' + id)
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

  getTaskById(id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        reject(false);
        return;
      }
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Task where id=' + id)
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

  deleteRecord(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Record where recordId=' + id)
            .then(val => {
              this.deleteAppointmentByRecordId(id);
              this.deleteDragByRecordId(id);
              this.deleteTaskByRecordId(id);
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteAppointment(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Appointment where id=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteDrag(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Drag where id=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteTask(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Task where id=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteAppointmentByRecordId(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Appointment where recordId=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteDragByRecordId(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Drag where recordId=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteTaskByRecordId(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Task where recordId=' + id)
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
