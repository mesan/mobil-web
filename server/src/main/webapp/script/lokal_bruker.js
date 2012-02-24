/**
 * Created by IntelliJ IDEA.
 * User: olavh
 * Date: 2/17/12
 * Time: 12:46
 * To change this template use File | Settings | File Templates.
 */


LokalBruker = {};

LokalBruker.localStorage = window.localStorage;

LokalBruker.hentBruker = function() {
  var brukernavn = LokalBruker.localStorage.getItem('brukernavn');
  return brukernavn;
}

LokalBruker.lagreBruker = function(brukernavn) {
  LokalBruker.localStorage.setItem('brukernavn', brukernavn);
}

LokalBruker.nullstillBruker = function() {
  LokalBruker.localStorage.clear();
}





