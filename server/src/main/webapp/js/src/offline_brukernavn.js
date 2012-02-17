/**
 * Created by IntelliJ IDEA.
 * User: olavh
 * Date: 2/17/12
 * Time: 12:46
 * To change this template use File | Settings | File Templates.
 */


MesanOfflineBruker = {};

/* Opprett databasekobline
 * navn på database: mobile-web
 * databaseversjon: <ingen verdi>
 * visningsnavn: mobile-web offline bruker
 * størrelse på databasen: 100 bytes
 */
var db = window.openDatabase("mobile-web", "", "mobile-web offline bruker", 100);

MesanOfflineBruker.reportError(source, message) = function {
  // report error
}

MesanOfflineBruker.hentBrukernavn() = function() {
  var brukernavn = "";

  db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS bruker(navn TEXT)', []);
    tx.executeSql('SELECT * FROM bruker', [], function(tx, rs) {
      for(var i = 0; i < rs.rows.length; i++) {
        brukernavn += rs.rows[i];
      }
    });
  });
  return brukernavn;
}

MesanOfflineBruker.lagreBruker = function(brukernavn) {
  db.transaction(function(tx) {
    tx.executeSql('INSERT INTO bruker VALUES(?)', [ brukernavn ],
        function(tx, rs) {
          // …
        },
        function(tx, error) {
          reportError('sql', error.message);
        });
  });
}

MesanOfflineBruker.nullstillBrukere = function() {
  db.transaction(function(tx) {
    tx.executeSql('DELETE FROM bruker', [ ],
        function(tx, rs) {
          // …
        },
        function(tx, error) {
          reportError('sql', error.message);
        });
  });
}
