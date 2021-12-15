import SQLite from 'react-native-sqlite-storage';
import {getRandevu} from '../store/randevu/actions';

export class BaseManager {
  constructor() {
    this.sqlite = SQLite;
    this.sqlite.DEBUG(true);
    this.sqlite.enablePromise(true);
  }

  createHastaneTable() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'CREATE TABLE IF NOT EXISTS Hastane (' +
              'hastaneId INTEGER PRIMARY KEY NOT NULL ,' +
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

  createRandevuTable() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'CREATE TABLE IF NOT EXISTS Randevu (' +
              'id INTEGER PRIMARY KEY NOT NULL ,' +
              'title TEXT , date TEXT, rezDate TEXT,doctor TEXT, hastaneId INTEGER);',
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

  createIlacTable() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'CREATE TABLE IF NOT EXISTS Ilac (' +
              'id INTEGER PRIMARY KEY NOT NULL ,' +
              'title TEXT, date TEXT, endDate TEXT, frequency TEXT, hastaneID INTEGER);',
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

  createGorevTable() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'CREATE TABLE IF NOT EXISTS Gorev (' +
              'id INTEGER PRIMARY KEY NOT NULL ,' +
              'title TEXT, date TEXT,endDate TEXT, desc TEXT, hastaneId INTEGER, complete TEXT);',
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

  addHastane(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'INSERT INTO Hastane (title,date)' +
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

  addRandevu(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'INSERT INTO Randevu (title,date,rezDate,doctor,hastaneId)' +
              `VALUES('${model.title}','${new Date()}','${model.rezDate}','${
                model.doctor
              }','${model.hastaneId}')`,
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

  addIlac(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'INSERT INTO Ilac (title,date,endDate,frequency,hastaneId)' +
              `VALUES('${model.title}','${new Date()}','${model.endDate}','${
                model.frequency
              }','${model.hastaneId}')`,
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

  addGorev(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'INSERT INTO Gorev (title,date,endDate,desc,complete,hastaneId)' +
              `VALUES('${model.title}','${new Date()}','${model.endDate}','${
                model.desc
              }','${model.complete}','${model.hastaneId}')`,
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

  updateHastane(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Hastane SET ' +
              `title = '${model.title}'
               where hastaneId = ${model.id};`,
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

  updateRandevu(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Randevu SET ' +
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

  updateIlac(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Ilac SET ' +
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

  updateGorev(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Gorev SET ' +
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

  updateGorevComplete(model) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'UPDATE Gorev SET ' +
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

  getHastane() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Hastane')
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

  getAllRandevus() {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql(
            'SELECT * FROM Hastane INNER JOIN Randevu ON Hastane.hastaneId = Randevu.hastaneId',
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

  getRandevu(hastaneId) {
    return new Promise((resolve, reject) => {
      if (!hastaneId) {
        reject(false);
        return;
      }
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Randevu where hastaneId=' + hastaneId)
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

  getIlac(hastaneId) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Ilac where hastaneId=' + hastaneId)
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

  getGorev(hastaneId) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Gorev where hastaneId=' + hastaneId)
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

  getHastaneById(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Hastane where hastaneId=' + id)
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

  getRandevuById(id) {
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
          db.executeSql('SELECT * FROM Randevu where id=' + id)
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

  getIlacById(id) {
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
          db.executeSql('SELECT * FROM Ilac where id=' + id)
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

  getGorevById(id) {
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
          db.executeSql('SELECT * FROM Gorev where id=' + id)
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

  deleteHastane(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Hastane where hastaneId=' + id)
            .then(val => {
              this.deleteRandevuByHastaneId(id);
              this.deleteIlacByHastaneId(id);
              this.deleteGorevByHastaneId(id);
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteRandevu(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Randevu where id=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteIlac(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Ilac where id=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteGorev(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Gorev where id=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteRandevuByHastaneId(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Randevu where hastaneId=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteIlacByHastaneId(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Ilac where hastaneId=' + id)
            .then(val => {
              resolve(true);
            })
            .catch(err => {
              reject(false);
            });
        });
    });
  }

  deleteGorevByHastaneId(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('DELETE FROM Gorev where hastaneId=' + id)
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
