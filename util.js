
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PROCEDURAL TEXT PARSING
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

NOTE_NAMES_SHARP = ["C","C#","D","D#",
                    "E","F","F#","G",
                    "G#","A","A#","B"]
NOTE_NAMES_FLAT  = ["C","Db","D","Eb",
                    "E","F","Gb","G",
                    "Ab","A","Bb","B"]

CURRENT_SCALE_SHARPTYPE = "sharp";

KEY_TYPE_INTERVALS = {
  "Major":[2,2,1,2,2,2],
  "Minor":[2,1,2,2,1,2]
}

CHORD_TYPE_INTERVALS = {
  "M":[4,3],
  "m":[3,4],
  "7":[4,3,3],
  "maj7":[4,3,4],
  "m7":[3,4,3],
  "dim":[3,3],
  "aug":[4,4],
  "6":[4,3,2],
  "m6":[3,4,2],
  "69":[4,3,2,5],
  "sus2":[2,5],
  "sus4":[5,2],
  "m7b5":[3,3,4],
  "dim7":[3,3,3]
}

function getNoteName(ixx){
  if(CURRENT_SCALE_SHARPTYPE == "sharp"){
    return NOTE_NAMES_SHARP[(ixx % 12)]
  } else {
    return NOTE_NAMES_FLAT[(ixx % 12)]
  }
}

function getNoteIIX(noteName){
  var iix = NOTE_NAMES_SHARP.indexOf( noteName );
  if(iix == -1){
    iix = NOTE_NAMES_FLAT.indexOf( noteName );
  }
  return iix;
}

function getCurrentScale(){
  var currentScale = (document.getElementById("SELECT_SCALEKEY").value);
  console.log("currentScale: "+currentScale);
  var currentScaleType = document.getElementById("SELECT_SCALEKEYTYPE").value;
  var intervals = KEY_TYPE_INTERVALS[ currentScaleType ];
  var rootIIX = parseInt(currentScale)-1;
  return {rootIIX:rootIIX, scaleType:currentScaleType,intervals:intervals}
}

function getScaleIIX(intervals,rootIIX){
  var currIIX = rootIIX;
  var scaleIIX = [rootIIX];
  for(var i=0; i < intervals.length; i++){
    currIIX = currIIX + intervals[i];
    scaleIIX.push( currIIX % 12 );
  }
  console.log("---- scale: "+scaleIIX.join(","));
  return scaleIIX;
}

function calculateChords(){
  var currScale = getCurrentScale()
  var currentScaleType = currScale.scaleType;
  var rootIIX = currScale.rootIIX;
  var intervals = currScale.intervals;
  var currIIX = rootIIX;
  var scaleIIX = [rootIIX];
  for(var i=0; i < intervals.length; i++){
    currIIX = currIIX + intervals[i];
    scaleIIX.push( currIIX % 12 );
  }
  var scaleNotes = [];
  for(var i=0; i < scaleIIX.length; i++){
    scaleNotes.push( getNoteName(scaleIIX[i]) );
  }
  console.log("scale: "+getNoteName(rootIIX)+" "+currentScaleType+":");
  console.log( "    ["+scaleNotes.join(",")+"]" );
  
  //var chordRoot = parseInt(document.getElementById("SELECT_ROOT").value)-1;
  //var chordType = document.getElementById("SELECT_CHORDTYPE").value;
  var chordRoot = CURRENT_CHORDROOT_IIX;
  var chordType = CURRENT_CHORDTYPE;
  
  var chordIntervals = CHORD_TYPE_INTERVALS[chordType];
  var chordIIX = [chordRoot];
  currIIX = chordRoot;
  for(var i=0; i < chordIntervals.length; i++){
    currIIX = currIIX + chordIntervals[i];
    chordIIX.push( currIIX % 12 );
  }
  console.log("chord: "+getNoteName(chordRoot)+" "+chordType+":");
  console.log( "    ["+chordIIX.join(",")+"]" );
  
  var stringElem = document.getElementsByClassName("stringBoard");
  for( var sidx = 0; sidx < stringElem.length; sidx++){
    var selem = stringElem[sidx];
    var stringChildren = selem.children;
    var fiix = CURRENT_INSTRUMENT.stringIIX[sidx];
    console.log("   String: "+selem.id+" has base note: "+fiix);
    for(var eidx = 0; eidx < stringChildren.length; eidx++){
      if(stringChildren[eidx].classList.contains("fret")){
        var fretNote = stringChildren[eidx].getElementsByClassName("fretNote")[0];
        if( chordIIX.includes( fiix ) ){
          fretNote.style.display = "block";
          fretNote.textContent = getNoteName(fiix);
          fretNote.classList.remove("smallFretNote");
        } else if( scaleIIX.includes(fiix) ){
          fretNote.style.display = "block";
          fretNote.textContent = getNoteName(fiix);
          fretNote.classList.add("smallFretNote");
        } else {
          fretNote.style.display = "none";
        }
        fiix = (fiix + 1) % 12;
      }
    }
  }
  
}





