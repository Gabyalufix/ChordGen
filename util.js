
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PROCEDURAL TEXT PARSING
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

NOTE_NAMES_GENERAL = ["C","C#/Db","D","D#/Eb",
                    "E","F","F#/Gb","G",
                    "G#/Ab","A","A#/Bb","B"];

NOTE_NAMES_SHARP = ["C","C#","D","D#",
                    "E","F","F#","G",
                    "G#","A","A#","B"]
NOTE_NAMES_FLAT  = ["C","Db","D","Eb",
                    "E","F","Gb","G",
                    "Ab","A","Bb","B"]

CURRENT_SCALE_SHARPTYPE = "sharp";

KEY_TYPE_INTERVALS = {
  "Major":[2,2,1,2,2,2],
  "Minor":[2,1,2,2,1,2],
  "MelodicMinor":[2,1,2,2,2,2,1],
  "HarmonicMinor":[2,1,2,2,1,3,1],
  "Dorian":[2,1,2,2,2,1,2],
  "Phrygian":[1,2,2,2,1,2,2],
  "Lydian":[2,2,2,1,2,2,1],
  "Mixolydian":[2,2,1,2,2,1,2],
  "Aeolian":[2,1,2,2,1,2,2],
  "HungarianMjr":[3,1,2,1,2,1,2],
  "Gypsy":[2,1,3,1,1,3,1],
  "Chromatic":[1,1,1,1,1,1,1,1,1,1,1],
  "MajorPentatonic":[2,2,3,2,3],
  "MinorPentatonic":[3,2,2,3,2],
  "ChinesePentatonic":[4,2,1,4,1]
}
KEY_TYPE_TITLES=[
    ["Major","Major"],
    ["Minor","Natural Minor"],
    ["MelodicMinor","Melodic Minor"],
    ["HarmonicMinor","Harmonic Minor"],
    ["Dorian","Dorian"],
    ["Phrygian","Phrygian"],
    ["Lydian","Lydian"],
    ["Mixolydian","Mixolydian"],
    ["Aeolian","Aeolian"],
    ["HungarianMjr","Hungarian Major"],
    ["Gypsy","\"Gypsy\""],
    ["Chromatic","Chromatic"],
    ["MajorPentatonic","Major Pentatonic"],
    ["MinorPentatonic","Minor Pentatonic"],
    ["ChinesePentatonic","Chinese Pentatonic"]
]

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
  "6/9":[4,3,2,5],
  "sus2":[2,5],
  "sus4":[5,2],
  "m7b5":[3,3,4],
  "dim7":[3,3,3],
  "7b5":[4,2,4],
  "7#5":[4,4,2],
  "m(maj7)":[3,4,4],
  "m7b5":[3,3,4],
  "dim7":[3,3,3],
  "9":[4,3,3,4],
  "9b5":[4,2,4,4],
  "9#5":[4,4,2,4],
  "maj9":[4,3,4,3],
  "m9":[3,4,3,4],
  "m11":[3,4,3,7],
  "7sus4":[5,2,3],
  "7sus2":[2,5,3],
  "9sus4":[5,2,3,4]
}

