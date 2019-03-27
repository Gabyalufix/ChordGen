
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
  "min7":[3,4,3],
  "dim":[3,3],
  "aug":[4,4],
  "6":[4,3,2],
  "m6":[3,4,2],
  "69":[4,3,2,5]
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

function calculateChords(){
  var currentScale = (document.getElementById("SELECT_SCALEKEY").value);
  console.log("currentScale: "+currentScale);
  var currentScaleType = document.getElementById("SELECT_SCALEKEYTYPE").value;
  var intervals = KEY_TYPE_INTERVALS[ currentScaleType ];
  
  var rootIIX = parseInt(currentScale)-1;
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
  
  var chordRoot = parseInt(document.getElementById("SELECT_ROOT").value)-1;
  var chordType = document.getElementById("SELECT_CHORDTYPE").value;
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
    var fiix = getNoteIIX( selem.id.charAt(0) );
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

