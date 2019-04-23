NOTE_BASENAMES_SHARP = ["C","C","D","D",
                    "E","F","F","G",
                    "G","A","A","B"]
NOTE_BASENAMES_FLAT  = ["C","D","D","E",
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

var CHORD_PANELSET_EXPAND_BUTTON = document.createElement("button");
CHORD_PANELSET_EXPAND_BUTTON.textContent = "++";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

var CHORD_PANELSET_REDUCE_BUTTON = document.createElement("button");
CHORD_PANELSET_REDUCE_BUTTON.textContent = "--";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

var CHORD_PANELSET_UP_BUTTON = document.createElement("button");
CHORD_PANELSET_UP_BUTTON.textContent = "^";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

var CHORD_PANELSET_DN_BUTTON = document.createElement("button");
CHORD_PANELSET_DN_BUTTON.textContent = "v";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

var CHORD_PANELSET_CURRVIS_CT  = 4;
var CHORD_PANELSET_CURRVIS_IDX = 0;
var CHORD_PANELSET_PANELS = document.getElementById("CHORD_PANELSET").children

function chordPanelSet_setVisiblePanels(){
  for(var i=0; i < CHORD_PANELSET_PANELS.length; i++){
    console.log("panel: "+CHORD_PANELSET_PANELS[i]);
    if(i < CHORD_PANELSET_CURRVIS_IDX || i >= CHORD_PANELSET_CURRVIS_IDX + CHORD_PANELSET_CURRVIS_CT){
        CHORD_PANELSET_PANELS[i].style.display = "none";
    } else {
        CHORD_PANELSET_PANELS[i].style.display = "grid";
    }
  }
}
chordPanelSet_setVisiblePanels();

CHORD_PANELSET_EXPAND_BUTTON.onclick = function(){
    CHORD_PANELSET_CURRVIS_CT = CHORD_PANELSET_CURRVIS_CT + 1;
    if(CHORD_PANELSET_CURRVIS_IDX + CHORD_PANELSET_CURRVIS_CT >= CHORD_PANELSET_PANELS.length){
        this.disabled =true;
    }
    CHORD_PANELSET_REDUCE_BUTTON.disabled = false;
    chordPanelSet_setVisiblePanels();
}
CHORD_PANELSET_REDUCE_BUTTON.onclick = function(){
    CHORD_PANELSET_CURRVIS_CT = CHORD_PANELSET_CURRVIS_CT -1;
    if(CHORD_PANELSET_CURRVIS_CT == 0){
        this.disabled = true;
    }
    CHORD_PANELSET_EXPAND_BUTTON.disabled = false;   
    chordPanelSet_setVisiblePanels();
}
CHORD_PANELSET_UP_BUTTON.onclick = function(){
    CHORD_PANELSET_CURRVIS_IDX = CHORD_PANELSET_CURRVIS_IDX - 1;
    if(CHORD_PANELSET_CURRVIS_IDX == 0){
        this.disabled =true;
    }
    CHORD_PANELSET_DN_BUTTON.disabled = false;
    chordPanelSet_setVisiblePanels();
}
CHORD_PANELSET_DN_BUTTON.onclick = function(){
    CHORD_PANELSET_CURRVIS_IDX = CHORD_PANELSET_CURRVIS_IDX + 1;
    if(CHORD_PANELSET_CURRVIS_IDX + CHORD_PANELSET_CURRVIS_CT >= CHORD_PANELSET_PANELS.length){
        this.disabled =true;
    }
    CHORD_PANELSET_UP_BUTTON.disabled = false;
    chordPanelSet_setVisiblePanels();
}

document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_EXPAND_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_REDUCE_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_UP_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_DN_BUTTON)