CHORD_TYPE_DEF = {
  "M":["R","3","5"],
  "m":["R","m3","5"],
  "6":["R","3","5","6"],
  "m6":["R","m3","5","6"],
  "6/9":["R","3","5","6","9"],
  "maj7":["R","3","5","7"],
  "7":["R","3","5","m7"],
  "7b5":["R","3","m5","m7"],
  "7#5":["R","3","#5","m7"],
  "m7":["R","m3","5","m7"],
  "m(maj7)":["R","m3","5","7"],
  "m7b5":["R","m3","m5","m7"],
  "dim7":["R","m3","m5","6"],
  "hdim7":["R","m3","m5","m7"],
  "9":["R","3","5","m7","9"],
  "9b5":["R","3","m5","m7","9"],
  "9#5":["R","3","#5","m7","9"],
  "maj9":["R","3","5","7","9"],
  "m9":["R","m3","5","m7","9"],
  "m11":["R","m3","5","m7","11"],
  "13":["R","3","5","m7","13"],
  "maj13":["R","3","5","7","13"],
  "m13":["R","m3","5","m7","13"],
  "sus4":["R","4","5"],
  "sus2":["R","2","5"],
  "7sus4":["R","4","5","m7"],
  "7sus2":["R","2","5","m7"],
  "9sus4":["R","4","5","m7","9"],
  "9sus2":["R","2","5","m7","9"],
  "aug":["R","3","m6"],
  "dim":["R","m3","m5"],
  "5":["R","5"],
  "add9":["R","3","5","9"],
  "add11":["R","3","5","11"],
  "add13":["R","3","5","13"],
  "m(add9)":["R","m3","5","9"],
  "m(add11)":["R","m3","5","11"],
  "m(add13)":["R","m3","5","13"]
}
CHORD_TYPE_LIST = [
  "M"   ,       
  "m"   ,       
  "6"   ,       
  "m6"  ,       
  "6/9" ,       
  "maj7",       
  "7"   ,       
  "7b5" ,       
  "7#5" ,       
  "m7"  ,       
  "m(maj7)" ,   
  "m7b5"    ,   
  "dim7"    ,
  "hdim7",
  "9"       ,   
  "9b5"     ,   
  "9#5"     ,   
  "maj9"    ,   
  "m9"      ,   
  "m11"     ,   
  "13"      ,   
  "maj13"   ,   
  "m13"     ,   
  "sus4"    ,   
  "sus2"    ,   
  "7sus4"   ,   
  "7sus2"   ,   
  "9sus4"   ,   
  "9sus2"   ,   
  "aug"     ,   
  "dim"     ,   
  "5"       ,
  "add9",  "add11","add13",
  "m(add9)",  "m(add11)","m(add13)"
]

CHORDNOTE_INTERVALS = {
  "R":0,
  "3":4,
  "5":7,
  "m3":3,
  "7":11,
  "m7":10,
  "6":9,
  "9":14, //or 2?
  "m5":6,
  "#5":8,
  "11":17, //or 5
  "13":21, //or 9
  "2":2,
  "4":5,
  "m6":8
}
//  "6/9":[2,2,3,2],


