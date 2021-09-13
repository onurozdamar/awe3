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
              'id INTEGER PRIMARY KEY NOT NULL ,' +
              'title TEXT, date TEXT);',
          )
            .then(val => {
              console.log(
                '%c table created ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                "%c table didn't created " + err,
                'background: #222; color: #b22a55',
              );

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
              'title TEXT , date TEXT, rezDate TEXT,active INTEGER, hastaneId INTEGER);',
          )
            .then(val => {
              console.log(
                '%c table created ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                "%c table didn't created " + err,
                'background: #222; color: #b22a55',
              );

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
              console.log(
                '%c table created ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                "%c table didn't created " + err,
                'background: #222; color: #b22a55',
              );

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
              console.log(
                '%c table created ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                "%c table didn't created " + err,
                'background: #222; color: #b22a55',
              );

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
              console.log('%c val added ', 'background: #222; color: #bada55');
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not added' + err,
                'background: #222; color: #b22a55',
              );
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
          let active = new Date(model.rezDate) < new Date();

          db.executeSql(
            'INSERT INTO Randevu (title,date,rezDate,active,hastaneId)' +
              `VALUES('${model.title}','${new Date()}','${
                model.rezDate
              }','${active}','${model.hastaneId}')`,
          )
            .then(val => {
              console.log('%c val added ', 'background: #222; color: #bada55');
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not added' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log('%c val added ', 'background: #222; color: #bada55');
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not added' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log('%c val added ', 'background: #222; color: #bada55');
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not added' + err,
                'background: #222; color: #b22a55',
              );
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
               where id = ${model.id};`,
          )
            .then(val => {
              console.log(
                '%c val updated ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not updated' + err,
                'background: #222; color: #b22a55',
              );
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
          let active = new Date(model.rezDate) < model.date;

          db.executeSql(
            'UPDATE Randevu SET ' +
              `title = '${model.title}',
               rezDate = '${model.rezDate}',
               active = '${active}'
               where id = ${model.id};`,
          )
            .then(val => {
              console.log(
                '%c val updated ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not updated' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(
                '%c val updated ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not updated' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(
                '%c val updated ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not updated' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(
                '%c val updated ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not updated' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(values);

              for (let index = 0; index < values.rows.length; index++) {
                const element = values.rows.item(index);
                array.push(element);
              }

              console.log(
                '%c get success ',
                'background: #222; color: #bada55',
              );
              resolve(array);
            })
            .catch(err => {
              console.log(
                '%c gett error ' + err,
                'background: #222; color: #b22a55',
              );
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
          db.executeSql('SELECT * FROM Hastane')
            .then(([values]) => {
              var array = [];
              console.log(values);
              if (values.rows.length === 0) {
                resolve(array);
                return;
              }

              for (let index = 0; index < values.rows.length - 1; index++) {
                const element = values.rows.item(index);
                console.log('data==========>', element);
                this.getRandevu(element.id).then(res => {
                  res.map(data => {
                    array.push(data);
                  });
                });
              }
              this.getRandevu(values.rows.item(values.rows.length - 1).id).then(
                res => {
                  res.map(data => {
                    array.push(data);
                  });
                  console.log(
                    '%c get success ',
                    'background: #222; color: #bada55',
                  );
                  resolve(array);
                },
              );
            })
            .catch(err => {
              console.log(
                '%c gett error ' + err,
                'background: #222; color: #b22a55',
              );
              reject(false);
            });
        });
    });
  }

  getRandevu(hastaneId) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Randevu where hastaneId=' + hastaneId)
            .then(([values]) => {
              var array = [];
              console.log(values);

              for (let index = 0; index < values.rows.length; index++) {
                const element = values.rows.item(index);
                array.push(element);
              }

              console.log(
                '%c get success ',
                'background: #222; color: #bada55',
              );
              resolve(array);
            })
            .catch(err => {
              console.log(
                '%c gett error ' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(values);

              for (let index = 0; index < values.rows.length; index++) {
                const element = values.rows.item(index);
                array.push(element);
              }

              console.log(
                '%c get success ',
                'background: #222; color: #bada55',
              );
              resolve(array);
            })
            .catch(err => {
              console.log(
                '%c gett error ' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log('görev value => ', values);

              for (let index = 0; index < values.rows.length; index++) {
                const element = values.rows.item(index);
                array.push(element);
              }

              console.log(
                '%c get success ',
                'background: #222; color: #bada55',
              );
              resolve(array);
            })
            .catch(err => {
              console.log(
                '%c gett error ' + err,
                'background: #222; color: #b22a55',
              );
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
          db.executeSql('SELECT * FROM Hastane where id=' + id)
            .then(([values]) => {
              var array = [];
              console.log(values);

              for (let index = 0; index < values.rows.length; index++) {
                const element = values.rows.item(index);
                array.push(element);
              }

              console.log(
                '%c get success ',
                'background: #222; color: #bada55',
              );
              resolve(array);
            })
            .catch(err => {
              console.log(
                '%c gett error ',
                err,
                'background: #222; color: #b22a55',
              );
              reject(false);
            });
        });
    });
  }

  getRandevuById(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Randevu where id=' + id)
            .then(([values]) => {
              var array = [];
              console.log(values);

              for (let index = 0; index < values.rows.length; index++) {
                const element = values.rows.item(index);
                array.push(element);
              }

              console.log(
                '%c get success ',
                'background: #222; color: #bada55',
              );
              resolve(array);
            })
            .catch(err => {
              console.log(
                '%c gett error ',
                err,
                'background: #222; color: #b22a55',
              );
              reject(false);
            });
        });
    });
  }

  getIlacById(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Ilac where id=' + id)
            .then(([values]) => {
              var array = [];
              console.log(values);

              for (let index = 0; index < values.rows.length; index++) {
                const element = values.rows.item(index);
                array.push(element);
              }

              console.log(
                '%c get success ',
                'background: #222; color: #bada55',
              );
              resolve(array);
            })
            .catch(err => {
              console.log(
                '%c gett error ',
                err,
                'background: #222; color: #b22a55',
              );
              reject(false);
            });
        });
    });
  }

  getGorevById(id) {
    return new Promise((resolve, reject) => {
      this.sqlite
        .openDatabase({
          name: 'awe3',
          location: 'default',
        })
        .then(db => {
          db.executeSql('SELECT * FROM Gorev where id=' + id)
            .then(([values]) => {
              var array = [];
              console.log(values);

              for (let index = 0; index < values.rows.length; index++) {
                const element = values.rows.item(index);
                array.push(element);
              }

              console.log(
                '%c get success ',
                'background: #222; color: #bada55',
              );
              resolve(array);
            })
            .catch(err => {
              console.log(
                '%c gett error ',
                err,
                'background: #222; color: #b22a55',
              );
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
          db.executeSql('DELETE FROM Hastane where id=' + id)
            .then(val => {
              console.log(
                '%c val deleted ',
                'background: #222; color: #bada55',
              );
              this.deleteRandevuByHastaneId(id);
              this.deleteIlacByHastaneId(id);
              this.deleteGorevByHastaneId(id);
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not deleted' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(
                '%c val deleted ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not deleted' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(
                '%c val deleted ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not deleted' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(
                '%c val deleted ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not deleted' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(
                '%c val deleted ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not deleted' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(
                '%c val deleted ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not deleted' + err,
                'background: #222; color: #b22a55',
              );
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
              console.log(
                '%c val deleted ',
                'background: #222; color: #bada55',
              );
              resolve(true);
            })
            .catch(err => {
              console.log(
                '%c val did not deleted' + err,
                'background: #222; color: #b22a55',
              );
              reject(false);
            });
        });
    });
  }
}