document.getElementById("SELECT_SCALEKEY").onchange = calculateChords
document.getElementById("SELECT_ROOT").onchange = calculateChords
document.getElementById("SELECT_CHORDTYPE").onchange = calculateChords
document.getElementById("INSTRUMENT_SELECT").onchange = calculateChords
document.getElementById("SELECT_SCALEKEY").onchange = calculateChords
document.getElementById("SELECT_SCALEKEYTYPE").onchange = calculateChords
document.getElementById("SELECT_CHORDDEGREE").onchange = calculateChords

FRET_SPACING = {
mandolin:[
20,
56.126,
52.976,
50.002,
47.196,
44.547,
42.047,
39.687,
37.459,
35.357,
33.373,
31.499,
29.732,
28.063,
26.488,
25.001,
23.598,
22.273]
}
FRET_DOTS = {
mandolin:[]
}
FRET_DOUBLEDOTS = {
mandolin:[]
}


function instrument(
   instrumentName,
   stringIIX,
   fretSpacing,
   fretDots,
   fretDoubleDots
  ){
    this.instrumentName = instrumentName;
    this.stringIIX = stringIIX;
    this.fretSpacing = fretSpacing;
    this.fretDots = fretDots;
    this.fretDoubleDots = fretDoubleDots;
}

INSTRUMENT_MANDOLIN = new instrument(
  "Mandolin",
  [7,2,9,4],
  [  20,  56.126,  52.976,  50.002,  47.196,  44.547,  42.047,  39.687,  37.459,  35.357,  33.373,  31.499,  29.732,  28.063,  26.488,  25.001,  23.598,22.273],
  [],
  []
)
INSTRUMENT_UKELELE = new instrument(
  "Ukelele",
  [7,0,4,9],
  [  20,  56.126,  52.976,  50.002,  47.196,  44.547,  42.047,  39.687,  37.459,  35.357,  33.373,  31.499,  29.732,  28.063,  26.488,  25.001,  23.598,22.273],
  [],
  []
)
INSTRUMENT_GUITAR = new instrument(
  "Guitar",
  [4,9,2,7,11,4],
  [  20,  56.126,  52.976,  50.002,  47.196,  44.547,  42.047,  39.687,  37.459,  35.357,  33.373,  31.499,  29.732,  28.063,  26.488,  25.001,  23.598,22.273],
  [],
  []
)


INSTRUMENTS = {
 MANDOLIN:INSTRUMENT_MANDOLIN,
 UKELELE:INSTRUMENT_UKELELE,
 GUITAR:INSTRUMENT_GUITAR
}
CURRENT_INSTRUMENT = INSTRUMENTS["MANDOLIN"];
FRETBOARD_LENGTH = 800;



function setInstrument(){
  var inst = INSTRUMENTS[ document.getElementById("INSTRUMENT_SELECT").value ];
  var fretboard = document.getElementById("fretBoard");
  fretboard.innerHTML = "";
  var spacing = [];
  var totalSpacing = 0;
    for(var j=0; j < inst.fretSpacing.length; j++){
      totalSpacing = totalSpacing + inst.fretSpacing[j];
    }
    for(var j=0; j < inst.fretSpacing.length; j++){
      spacing[j] = inst.fretSpacing[j] * FRETBOARD_LENGTH / totalSpacing;
    }
  var slab = document.createElement("div");
  slab.classList.add("stringLabel");
  fretboard.appendChild(slab);
  for(var j=0; j < spacing.length; j++){
    var fb = document.createElement("div");
    fb.classList.add("fretLabel");
    slab.appendChild(fb);
    fb.textContent = ""+j;
    fb.style.height = spacing[j]+"px";
    fb.style["line-height"] = spacing[j]+"px";
  }

  for(var i = 0; i < inst.stringIIX.length; i++){
    var sb = document.createElement("div");
    sb.classList.add("stringBoard");
    document.getElementById("fretBoard").appendChild(sb);
    var ss = document.createElement("div");
    ss.classList.add("stringLine");
    sb.appendChild(ss);
    for(var j=0; j < spacing.length; j++){
      var fb = document.createElement("div");
      var fn = document.createElement("div");
      fb.classList.add("fret");
      fn.classList.add("fretNote");
      fb.style.height = spacing[j]+"px";
      sb.appendChild(fb);
      fb.appendChild(fn);
      fn.textContent = getNoteName( inst.stringIIX[i] + j );
    }
  }
  CURRENT_INSTRUMENT = inst;
}
document.getElementById("INSTRUMENT_SELECT").onchange = setInstrument