CHORDSETS = {
 Major:[
    [ [0,"M"],[1,"m"],[2,"m"],[3,"M"],[4,"M"],[5,"m"],[6,"dim"] ],
    [ [0,"maj7"],[1,"m7"],[2,"m7"],[3,"maj7"],[4,"7"],[5,"m7"], [6,"hdim7"] ],
    [ [0,"6"], [1,"m6"],[3,"6"],[4,"6"], [6,"dim7"] ],
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

CHORDSET_OPTIONS = [
    ["M","m","dim","aug","5","sus4","sus2"],
    ["7","m7","maj7","m(maj7)","m7b5","7b5","7#5","hdim7"],
    ["6","m6","dim7"],
    ["sus4"],
    ["sus2"],
    ["7sus4","7sus2"]
]


document.getElementById("SELECT_SCALEKEYTYPE").innerHTML = "";
for(var i=0; i < KEY_TYPE_TITLES.length; i++){
    //<option value="Major">       Major</option>
       var scaleKeyOpt = document.createElement("option");
       scaleKeyOpt.textContent = KEY_TYPE_TITLES[i][1];
       scaleKeyOpt.value = KEY_TYPE_TITLES[i][0];
       document.getElementById("SELECT_SCALEKEYTYPE").appendChild(scaleKeyOpt)
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
    
    this.copyInstrument = function(){
       return new instrument(this.instrumentName,
                         this.stringIIX.slice(),
                         this.fretSpacing.slice(),
                         this.fretDots.slice(),
                         this.fretDoubleDots.slice())
    }
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
CURRENT_INSTRUMENT = INSTRUMENTS["UKELELE"];
FRETBOARD_LENGTH = 800;

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
  console.log("currentScaleType: "+currentScaleType);
  var intervals = KEY_TYPE_INTERVALS[ currentScaleType ];
  var rootIIX = parseInt(currentScale)-1;
  return {rootIIX:rootIIX, scaleType:currentScaleType,intervals:intervals}
}

function getScaleIIX(intervals,rootIIX){
  var currIIX = rootIIX;
  var scaleIIX = [rootIIX];
  for(var i=0; i < intervals.length; i++){
    currIIX = currIIX + intervals[i];
    if(! scaleIIX.includes(currIIX % 12)){
      scaleIIX.push( currIIX % 12 );
    }
  }
  console.log("---- scale: "+scaleIIX.join(","));
  return scaleIIX;
}

function getChordNotes(chordRootIIX,chordType){
  var chordRelNotes = CHORD_TYPE_DEF[chordType];
  var chordIIX = [];
  for(var i=0; i < chordRelNotes.length; i++){
      relNote = CHORDNOTE_INTERVALS[ chordRelNotes[i]];
      chordIIX.push( (relNote + chordRootIIX) % 12 );
  }
  return chordIIX;
}

function setupChordSynon(){
  var chordRoot = CURRENT_CHORDROOT_IIX;
  var chordType = CURRENT_CHORDTYPE;
  var chordRelNotes = CHORD_TYPE_DEF[chordType];
  var chordNotes = getChordNotes(chordRoot,chordType);
  chordNotes.sort();
  
  var panelsetset = document.getElementsByClassName("CHORD_PANELSET");
  
  for(var pss = 0; pss < panelsetset.length; pss++){
      panelset = panelsetset[pss];
      for( var i=0; i < panelset.panels.length; i++){
          var panel = panelset.panels[i];
          for(var j=0; j < panel.chordElems.length; j++){
              var cb = panel.chordElems[j];
              var currChordNotes = getChordNotes(cb.chordRootIIX,cb.chordType);
              currChordNotes.sort();
              var isMatch = true;
              var isSub = false;
              var isSuper = false;
              if(currChordNotes.length == chordNotes.length){
                  for(var k =0; k < chordNotes.length; k++){
                      if(currChordNotes[k] != chordNotes[k]){
                          isMatch = false;
                          break;
                      }
                  }
              } else if(currChordNotes.length > chordNotes.length){
                  isMatch = false;
                  isSuper = true;
                  for(var k =0; k < chordNotes.length; k++){
                      if(! currChordNotes.includes(chordNotes[k])){
                          isSuper = false;
                          break;
                      }
                  }
              } else {
                  isMatch = false;
                  isSub = true;
                  for(var k =0; k < currChordNotes.length; k++){
                      if(! chordNotes.includes(currChordNotes[k])){
                          isSub = false;
                          break;
                      }
                  }
              }
              if(isMatch){
                  cb.classList.add("CHORD_BUTTON_SYNON")
              } else {
                  cb.classList.remove("CHORD_BUTTON_SYNON")
              }
              while(cb.firstElementChild) {
                 cb.removeChild(cb.firstElementChild);
              }
              if(isSuper){
                  var arrow = document.createElement("div");
                  arrow.classList.add("CHORD_BUTTON_UPARROW");
                  arrow.textContent = "+";
                  cb.appendChild(arrow);
              }
              if(isSub){
                  var arrow = document.createElement("div");
                  arrow.classList.add("CHORD_BUTTON_DNARROW");
                  arrow.textContent = "-";
                  cb.appendChild(arrow);
              }
          }
      }
  }
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
  
  var chordRelNotes = CHORD_TYPE_DEF[chordType];
  var chordIIX = [];
  for(var i=0; i < chordRelNotes.length; i++){
      relNote = CHORDNOTE_INTERVALS[ chordRelNotes[i]];
      chordIIX.push( (relNote + chordRoot) % 12 );
  }
  
  //var chordIntervals = CHORD_TYPE_INTERVALS[chordType];
  //var chordIIX = [chordRoot];
  //currIIX = chordRoot;
  //for(var i=0; i < chordIntervals.length; i++){
  //  currIIX = currIIX + chordIntervals[i];
  //  chordIIX.push( currIIX % 12 );
  //}
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
        var fretNote  = stringChildren[eidx].getElementsByClassName("fretNote")[0];
        var fretLabel  = fretNote.getElementsByClassName("chordNoteLabel")[0];
        if( chordIIX.includes( fiix ) ){
          var iixix = chordIIX.indexOf(fiix);
          var chordNoteLabel = chordRelNotes[iixix];
          fretLabel.style.display = "block";
          fretLabel.textContent = chordNoteLabel;
          fretNote.style.display = "block";
          //fretNote.textContent = getNoteName(fiix);
          fretNote.classList.remove("smallFretNote");
          fretNote.classList.add("labelledFretNote");
          if(scaleIIX.includes(fiix)){
              fretNote.classList.remove("fretNoteOffKey");
          } else {
              fretNote.classList.add("fretNoteOffKey");
          }
        } else if( scaleIIX.includes(fiix) ){
          fretLabel.style.display = "none";
          fretNote.style.display = "block";
          //fretNote.textContent = getNoteName(fiix);
          fretNote.classList.add("smallFretNote");
          fretNote.classList.remove("labelledFretNote");
        } else {
          fretLabel.style.display = "none";
          fretNote.style.display = "none";
        }
        fiix = (fiix + 1) % 12;
      }
    }
  }
  setupChordSynon();
  
}





