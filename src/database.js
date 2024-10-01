const mysql = require('mysql2');

// Cria um objeto de conexão
const Database = {
  connection: null,

  // Função para inicializar a conexão
  connect: function () {
    if (!this.connection) {
      this.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Adimim!1234!',
        database: 'medcontrol'
      });

      this.connection.connect((err) => {
        if (err) {
          console.error('Erro ao conectar ao banco: ' + err.stack);
          return;
        }
        console.log('Conectado ao banco de dados como id ' + this.connection.threadId);
      });
    }
  },

  // Função para realizar queries
  query: function (sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.execute(sql, params, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  // Função para fechar a conexão
  close: function () {
    if (this.connection) {
      this.connection.end((err) => {
        if (err) {
          console.error('Erro ao fechar a conexão: ' + err.stack);
        } else {
          console.log('Conexão com o banco de dados fechada.');
        }
        this.connection = null;
      });
    }
  }
};

module.exports = Database;