CHORDSETS = {
 Major:[
    [ [0,"M"],[1,"m"],[2,"m"],[3,"M"],[4,"M"],[5,"m"],[6,"dim"] ],
    [ [0,"maj7"],[1,"m7"],[2,"m7"],[3,"maj7"],[4,"7"],[5,"m7"] ],
    [ [0,"6"], [1,"m6"],[3,"6"],[4,"6"] ],
    [ [0,"sus4"],[1,"sus4"],[2,"sus4"],[4,"sus4"],[5,"sus4"]],
    [ [0,"sus2"],[1,"sus2"],[3,"sus2"],[4,"sus2"],[5,"sus2"]]
 ],
 Minor:[
    [ [0,"m"],[1,"dim"],[2,"M"],[3,"m"],[4,"m"],[5,"M"],[6,"M"] ],
    [ [0,"m7"],[1,"m7b5"],[2,"maj7"],[3,"m7"],[4,"m7"],[5,"maj7"],[6,"7"]],
    [  [2,"m6"],[3,"m6"],[5,"6"],[6,"6"] ],
    [ [0,"sus4"],[2,"sus4"],[3,"sus4"],[4,"sus4"],[6,"sus4"]],
    [ [0,"sus2"],[2,"sus2"],[3,"sus2"],[5,"sus2"],[6,"sus2"]]
 ]
 
}
CHORDSET_ROW_LABELS = {
  Major : ["I","ii","iii","IV","V","vi","vii"]
}

CURRENT_CHORDROOT_IIX = 0;
CURRENT_CHORDTYPE     = "M";
function selectChord(){
  var allButtons = document.getElementsByClassName("CHORD_BUTTON");
  for(var i=0; i < allButtons.length; i++){
    allButtons[i].classList.remove("CHORD_BUTTON_SELECTED");
  }
  this.classList.add("CHORD_BUTTON_SELECTED");
  CURRENT_CHORDROOT_IIX = this.chordRootIIX;
  CURRENT_CHORDTYPE = this.chordType;
  calculateChords()
}

function getChordTypeString( ct ){
  if(ct == "M"){
    return ""
  } else {
    return ct;
  }
}

function setupScaleChords(){
  var currScale = getCurrentScale()
  var currentScaleType = currScale.scaleType;
  var rootIIX = currScale.rootIIX;
  var intervals = currScale.intervals;
  var scaleIIX = getScaleIIX(intervals,rootIIX);
  var chordSet = CHORDSETS[currentScaleType];
  
  var panel = document.getElementById("CHORD_PANEL");
  panel.innerHTML = "";
  for(var i=0; i < chordSet.length; i++){
    //var cbc = document.createElement("div");
    //cbc.classList.add("CHORD_BUTTON_COLUMN");
    //panel.appendChild(cbc);
    
    console.log("starting chordset: "+i);
    for(var j=0; j < scaleIIX.length; j++){
      var chordRootIIX = scaleIIX[j];
      var chordRootID  = getNoteName(chordRootIIX);
      console.log("   checking: "+j);
      var hasBeenAdded = 0;
      for(var k=0; k < chordSet[i].length; k++){
        if(chordSet[i][k][0] == j){
          var cb = document.createElement("button");
          cb.classList.add("CHORD_BUTTON");
          cb.textContent = chordRootID + getChordTypeString(chordSet[i][k][1]);
          cb.chordString = chordRootID + chordSet[i][k][1];
          cb.chordRootIIX = chordRootIIX;
          cb.chordType    = chordSet[i][k][1];
          cb.onclick = selectChord;
          panel.appendChild(cb);
          console.log("     button added: "+chordRootID + chordSet[i][k][1]);
          hasBeenAdded = 1;
        }
      }
      if(hasBeenAdded == 0) {
          var cb = document.createElement("button");
          cb.classList.add("CHORD_NOBUTTON");
          panel.appendChild(cb);
          console.log("     no button added.");
      }
    }
  }
}

document.getElementById("SELECT_SCALEKEY").onchange = setupScaleChords
document.getElementById("SELECT_SCALEKEYTYPE").onchange = setupScaleChords

setInstrument()
setupScaleChords()