document.getElementById("SELECT_SCALEKEY").onchange = calculateChords
document.getElementById("SELECT_ROOT").onchange = calculateChords
document.getElementById("SELECT_CHORDTYPE").onchange = calculateChords
document.getElementById("INSTRUMENT_SELECT").onchange = calculateChords
document.getElementById("SELECT_SCALEKEY").onchange = calculateChords
document.getElementById("SELECT_SCALEKEYTYPE").onchange = calculateChords
document.getElementById("SELECT_CHORDDEGREE").onchange = calculateChords


function getNoteSelector(){
  //NOTE_NAMES_GENERAL
  
  var ns = document.createElement("select");
  ns.classList.add("SELECT_NOTE");
  for(var i=0; i < NOTE_NAMES_SHARP.length; i++){
    var nn = document.createElement("option");
    nn.textContent = NOTE_NAMES_SHARP[i];
    nn.value = i+"";
    ns.appendChild(nn);
  }
  return ns;
}

function setInstrument(){
  var inst = INSTRUMENTS[ document.getElementById("INSTRUMENT_SELECT").value ].copyInstrument();
  CURRENT_INSTRUMENT = inst;
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
  var sns = document.createElement("div");
  sns.classList.add("SELECT_NOTE_SPACER");
  slab.appendChild(sns);
  for(var j=0; j < spacing.length; j++){
    var fb = document.createElement("div");
    fb.classList.add("fretLabel");
    slab.appendChild(fb);
    fb.textContent = ""+j;
    fb.style.height = spacing[j]+"px";
    fb.style["line-height"] = spacing[j]+"px";
  }

  for(var i = 0; i < inst.stringIIX.length; i++){
    var sbh = document.createElement("div");
    sbh.classList.add("stringBoardHolder");
    var stringNoteSelector = getNoteSelector();
    sbh.appendChild(stringNoteSelector);
    stringNoteSelector.value = ""+inst.stringIIX[i];

    var sb = document.createElement("div");
    sb.sbh = sbh;
    sb.spacing = spacing;
    sb.fretNotes = [];
    sb.stringNoteSelector = stringNoteSelector;
    sb.classList.add("stringBoard");
    stringNoteSelector.sb = sb
    stringNoteSelector.stringIdx = i;
    stringNoteSelector.onchange = function(){
      var iix = parseInt(this.value);
      tuneStringToNote(this.sb, iix);
      CURRENT_INSTRUMENT.stringIIX[this.stringIdx] = iix;
      calculateChords();
    }
    sbh.appendChild(sb);
    document.getElementById("fretBoard").appendChild(sbh);
    var ss = document.createElement("div");
    ss.classList.add("stringLine");
    sb.appendChild(ss);
    for(var j=0; j < spacing.length; j++){
      console.log(" j = "+j);
      var fb = document.createElement("div");
      var fn = document.createElement("div");
      var noteLabel = document.createElement("div");
      fb.classList.add("fret");
      fn.classList.add("fretNote");
      noteLabel.classList.add("chordNoteLabel");

      fb.style.height = spacing[j]+"px";
      sb.appendChild(fb);
      fb.appendChild(fn);
      sb.fretNotes.push(fn);
      console.log(noteLabel)
      console.log(fn)
      fn.textContent = getNoteName( inst.stringIIX[i] + j );
      fn.appendChild(noteLabel);
    }
  }
  calculateChords();
}

