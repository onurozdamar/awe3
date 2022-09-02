import SQLite from 'react-native-sqlite-storage';

export class BaseManager {
  constructor() {
    this.sqlite = SQLite;
    this.sqlite.DEBUG(true);
    this.sqlite.enablePromise(true);
  }

  createHospitalTable() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'CREATE TABLE IF NOT EXISTS Hospital (' +
              'hospitalId INTEGER PRIMARY KEY NOT NULL ,' +
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
              'title TEXT , date TEXT, rezDate TEXT,doctor TEXT, hospitalId INTEGER);',
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
              'title TEXT, date TEXT, endDate TEXT, frequency TEXT, hospitalID INTEGER);',
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
              'title TEXT, date TEXT,endDate TEXT, desc TEXT, hospitalId INTEGER, complete TEXT);',
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

  addHospital(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'INSERT INTO Hospital (title,date)' +
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
            'INSERT INTO Appointment (title,date,rezDate,doctor,hospitalId)' +
              `VALUES('${model.title}','${new Date()}','${model.rezDate}','${
                model.doctor
              }','${model.hospitalId}')`,
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
            'INSERT INTO Drag (title,date,endDate,frequency,hospitalId)' +
              `VALUES('${model.title}','${new Date()}','${model.endDate}','${
                model.frequency
              }','${model.hospitalId}')`,
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
            'INSERT INTO Task (title,date,endDate,desc,complete,hospitalId)' +
              `VALUES('${model.title}','${new Date()}','${model.endDate}','${
                model.desc
              }','${model.complete}','${model.hospitalId}')`,
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

  updateHospital(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Hospital SET ' +
              `title = '${model.title}'
               where hospitalId = ${model.id};`,
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

  getHospital() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Hospital ORDER BY date')
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
            'SELECT * FROM Hospital INNER JOIN Appointment ON Hospital.hospitalId = Appointment.hospitalId',
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

  getAppointment(hospitalId) {
    return new Promise((resolve, reject) => {
      if (!hospitalId) {
        reject(false);
        return;
      }
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'SELECT * FROM Appointment where hospitalId=' + hospitalId,
          )
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

  getDrag(hospitalId) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Drag where hospitalId=' + hospitalId)
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

  getTask(hospitalId) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Task where hospitalId=' + hospitalId)
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

  getHospitalById(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Hospital where hospitalId=' + id)
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

  deleteHospital(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Hospital where hospitalId=' + id)
            .then(val => {
              this.deleteAppointmentByHospitalId(id);
              this.deleteDragByHospitalId(id);
              this.deleteTaskByHospitalId(id);
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

  deleteAppointmentByHospitalId(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Appointment where hospitalId=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteDragByHospitalId(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Drag where hospitalId=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteTaskByHospitalId(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Task where hospitalId=' + id)
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
