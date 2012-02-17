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
MesanOfflineBruker.db = window.openDatabase("mobile-web", "", "mobile-web offline bruker", 1000);

//MesanOfflineBruker.localStorage = window.localStorage();

MesanOfflineBruker.reportError = function(source, message) {
  alert('Skjærpings!');
}

MesanOfflineBruker.hentBruker = function(hentBrukerFerdig) {
  console.log('HENT');
  var bruker = "";
  MesanOfflineBruker.db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS bruker(navn TEXT)', []);
    tx.executeSql('SELECT * FROM bruker', [], function(tx, rs) {
      console.log('før forløkke: ');
      for(var i = 0; i < rs.rows.length; i++) {
        console.log('Hentet navn: ' + rs.rows[i].navn);
        hentBrukerFerdig(rs.rows[i]);
      }
    });
 });

//  var brukernavn = localStorage.getItem('brukernavn');
//  return brukernavn;
}

MesanOfflineBruker.lagreBruker = function(brukernavn, lagreBrukerFerdig) {
  console.log('LAGRE');
  MesanOfflineBruker.nullstillBrukere();
  MesanOfflineBruker.db.transaction(function(tx) {
    tx.executeSql('INSERT INTO bruker VALUES(?)', [ brukernavn ],
        function(tx, rs) {
          lagreBrukerFerdig();
        },
        function(tx, error) {
          MesanOfflineBruker.reportError('sql', error.message);
        });
    console.log("Lagret bruker: " + brukernavn);

  });
//  MesanOfflineBruker.localStorage.setItem('brukernavn', brukernavn);
}

MesanOfflineBruker.nullstillBrukere = function() {
  MesanOfflineBruker.db.transaction(function(tx) {
    tx.executeSql('DELETE FROM bruker', [ ],
        function(tx, rs) {
          // …
        },
        function(tx, error) {
          MesanOfflineBruker.reportError('sql', error.message);
        });
  });
}