function tuneStringToNote(sb, iix){
  for(var i=0; i < sb.fretNotes.length; i++){
    sb.fretNotes[i] = getNoteName( iix + i );
  }
}


document.getElementById("INSTRUMENT_SELECT").onchange = setInstrument

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

function setupScaleChords_OLD(){
  var currScale = getCurrentScale()
  var currentScaleType = currScale.scaleType;
  var rootIIX = currScale.rootIIX;
  var intervals = currScale.intervals;
  var scaleIIX = getScaleIIX(intervals,rootIIX);
  var chordSet = CHORDSETS[currentScaleType];
  
  var panelset = document.getElementById("CHORD_PANELSET0");
  panelset.innerHTML = "";
  var panel = document.createElement("div");
  panel.classList.add("CHORD_PANEL3");
  panelset.appendChild(panel);
  panelset.panels = [panel];
  
  
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
    
    if( i % 3 == 2){
      panel = document.createElement("div");
      panel.classList.add("CHORD_PANEL3");
      panelset.appendChild(panel);
      panelset.panels.push(panel);
    }
    
  }
  setupOtherChords()
}

CHORDSET_OPTIONS = [
    ["M","m","dim","aug"],
    ["7","m7","maj7","m(maj7)","m7b5","7b5","7#5","hdim7"],
    ["6","m6","dim7"],
    ["sus4"],
    ["sus2"],
    ["7sus4","7sus2"]
]

function isChordInKey(chordRootIIX,chordType,scaleIIX){
    var chordRelNotes = CHORD_TYPE_DEF[chordType];
    var inKey = true;
    for(var z=0; z < chordRelNotes.length; z++){
            relNote = CHORDNOTE_INTERVALS[ chordRelNotes[z]];
            var fiix = (relNote + chordRootIIX) % 12;
            if( ! scaleIIX.includes(fiix) ){
                inKey = false;
            }
    }
    return inKey;
}


function setupScaleChords(){
  console.log("SETTING UP SCALE CHORDS")
  var currScale = getCurrentScale()
  var currentScaleType = currScale.scaleType;
  var rootIIX = currScale.rootIIX;
  var intervals = currScale.intervals;
  var scaleIIX = getScaleIIX(intervals,rootIIX);
  var chordSet = CHORDSETS[currentScaleType];
  
  var panelset = document.getElementById("CHORD_PANELSET0");
  panelset.innerHTML = "";
  //panel.style.height = 40 * scaleIIX.length;
  var panel = document.createElement("div");
  panel.classList.add("CHORD_PANEL3");
  panelset.appendChild(panel);
  panelset.panels = [panel];
  panel.chordElems = [];
      panel.style["height"] = "" + (40 * scaleIIX.length) + "px";
      panel.style["grid-template-rows"] = "repeat("+scaleIIX.length+", 40px)"
      //console.log("height set to:"+(40 * scaleIIX.length) + "px" + " = " +panel.style["height"])
      
  for(var i=0; i < CHORDSET_OPTIONS.length; i++){
    //var cbc = document.createElement("div");
    //cbc.classList.add("CHORD_BUTTON_COLUMN");
    //panel.appendChild(cbc);
    var chortOpts = CHORDSET_OPTIONS[i];
    //console.log("starting chordset: "+i);
    for(var j=0; j < scaleIIX.length; j++){
      var chordRootIIX = scaleIIX[j];
      var chordRootID  = getNoteName(chordRootIIX);
      //console.log("   checking: "+j);
      var hasBeenAdded = 0;
      for(var k=0; k < chortOpts.length; k++){
        if(hasBeenAdded == 0){
          var chordType = chortOpts[k];
          var inKey = isChordInKey(chordRootIIX,chordType,scaleIIX);
          if(inKey){
            var cb = document.createElement("button");
            cb.classList.add("CHORD_BUTTON");
            cb.textContent = chordRootID + getChordTypeString(chordType);
            cb.chordString = chordRootID + chordType;
            cb.chordRootIIX = chordRootIIX;
            cb.chordType    = chordType;
            cb.aa_posDesc = i+"/"+j+"/"+k;
            cb.onclick = selectChord;
            panel.chordElems.push(cb);
            panel.appendChild(cb);
            //console.log("     button added: "+chordRootID + chordSet[i][k][1]);
            hasBeenAdded = 1;
          }
        }
      }
      if(hasBeenAdded == 0) {
          var cb = document.createElement("button");
          cb.classList.add("CHORD_NOBUTTON");
          panel.appendChild(cb);
          cb.aa_posDesc = i+"/"+j+"/-"
          //console.log("     no button added.");
      }
    }
    
    if( i % 3 == 2  && i != CHORDSET_OPTIONS.length - 1){
      panel = document.createElement("div");
      panel.classList.add("CHORD_PANEL3");
      panelset.appendChild(panel);
      panelset.panels.push(panel);
      panel.chordElems = [];
      panel.style["height"] = "" + (40 * scaleIIX.length) + "px";
      panel.style["grid-template-rows"] = "repeat("+scaleIIX.length+", 40px)"
      console.log("height set to:"+(40 * scaleIIX.length) + "px" + " = " +panel.style["height"])
  
    }
    
  }
  setupOtherChords()
}


