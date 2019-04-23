NOTE_BASENAMES_SHARP = ["C","C","D","D",
                    "E","F","F","G",
                    "G","A","A","B"]
NOTE_BASENAMES_FLAT  = ["C","D","D","Eb",
                    "E","F","G","G",
                    "A","A","B","B"]

NOTE_BASEMOD_SHARP = ["","#","","#",
                    "","","#","",
                    "#","","#",""]
NOTE_BASEMOD_FLAT  = ["","b","","b",
                    "","","b","",
                    "b","","b",""]

NOTE_NUMS = {
    "C":0,
    "D":1,
    "E":2,
    "F":3,
    "G":4,
    "A":5,
    "B":6
}


function getNoteInfo(ixx){
  var octave = Math.floor(iix / 12);
  var noteBaseName = NOTE_BASENAMES_SHARP[iix % 12];
  var noteBaseMod  = NOTE_BASEMOD_SHARP[iix % 12];
  if(CURRENT_SCALE_SHARPTYPE != "sharp"){
    noteBaseName = NOTE_BASENAMES_FLAT[iix % 12];
    noteBaseMod  = NOTE_BASEMOD_FLAT[iix % 12];
  }
  var noteNum = NOTE_NUMS[noteBaseName] + (octave * 7)
  return {baseName: noteBaseName,baseMod: noteBaseMod,octave:octave, noteNum : noteNum};
}

function addNote(iix){
    //STAFFLINES;
    var noteInfo = getNoteInfo(iix);
    //create note
    //create modSign?
    //add note
    //add modSign
}