function setupOtherChords(){
  var currScale = getCurrentScale()
  var currentScaleType = currScale.scaleType;
  var rootIIX = currScale.rootIIX;
  var intervals = currScale.intervals;
  var scaleIIX = getScaleIIX(intervals,rootIIX);
  var chordSet = CHORD_TYPE_LIST;
  
  var panelset = document.getElementById("CHORD_PANELSET");
  panelset.innerHTML = "";
  var panel = document.createElement("div");
  panel.classList.add("CHORD_PANEL3");
  panel.chordElems = [];
  panelset.appendChild(panel);
  panelset.panels = [panel];
      panel.style["height"] = "" + (40 * scaleIIX.length) + "px";
      panel.style["grid-template-rows"] = "repeat("+scaleIIX.length+", 40px)"
      
  for(var i=0; i < chordSet.length; i++){
    //var cbc = document.createElement("div");
    //cbc.classList.add("CHORD_BUTTON_COLUMN");
    //panel.appendChild(cbc);
    var chordType = chordSet[i];
    //console.log("starting chordset: "+i);
    for(var j=0; j < scaleIIX.length; j++){
      var chordRootIIX = scaleIIX[j];
      var chordRootID  = getNoteName(chordRootIIX);
      
      //console.log("   checking: "+j);
          var cb = document.createElement("button");
          cb.classList.add("CHORD_BUTTON");
          cb.textContent = chordRootID + getChordTypeString(chordType);
          cb.chordString = chordRootID + chordType;
          cb.chordRootIIX = chordRootIIX;
          cb.chordType    = chordType;
          panel.chordElems.push(cb);
          var inKey = isChordInKey(chordRootIIX,chordType,scaleIIX);
          if(! inKey){
              cb.classList.add("CHORD_BUTTON_OFFKEY");
          } else {
              cb.classList.add("CHORD_BUTTON_INKEY");
          }
          cb.onclick = selectChord;
          panel.appendChild(cb);
         // console.log("     button added: "+chordRootID + chordSet[i]);
    }
    if( i % 3 == 2){
      panel = document.createElement("div");
      panel.classList.add("CHORD_PANEL3");
      panelset.appendChild(panel);
      panelset.panels.push(panel);
      panel.chordElems = [];
      panel.style["height"] = "" + (40 * scaleIIX.length) + "px";
      panel.style["grid-template-rows"] = "repeat("+scaleIIX.length+", 40px)"
    }
  }
}

document.getElementById("SELECT_SCALEKEY").onchange = setupScaleChords
document.getElementById("SELECT_SCALEKEYTYPE").onchange = setupScaleChords

//KEY_TYPE_INTERVALS KEY_TYPE_TITLES


setupScaleChords()
document.getElementsByClassName("CHORD_BUTTON")[0].onclick();

setInstrument()

setupOtherChords();