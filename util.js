
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

KEYROOT_NAMES = [
  "C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"
]
KEYROOT_NAMES_WITHALTS = [
  "C",["Db","C#"],"D","Eb","E","F",["Gb","F#"],"G","Ab","A","Bb",["B","Cb"]
]
KEYROOT_NAMES_FLATS = [
  "F","Db","Eb","Gb","Ab","Bb"
]
KEYROOT_IIX_FLATS = [
  1,3,5,6,8,10
]

 
var NOTE_BASENAMES_SHARP = ["C","C","D","D",
                    "E","F","F","G",
                    "G","A","A","B"]
var NOTE_BASENAMES_FLAT  = ["C","D","D","E",
                    "E","F","G","G",
                    "A","A","B","B"]

var NOTE_BASEMOD_SHARP = ["","#","","#",
                    "","","#","",
                    "#","","#",""]
var NOTE_BASEMOD_FLAT  = ["","b","","b",
                    "","","b","",
                    "b","","b",""]

var NOTE_NUMS = {
    "C":0,
    "D":1,
    "E":2,
    "F":3,
    "G":4,
    "A":5,
    "B":6
}


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
//CHORD_TYPE_LIST
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
  "b2":1,  
  "2":2,
  "m3":3,
  "3":4,
  "4":5,
  "m5":6,
  "5":7,
  "#5":8,
  "m6":8,
  "6":9,
  "m7":10,
  "7":11,
  "9":14, //or 2?
  "11":17, //or 5
  "13":21 //or 9
}

CHORDNOTE_INTERVAL_LIST = [
 "R","b2","2","m3","3","4","m5","5","#5","m6","6","m7","7","9","11","13"
]

REV_CHORDNOTE_INTERVALS = {
  0:"R",
  1:"b2",
  2:"2",
  3:"m3",
  4:"3",
  5:"4",
  6:"m5",
  7:"5",
  8:  "#5",
  9:  "6",
  10: "m7",
  11: "7"
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


var STAFF_HOLDER = document.getElementById("STAFF_HOLDER");
var STAVES = STAFF_HOLDER.getElementsByClassName("STAFF_LINE")



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


CURRENT_CHORDROOT_IIX = 0;
CURRENT_CHORDTYPE     = "M";
CURRENT_CHORDINTERVALS = CHORD_TYPE_DEF[CURRENT_CHORDTYPE];

function selectChord(){
  var allButtons = document.getElementsByClassName("CHORD_BUTTON");
  for(var i=0; i < allButtons.length; i++){
    allButtons[i].classList.remove("CHORD_BUTTON_SELECTED");
  }
  this.classList.add("CHORD_BUTTON_SELECTED");
  CURRENT_CHORDROOT_IIX = this.chordRootIIX;
  CURRENT_CHORDTYPE = this.chordType;
  CURRENT_CHORDINTERVALS = CHORD_TYPE_DEF[CURRENT_CHORDTYPE];
  Array.prototype.map.call(document.getElementsByClassName("fretNote"), fnn => {
                      fnn.classList.remove("fretNoteUnselected");
                      fnn.classList.remove("fretNoteSelected");
  })
  calculateChords()
}



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                          Util Functions
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


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

var CURRENT_SCALE = 0;
//var CURRENT_SCALE_SHARPTYPE = "sharp";

function getCurrentScale(){
  var currentScale = CURRENT_SCALE;
  console.log("currentScale: "+currentScale);
  var currentScaleType = document.getElementById("SELECT_SCALEKEYTYPE").value;
  console.log("currentScaleType: "+currentScaleType);
  var intervals = KEY_TYPE_INTERVALS[ currentScaleType ];
  var rootIIX = currentScale;
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

function getChordNotes(chordRootIIX,chordRelNotes){
  //var chordRelNotes = CHORD_TYPE_DEF[chordType];
  var chordIIX = [];
  for(var i=0; i < chordRelNotes.length; i++){
      relNote = CHORDNOTE_INTERVALS[ chordRelNotes[i]];
      chordIIX.push( (relNote + chordRootIIX) % 12 );
  }
  return chordIIX;
}

function dropFromArray(aa,elem){
  var ix = aa.indexOf(elem);
  if(ix > -1){
    aa.splice(ix,1);
  }
}

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

function tuneStringToNote(sb, iix){
  for(var i=0; i < sb.fretNotes.length; i++){
    sb.fretNotes[i] = getNoteName( iix + i );
  }
}

//document.getElementById("INSTRUMENT_SELECT").onchange = setInstrument

function getChordTypeString( ct ){
  if(ct == "M"){
    return ""
  } else {
    return ct;
  }
}

CHORDSET_OPTIONS = [
    ["M","m","dim","aug"],
    ["7","m7","maj7","m(maj7)","m7b5","7b5","7#5","hdim7"],
    ["6","m6","dim7"],
    ["sus4"],
    ["sus2"],
    ["7sus4","7sus2"]
]

function isChordInKey(chordRootIIX,chordRelNotes,scaleIIX){
   // var chordRelNotes = CURRENT_CHORDINTERVALS //CHORD_TYPE_DEF[chordType];
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

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                          Chord Synon calcs
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


function copyChordButton(cb){
            var cb2 = document.createElement("button");
            Array.prototype.map.call(cb.classList, x => cb2.classList.add(x) );
            cb2.textContent = cb.chordTitleString;
            cb2.classList.add("STATICSIZE");
            //cb2.textContent = cb.textContent
            cb2.chordString = cb.chordString;
            cb2.chordRootIIX = cb.chordRootIIX ;
            cb2.chordTitleString = cb.chordTitleString;
            cb2.chordType    = cb.chordType;
            cb2.aa_posDesc = cb.aa_posDesc;
            cb2.onclick = selectChord;
            if( cb2.chordRootIIX == CURRENT_CHORDROOT_IIX && cb2.chordType == CURRENT_CHORDTYPE ){
              cb2.classList.add("CHORD_BUTTON_SELECTED")
            }
            if(typeof cb.diffIIX === "undefined"){
               //do nothing
            } else {
               cb2.diffIIX = cb.diffIIX;
            }
            
            return cb2;
}

function getChordDiff(rootA, elemsA, rootB, elemsB){
    // A< B
    var addElems = [];
    
    if(rootA == rootB){
         var cixA     = elemsA.map( x => CHORDNOTE_INTERVALS[x] % 12 );
         var cixB     = elemsB.map( x => CHORDNOTE_INTERVALS[x] % 12 );
         for(var i=0; i < cixB.length; i++){
           if( (! elemsA.includes(elemsB[i])) && ( ! cixA.includes(cixB[i]) ) ){
             //console.log("   ADDED!")
             addElems.push(elemsB[i]);
           }
         }
    } else {
      var iixA     = elemsA.map( x => (CHORDNOTE_INTERVALS[x] + rootA) % 12 );
      var iixB     = elemsB.map( x => (CHORDNOTE_INTERVALS[x] + rootB) % 12 );
         for(var i=0; i < iixB.length; i++){
           if( ( ! iixA.includes(iixB[i]) ) ){
             var cix = (iixB[i]+24 - rootA) % 12;
             //REV_CHORDNOTE_INTERVALS
             addElems.push(REV_CHORDNOTE_INTERVALS[cix]);
           }
         }
    }
    return addElems;
}

function addSupMarker(cb){
    //CURRENT_CHORDINTERVALS = CHORD_TYPE_DEF[CURRENT_CHORDTYPE];
       var addElems = getChordDiff( CURRENT_CHORDROOT_IIX, CURRENT_CHORDINTERVALS, cb.chordRootIIX, CHORD_TYPE_DEF[cb.chordType]);
       //cb.diffIIX
       //console.log( addElems )
       var arrow = document.createElement("div");
       arrow.classList.add("CHORD_BUTTON_UPARROW");
       arrow.textContent = "+" + addElems.join("+");
       cb.appendChild(arrow);
}
function addSubMarker(cb){
       var addElems = getChordDiff(  cb.chordRootIIX, CHORD_TYPE_DEF[cb.chordType], CURRENT_CHORDROOT_IIX, CURRENT_CHORDINTERVALS);
       //cb.diffIIX
       //console.log( addElems )
       var arrow = document.createElement("div");
       arrow.classList.add("CHORD_BUTTON_DNARROW");
       arrow.textContent = "-" + addElems.join("-");
       cb.appendChild(arrow);
}


function setupChordSynon(){
  var chordRoot = CURRENT_CHORDROOT_IIX;
  var chordType = CURRENT_CHORDTYPE;
  var chordRelNotes = CURRENT_CHORDINTERVALS //CHORD_TYPE_DEF[chordType];
  var chordNotes = getChordNotes(chordRoot,CURRENT_CHORDINTERVALS);
  chordNotes.sort();
  
  var panelsetset = document.getElementsByClassName("CHORD_PANELSET");
  
  var synChordElem = [];
  var supChordElem = [];
  var subChordElem = [];
  
  for(var pss = 0; pss < panelsetset.length; pss++){
      panelset = panelsetset[pss];
      var isFullSet = (panelset.id == "CHORD_PANELSET");
      console.log("pss.id = "+panelset.id + " / "+isFullSet); 
      for( var i=0; i < panelset.panels.length; i++){
          var panel = panelset.panels[i];
          for(var j=0; j < panel.chordElems.length; j++){
              var cb = panel.chordElems[j];
              var currChordNotes = getChordNotes(cb.chordRootIIX,CHORD_TYPE_DEF[cb.chordType]);
              currChordNotes.sort();
              var isMatch = true;
              var isSub = false;
              var isSuper = false;
              var diffIIX = [];
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
                  diffIIX = currChordNotes.slice();
                  for(var k =0; k < chordNotes.length; k++){
                      dropFromArray(diffIIX,chordNotes[k]);
                      if(! currChordNotes.includes(chordNotes[k])){
                          isSuper = false;
                          break;
                      }
                  }
              } else {
                  isMatch = false;
                  isSub = true;
                  diffIIX = chordNotes.slice();
                  for(var k =0; k < currChordNotes.length; k++){
                      dropFromArray(diffIIX,currChordNotes[k]);
                      if(! chordNotes.includes(currChordNotes[k])){
                          isSub = false;
                          break;
                      }
                  }
              }
              if(isMatch){
                  cb.classList.add("CHORD_BUTTON_SYNON")
                  if(isFullSet){
                    synChordElem.push( copyChordButton(cb) );
                  }
              } else {
                  cb.classList.remove("CHORD_BUTTON_SYNON")
              }
              while(cb.firstElementChild) {
                 cb.removeChild(cb.firstElementChild);
              }
              if(isSuper){
                  //var arrow = document.createElement("button");
                  //arrow.classList.add("CHORD_BUTTON_UPARROW");
                  //arrow.textContent = "+";
                  //cb.appendChild(arrow);
                  cb.diffIIX = diffIIX;
                  addSupMarker(cb);
                  if(isFullSet){
                    supChordElem.push( copyChordButton(cb) );
                  }
              }
              if(isSub){
                  var arrow = document.createElement("button");
                  //arrow.classList.add("CHORD_BUTTON_DNARROW");
                  //arrow.textContent = "-";
                  //cb.appendChild(arrow);
                  //cb.diffIIX = diffIIX;
                  addSubMarker(cb);
                  if(isFullSet){
                  subChordElem.push( copyChordButton(cb) );
                  }
              }
          }
      }
  }
  var relChordPanel = document.getElementById("RELCHORD_PANELSET");
  var listSoFar = [];
  relChordPanel.innerHTML = "";
  for(var ii = 0; ii < synChordElem.length; ii++){
    var cc2 = synChordElem[ii]
    if(! listSoFar.includes(cc2.chordString)){
      relChordPanel.appendChild( cc2);
      listSoFar.push( cc2.chordString );
    }
  }
  for(var ii = 0; ii < supChordElem.length; ii++){
    var cc2 = supChordElem[ii]
    if(! listSoFar.includes(cc2.chordString)){
      relChordPanel.appendChild( cc2);
      listSoFar.push( cc2.chordString );
      addSupMarker(cc2);
    }
  }
  for(var ii = 0; ii < subChordElem.length; ii++){
    var cc2 = subChordElem[ii]
    if(! listSoFar.includes(cc2.chordString)){
      relChordPanel.appendChild( cc2);
      listSoFar.push( cc2.chordString );
      addSubMarker(cc2);
    }
  }
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                         Chord Buttons:
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 

function assignChordButtonEvents(){
    Array.prototype.map.call(document.getElementsByClassName("fretNote"),
    fn => {
         console.log("?");
         fn.onmousedown = function(event){
            if(event.button == 0){
                console.log("BUTTON-0");
                console.log(this.stringBoard.fretNotes)
                if(this.classList.contains("fretNoteSelected")){
                    this.stringBoard.selected = false;
                    this.stringBoard.classList.remove("stringWithSelected")
                    this.classList.remove("fretNoteSelected");
                    //todo: make it remove the note!
                    delNoteToChord(this.noteIIX);
                } else if(fn.classList.contains("labelledFretNote")){
                    if(this.stringBoard.selected){
                      this.stringBoard.selected.classList.remove("fretNoteSelected");
                    } else {
                      this.stringBoard.classList.add("stringWithSelected")
                    }
                    this.stringBoard.selected = this;
                    this.classList.add("fretNoteSelected");
                } else {
                    if(this.stringBoard.selected){
                      this.stringBoard.selected.classList.remove("fretNoteSelected");
                      this.stringBoard.classList.remove("stringWithSelected")
                    }
                    this.stringBoard.selected = false;
                    addNoteToChord(this.noteIIX);
                }
            } else if(event.button == 2){

            }
         }
    } );
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                         Calculate chord
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 

function getRelNoteIIX(chordRoot,chordRelNotes){
    var chordIIX = [];
    var chordRIX = [];
    for(var i=0; i < chordRelNotes.length; i++){
          relNote = CHORDNOTE_INTERVALS[ chordRelNotes[i]];
          chordIIX.push( (relNote + chordRoot) % 12 );
          chordRIX.push( (relNote + chordRoot) );
    }
    return [chordIIX,chordRIX]
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
  
  var chordRoot = CURRENT_CHORDROOT_IIX;
  var chordType = CURRENT_CHORDTYPE;
  var chordRelNotes = CURRENT_CHORDINTERVALS;
  
  if(chordType != "CUSTOM"){
      //var chordRelNotes = CHORD_TYPE_DEF[chordType];
      var chordX = getRelNoteIIX(chordRoot,chordRelNotes)
      var chordIIX = chordX[0];
      var chordRIX = chordX[1];
      pushChordsToInstruments(scaleIIX,chordIIX,chordRIX,chordRelNotes)
      setupChordSynon();
      setChordInfoPanel_KNOWN()
  } else {

      var chordX = getRelNoteIIX(chordRoot,chordRelNotes)
      var chordIIX = chordX[0];
      var chordRIX = chordX[1];
      pushChordsToInstruments(scaleIIX,chordIIX,chordRIX,chordRelNotes)
      setupChordSynon();
  }
}


function pushChordsToInstruments(scaleIIX,chordIIX,chordRIX,chordRelNotes){

  var activeInstrumentList = document.getElementsByClassName("instrumentPanel");
  for( var iidx = 0; iidx < activeInstrumentList.length; iidx++){
      var currInst = activeInstrumentList[iidx];
      var stringElem = currInst.stringBoardList;
      //console.log("currInst:"); console.log(currInst);
      for( var sidx = 0; sidx < stringElem.length; sidx++){
        var selem = stringElem[sidx];
        var stringChildren = selem.children;
        var fiix = currInst.instrument.stringIIX[sidx];
        //console.log("   String: "+selem.id+" has base note: "+fiix);
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
              fretNote.classList.remove("chordFretNote");
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
              fretNote.classList.remove("fretNoteOffKey");
              fretNote.classList.remove("chordFretNote");
            } else {
              fretLabel.style.display = "none";
              //fretNote.style.display = "none";
              fretNote.classList.remove("chordFretNote");
              fretNote.classList.remove("fretNoteOffKey");
              fretNote.classList.remove("smallFretNote");
              fretNote.classList.remove("labelledFretNote");

              
            }
            fiix = (fiix + 1) % 12;
          }
        }
      }
  }
  
  var pianoKeys = document.getElementsByClassName("PIANO_KEY");
  for( var nidx = 0; nidx < pianoKeys.length; nidx++){
    var fiix = nidx % 12;
    var pk = pianoKeys[nidx];
    console.log("nidx: "+nidx+" / "+pk);
    if( chordIIX.includes( fiix ) ){
        pk.classList.remove("PIANO_INACTIVE");
        pk.classList.add("PIANO_ACTIVEKEY");
        if(scaleIIX.includes(fiix) ){
          pk.classList.remove("PIANO_ACCIDENTAL");
        } else {
          pk.classList.add("PIANO_ACCIDENTAL");
        }
    } else if( scaleIIX.includes(fiix) ){
        pk.classList.add("PIANO_INACTIVE");
        pk.classList.remove("PIANO_ACCIDENTAL");
        pk.classList.remove("PIANO_ACTIVEKEY");
    } else {
        pk.classList.add("PIANO_INACTIVE");
        pk.classList.remove("PIANO_ACTIVEKEY");
        pk.classList.add("PIANO_ACCIDENTAL");

    }
  }
  
  var staffHolder = document.getElementById("STAFF_HOLDER");
  var staffHolderArray = Array.prototype.map.call(staffHolder.getElementsByClassName("STAFF_NOTE"),
                           x => x );
  Array.prototype.map.call(staffHolderArray,
                           x => x.parentElement.removeChild(x) );
  var staffHolderArray = Array.prototype.map.call(staffHolder.getElementsByClassName("STAFF_FLOAT"),
                           x => x.style.display = "none" );
  chordRIX.map( rix => addNote(rix) );

}

function mouseDownButtonAddNote(event){
            if(event.button == 0){
               if(! this.classList.contains("PIANO_ACTIVEKEY")){
                   addNoteToChord(this.fiix);
               }
            } else if(event.button == 2){
               
            }
}

var pianoKeys = document.getElementsByClassName("PIANO_KEY");
for( var nidx = 0; nidx < pianoKeys.length; nidx++){
    var fiix = nidx % 12;
    var pk = pianoKeys[nidx];
    pk.fiix = fiix;
    pk.onclick = function(){
               if(this.classList.contains("PIANO_ACTIVEKEY")){
                   delNoteToChord(this.fiix);
               } else {
                   addNoteToChord(this.fiix);
               }
    }
    /*pk.onmousedown = function(event){
            if(event.button == 0){
               if(! this.classList.contains("PIANO_ACTIVEKEY")){
                   addNoteToChord(this.fiix);
               }
            } else if(event.button == 2){
               
            }
    }*/
}

function addNoteToChord(fiix){
    fiix = fiix % 12;
    var pci = document.getElementById("PIANO_CHORDINFO");
    var menuList = pci.getElementsByClassName("CHORD_INFOPANEL_NOTE_DROPDOWN");
    CURRENT_CHORDNOTES = Array.prototype.map.call(menuList, x => {
              return (CHORDNOTE_INTERVALS[x.value] + CURRENT_CHORDROOT_IIX) % 12;
    })
    if(!  CURRENT_CHORDNOTES.includes( fiix ) ){
      var ixx = REV_CHORDNOTE_INTERVALS[(fiix +24 -CURRENT_CHORDROOT_IIX) % 12 ];
      menuList[menuList.length - 1].value = ixx;
      menuList[menuList.length - 1].onchange();
    }
}
function delNoteToChord(fiix){
    fiix = fiix % 12;
    var pci = document.getElementById("PIANO_CHORDINFO");
    var menuList = pci.getElementsByClassName("CHORD_INFOPANEL_NOTE_DROPDOWN");
    CURRENT_CHORDNOTES = Array.prototype.map.call(menuList, x => {
              return (CHORDNOTE_INTERVALS[x.value] + CURRENT_CHORDROOT_IIX) % 12;
    })
    var idx = CURRENT_CHORDNOTES.indexOf(fiix)
    if(idx  > 0){
      //var ixx = REV_CHORDNOTE_INTERVALS[(fiix +24 -CURRENT_CHORDROOT_IIX) % 12 ];
      menuList[idx].value = "";
      menuList[idx].onchange();
    }
}


function updateChordFromInfoPanelNoteSelector(){
          var pci = this.parentElement;
          if(this.value == "" && (! this.isLastNote)){
              pci.removeChild(this);
          } else if(this.isLastNote && this.value != ""){
              this.isLastNote = false;
              var nsel = getNewChordNoteOptionSelector("", CURRENT_CHORDROOT_IIX)
              pci.appendChild(nsel);
              nsel.isLastNote = true;
              nsel.onchange = updateChordFromInfoPanelNoteSelector;
          } else if(this.isRootNote){
              console.log("root switch not yet implemented! I'm not sure what I want this to do!");
          }
          //var pci = document.getElementById("PIANO_CHORDINFO");
          var menuList = pci.getElementsByClassName("CHORD_INFOPANEL_NOTE_DROPDOWN");
          CURRENT_CHORDINTERVALS = Array.prototype.map.call(menuList, x => {
              return x.value
          })
          CURRENT_CHORDINTERVALS.pop();
          updateChordFromIntervalParam();
          if(CURRENT_CHORDTYPE == "CUSTOM"){
            pci.childNodes[0].textContent = getNoteName(CURRENT_CHORDROOT_IIX) + "-custom"+"  "
          } else {
            pci.childNodes[0].textContent = getNoteName(CURRENT_CHORDROOT_IIX) + getChordTypeString(CURRENT_CHORDTYPE) +"  "
          }
          calculateChords();
}

function updateChordFromIntervalParam(){
          var perfectMatch = [];
          for(var i=0; i < CHORD_TYPE_LIST.length; i++){
              var civ = CHORD_TYPE_DEF[CHORD_TYPE_LIST[i]]
              console.log("Comparing: "+civ.join("/")+" vs "+CURRENT_CHORDINTERVALS.join("/"));
              if(civ.length == CURRENT_CHORDINTERVALS.length){
                  var match = true;
                  for(var j=0; j < CURRENT_CHORDINTERVALS.length; j++){
                      if(! civ.includes(CURRENT_CHORDINTERVALS[j])){
                          match = false;
                          break
                      }
                  }
                  if(match){
                      perfectMatch.push(CHORD_TYPE_LIST[i]);
                      console.log("MATCH! "+civ.join("/")+" vs "+CURRENT_CHORDINTERVALS.join("/"));
                      break;
                  }
              }
          }
          if(perfectMatch.length >0){
              CURRENT_CHORDTYPE     = perfectMatch[0];
          } else {
              CURRENT_CHORDTYPE = "CUSTOM"
          }
}


function getNewChordNoteOptionSelector(vv,chordRoot){
        var nsel = document.createElement("select");
        nsel.classList.add("CHORD_INFOPANEL_NOTE_DROPDOWN")
        //pci.appendChild(nsel);
        CHORDNOTE_INTERVAL_LIST.map(function(cil){
            var fiix = (chordRoot + CHORDNOTE_INTERVALS[cil]) % 12;
            var oo = document.createElement("option");
            oo.fiix = fiix;
            oo.value = cil;
            oo.textContent = cil+"("+ getNoteName(fiix)+")"
            nsel.appendChild(oo)
        })
        var oo = document.createElement("option");
        oo.value = "";
        oo.textContent = "";
        nsel.appendChild(oo)
        nsel.isRootNote = false;
        nsel.isLastNote = false;
        nsel.value = vv;
        return nsel;
}

function getNewRootNoteOptionSelector(chordRoot){
        //console.log("chordroot = "+chordRoot);
        var nsel = document.createElement("select");
        nsel.classList.add("CHORD_INFOPANEL_ROOT_DROPDOWN")
        //pci.appendChild(nsel);
        for(var fiix=0; fiix < 12; fiix++){
            var oo = document.createElement("option");
            oo.value = fiix;
            oo.textContent = getNoteName(fiix)
            nsel.appendChild(oo)
        }
        var oo = document.createElement("option");
        oo.value = "";
        oo.textContent = "";
        nsel.appendChild(oo)
        nsel.isRootNote = false;
        nsel.isLastNote = false;
        nsel.value = chordRoot;
        return nsel;
}

function setChordInfoPanel_KNOWN(){
    var pci = document.getElementById("PIANO_CHORDINFO");
    pci.innerHTML = "";
    var rootSelect = getNewRootNoteOptionSelector(CURRENT_CHORDROOT_IIX);
    var chordRoot = CURRENT_CHORDROOT_IIX;
    var chordType = CURRENT_CHORDTYPE;
    var cts = getChordTypeString(chordType);
    var crs = getNoteName(chordRoot);
    
    var chordRelNotes = CURRENT_CHORDINTERVALS //CHORD_TYPE_DEF[chordType];
    pci.appendChild(document.createTextNode(crs + cts+" "));
    pci.appendChild(rootSelect);
    pci.appendChild(document.createTextNode(": "));
    chordRelNotes.map(function(crn){
        console.log("crn = "+crn);
        var nsel = getNewChordNoteOptionSelector(crn, chordRoot);
        pci.appendChild(nsel);
    })
    var nsel = getNewChordNoteOptionSelector("", chordRoot);
    pci.appendChild(nsel);
    nsel.isLastNote = true;
        
    pci.getElementsByClassName("CHORD_INFOPANEL_NOTE_DROPDOWN")[0].isRootNote = true;
    
    Array.prototype.map.call(pci.getElementsByClassName("CHORD_INFOPANEL_NOTE_DROPDOWN"),
                             x => x.onchange = updateChordFromInfoPanelNoteSelector);

    //CHORDNOTE_INTERVAL_LIST
    
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                          Setup Scale chords
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

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
          var inKey = isChordInKey(chordRootIIX,CHORD_TYPE_DEF[chordType],scaleIIX);
          if(inKey){
            var cb = document.createElement("button");
            cb.classList.add("CHORD_BUTTON");
            cb.textContent = chordRootID + getChordTypeString(chordType);
            cb.chordTitleString = chordRootID + getChordTypeString(chordType);
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
          cb.chordTitleString = chordRootID + getChordTypeString(chordType);
          panel.chordElems.push(cb);
          var inKey = isChordInKey(chordRootIIX,CHORD_TYPE_DEF[chordType],scaleIIX);
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

function addValuesToSelect(selector,valueList){
  for(var i=0; i < valueList.length; i++){
    var ov = document.createElement("option");
    ov.textContent = valueList[i][1];
    ov.value = valueList[i][0];
    selector.appendChild(ov);
  }
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                          Add instruments
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

var activeInstruments = []

function setInstrument(){
  var inst = INSTRUMENTS[ this.selector.value ].copyInstrument();
  console.log("Setting instrument :"+this.selector.value);
  //CURRENT_INSTRUMENT = inst;
  var fretboard = this.fretBoard;
  this.instrument = inst;
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
  //CURRENT_INSTRUMENT.stringIIX[sidx]
  this.stringBoardList = [];
  for(var i = 0; i < inst.stringIIX.length; i++){
    //console.log("adding String: "+inst.stringIIX[i]+" to instrument.");
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
      inst.stringIIX[this.stringIdx] = iix;
      calculateChords();
    }
    this.stringBoardList.push(sb);
    sbh.appendChild(sb);
    this.fretBoard.appendChild(sbh);
    var ss = document.createElement("div");
    ss.classList.add("stringLine");
    sb.appendChild(ss);
    for(var j=0; j < spacing.length; j++){
      //console.log(" j = "+j);
      var fb = document.createElement("div");
      var fn = document.createElement("button");
      var noteLabel = document.createElement("div");
      fb.classList.add("fret");
      fn.classList.add("fretNote");
      noteLabel.classList.add("chordNoteLabel");
      fn.stringBoard = sb;
      
      fb.style.height = spacing[j]+"px";
      sb.appendChild(fb);
      fb.appendChild(fn);
      sb.fretNotes.push(fn);
      //console.log(noteLabel)
      //console.log(fn)
      fn.noteIIX = inst.stringIIX[i] + j;
      fn.textContent = getNoteName( inst.stringIIX[i] + j );
      fn.appendChild(noteLabel);
    }
  }
  calculateChords();
}

function addInstrument( instrumentID , initialInstrument ){
    console.log("--------------- adding instrument: " +instrumentID);
    var ipanel = document.createElement("div")
    ipanel.id = "instrumentPanel_"+instrumentID
    ipanel.classList.add("instrumentPanel")
    var activeInstruments = [ipanel]

    var iselect = document.createElement("select");
    iselect.id = "INSTRUMENT_SELECT_"+instrumentID;
    iselect.classList.add("INSTRUMENT_SELECT");
    addValuesToSelect(iselect,INSTRUMENTS_IDLIST);
    iselect.value = initialInstrument;
    iselect.ipanel = ipanel;
    iselect.onchange = function(){
       console.log("iselect.onchange()");
       this.ipanel.setInstrument();
    }
    ipanel.selector = iselect;

    ipanel.fretBoard = document.createElement("div")
    ipanel.fretBoard.id = "fretBoard_"+instrumentID;
    ipanel.fretBoard.classList.add("fretBoard");
    ipanel.setInstrument = setInstrument

    ipanel.appendChild(iselect);
    ipanel.appendChild(ipanel.fretBoard);
    ipanel.setInstrument();
    activeInstruments.push(ipanel);
    //document.getElementById("maindivInner_CHORDPANEL").appendChild( ipanel )
    document.getElementById("maindiv").appendChild( ipanel )
    
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                         KEY SELECT PANEL
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


var KEY_SELECT_PANEL = document.getElementById("KEY_SELECT_PANEL");

var KEY_SELECT_BUTTONS = KEY_SELECT_PANEL.getElementsByClassName("KEY_BUTTON");
var KEY_SELECT_BUTTONS_FIIX = [1,3,6,8,10,0,2,4,5,7,9,11];
var KEY_SELECT_BUTTONS_HASVARIANT = [false,true,false,false,false,false,true,false,false,false,false,false]; 
var KEY_SELECT_BUTTONS_ISVARIANT = [false,false,false,false,false,false,false,false,false,false,false,false]; 
for(var i=0; i < KEY_SELECT_BUTTONS.length; i++){
  var fiix = KEY_SELECT_BUTTONS_FIIX[i]
  KEY_SELECT_BUTTONS[i].FIIX = fiix
  KEY_SELECT_BUTTONS[i].HASVARIANT = KEY_SELECT_BUTTONS_HASVARIANT[fiix]
  KEY_SELECT_BUTTONS[i].ISVARIANT = KEY_SELECT_BUTTONS_ISVARIANT[fiix]
  KEY_SELECT_BUTTONS[i].keyNames = KEYROOT_NAMES_WITHALTS[ fiix ]

}

//var CURRENT_SCALE = 0;
//var CURRENT_SCALE_SHARPTYPE = "sharp";
function KEY_SELECT_BUTTON_ONCLICK(){
  CURRENT_SCALE = this.FIIX;
  if(this.classList.contains("KEY_BUTTON_SELECTED")){
    console.log("doubleclick!");
    if(this.HASVARIANT){
      console.log("doubleclick HV!");
      this.ISVARIANT = ! this.ISVARIANT
      if(this.ISVARIANT){
        console.log("doubleclick HVS!");
        this.textContent = this.keyNames[1] + "/" + this.keyNames[0];
        CURRENT_SCALE_SHARPTYPE = "sharp"
        
      } else {
        console.log("doubleclick HVF!");
        this.textContent = this.keyNames[0] + "/" + this.keyNames[1];
        CURRENT_SCALE_SHARPTYPE = "flat"
      }
    }
  } else {
    for(var i=0; i < KEY_SELECT_BUTTONS.length; i++){
      KEY_SELECT_BUTTONS[i].classList.remove("KEY_BUTTON_SELECTED");
    }
    this.classList.add("KEY_BUTTON_SELECTED");
    if( this.HASVARIANT) {
      if(this.ISVARIANT){
        CURRENT_SCALE_SHARPTYPE = "sharp"
      } else {
        CURRENT_SCALE_SHARPTYPE = "flat"
      }
    } else if(KEYROOT_IIX_FLATS.includes(this.FIIX)) {
      CURRENT_SCALE_SHARPTYPE = "flat"
    } else {
      CURRENT_SCALE_SHARPTYPE = "sharp"
    }
  }
  setupScaleChords();
}
for(var i=0; i < KEY_SELECT_BUTTONS.length; i++){
  KEY_SELECT_BUTTONS[i].onclick = KEY_SELECT_BUTTON_ONCLICK

}




/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                         INITIALIZATION
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


console.log("Creating panels, etc...")

INSTRUMENTS_IDLIST = [
 ["MANDOLIN","Mandolin"],
 ["UKELELE","Ukelele"],
 ["GUITAR","Guitar"]
]

console.log("Setting scale chords...")

setupScaleChords()

console.log("Setting instrument...")

addInstrument("0","UKELELE");

//var iselect0 = document.createElement("select");
//iselect0.id = "INSTRUMENT_SELECT_0";
//iselect0.classList.add("INSTRUMENT_SELECT");
//addValuesToSelect(iselect0,INSTRUMENTS_IDLIST);
//ipanel0.selector = iselect0;
//
///ipanel0.fretBoard = document.createElement("div")
//ipanel0.fretBoard.id = "fretBoard_0";
//ipanel0.fretBoard.classList.add("fretBoard");
//ipanel0.setInstrument = setInstrument
//
//ipanel0.appendChild(iselect0);
//ipanel0.appendChild(ipanel0.fretBoard);
//
//ipanel0.setInstrument();


console.log("Instrument set!")

document.getElementById("SELECT_SCALEKEY").onchange = calculateChords
document.getElementById("SELECT_ROOT").onchange = calculateChords
document.getElementById("SELECT_CHORDTYPE").onchange = calculateChords
document.getElementById("SELECT_SCALEKEY").onchange = calculateChords
document.getElementById("SELECT_SCALEKEYTYPE").onchange = calculateChords
document.getElementById("SELECT_CHORDDEGREE").onchange = calculateChords

//document.getElementById("INSTRUMENT_SELECT").onchange = calculateChords

//Array.prototype.map.call(document.getElementsByClassName("INSTRUMENT_SELECT"),
//                          x => x.onchange = calculateChords );

document.getElementById("SELECT_SCALEKEY").onchange = setupScaleChords
document.getElementById("SELECT_SCALEKEYTYPE").onchange = setupScaleChords

//KEY_TYPE_INTERVALS KEY_TYPE_TITLES

console.log("Setting common chords:")

document.getElementsByClassName("CHORD_BUTTON")[0].onclick();
console.log("Setting other chords:")

setupOtherChords();

document.getElementById("ADD_INSTRUMENT_BUTTON").selector = document.getElementById("INSTRUMENT_SELECT_ADD")
document.getElementById("ADD_INSTRUMENT_BUTTON").onclick = function(){
  addInstrument( activeInstruments.length+"" , this.selector.value )
}

document.getElementById("ShowPiano").onchange = function(){
  if(this.checked){
    document.getElementById("PIANO_KEYBOARD_SUPER").style.display = "block";
  } else {
    document.getElementById("PIANO_KEYBOARD_SUPER").style.display = "none";
  }
}
document.getElementById("ShowStaff").onchange = function(){
  if(this.checked){
    document.getElementById("STAFF_HOLDER").style.display = "block";
  } else {
    document.getElementById("STAFF_HOLDER").style.display = "none";
  }
}
assignChordButtonEvents()
/*
KEYROOT_NAMES_WITHALTS = [
  "C",["Db","C#"],"D","Eb","E","F",["Gb","F#"],"G","Ab","A","Bb",["B","Cb"]
]
*/

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                         NOTE STAFF
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


function getNoteInfo(iix){
  var octave = Math.floor(iix / 12) + 4;
  var noteBaseName = NOTE_BASENAMES_SHARP[iix % 12];
  var noteBaseMod  = NOTE_BASEMOD_SHARP[iix % 12];
  if(CURRENT_SCALE_SHARPTYPE != "sharp"){
    noteBaseName = NOTE_BASENAMES_FLAT[iix % 12];
    noteBaseMod  = NOTE_BASEMOD_FLAT[iix % 12];
  }
  var noteNum = NOTE_NUMS[noteBaseName] + ( (octave-4) * 7)
  return {baseName: noteBaseName,baseMod: noteBaseMod,octave:octave, noteNum : noteNum};
}



function addNote( fiix ){
  var nn = getNoteInfo(fiix);
  //&#9839; sharp
  //&#9837; flat
  //&#9837; natural
  //if(nn.octave == 4){
    var lineNum = Math.floor((nn.noteNum + 1) / 2);
    var isUp    = (nn.noteNum + 1) % 2 == 1;
    console.log("Adding note: "+nn.noteNum + " / "+lineNum+" / "+isUp);
      var ee = document.createElement("div");
      ee.classList.add("STAFF_NOTE");

    if(isUp){
      if(lineNum < 1){
        document.getElementById("STAFF_FLOAT_M1").style.display = "block";
      }
      lineNum = lineNum + 1;
      ee.classList.add("DN");
      STAVES[lineNum].appendChild(ee);
      if(STAVES[lineNum].classList.contains("HIGHFLOAT")){
        var curr = STAVES[lineNum];
        while(curr && curr.classList.contains("HIGHFLOAT")){
          if(curr.classList.contains("STAFF_FLOAT")){
            curr.style.display = "block";
          }
          curr = curr.previousElementSibling;
        }
      }
      if(lineNum > 0 && STAVES[lineNum-1].getElementsByClassName("MID").length > 0){
        ee.classList.add("RIGHT")
      }
    } else {
      ee.classList.add("MID");
      
      STAVES[lineNum].appendChild(ee);
      if(STAVES[lineNum].classList.contains("HIGHFLOAT")){
        var curr = STAVES[lineNum].previousElementSibling.previousElementSibling;
        while(curr && curr.classList.contains("HIGHFLOAT")){
          if(curr.classList.contains("STAFF_FLOAT")){
            curr.style.display = "block";
          }
          curr = curr.previousElementSibling;
        }
      }

    }
    
    if( nn.baseMod == "#"){
      var mm = document.createElement("div");
      mm.classList.add("STAFF_NOTE_MODLABEL");
      mm.textContent = "\u266F";
      ee.appendChild(mm);
    } else if(nn.baseMod == "b"){
      var mm = document.createElement("div");
      mm.classList.add("STAFF_NOTE_MODLABEL");
      mm.textContent = "\u266D";
      ee.appendChild(mm);
    }
  //}
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                         Chord panelset controls
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//var hash = window.location.hash.substr(1);
//var result = JSON.parse( decodeURIComponent(hash) )

//var ttc = encodeURIComponent(JSON.stringify( {"five":5,"four":4,5:5,"arrayOfSpecials":["?","#","%"]} ));
//JSON.parse( decodeURIComponent(ttc) )

function getHashLen(){
    return window.location.hash.substr(1).length
}

function getHashParam(ff){
  var hash = window.location.hash.substr(1);
  if(! hash){
     return [[],{}] 
  } else {
      var resList = [];
      var result = hash.split('&').reduce(function (result, item) {
        var parts = item.split('=');
        result[parts[0]] = JSON.parse( decodeURIComponent(parts[1]) );
        resList.push(parts[0]);
        return result;
      }, {});
      if(ff){
          return result[ff];
      } else {
          return [resList,result];
      }
  }
}

function paramsToString(dlist,dobj, pairDelim = "=",delim="&"){
   return dlist.map(function(k){
          return k+pairDelim+dobj[k]
  }).join(delim);
}

function setHashParam(kv,vv){
  var out = getRevisedHashParam(kv,vv);
  window.location.hash = out;
}

function getRevisedHashParam(kv,vv){
  var starthp = getHashParam();
  var soFar = starthp[1];
  var soFarList = starthp[0];
    if(Array.isArray(kv) && (! vv)){
        kv.map( function(kkv){
            if(! soFarList.includes(kkv[0])){
                soFarList.push(kkv[0]);
            }
            soFar[kkv[0]] = encodeURIComponent( JSON.stringify( kkv[1]) );
        })
        
    } else if(Array.isArray(kv) && (vv)){
        //not implemented!
    } else {
        soFar[kv] = encodeURIComponent( JSON.stringify( kv) );
        if(! soFarList.includes(kv)){
                soFarList.push(kv);
        }
    }
  var newhash = paramsToString(soFarList,soFar);
  return newhash;
}
function clearHashParam(k){
    var starthp = getHashParam();
    var soFar = starthp[1];
    var soFarList = starthp[0];
    if( typeof k === 'undefined' ){
        window.location.hash = ""
    } else {
        if( Array.isArray(k) ){
            k.map(function(kk){
              if( soFarList.includes(kk)){
                soFarList.splice(soFarList.indexOf(kk),1);
                delete soFar[ kk ]
              }
            })
        } else {
              if( soFarList.includes(k)){
                soFarList.splice(soFarList.indexOf(k),1);
                delete soFar[ k ]
              }
        }
        var newhash = paramsToString(soFarList,soFar);
        window.location.hash = newhash;
   }
}
//encodeURIComponent( {"five":5,"four":4,5:5,"arrayOfSpecials":["?","#","%"]} )
//getRevisedHashParam("A","B")
//setHashParam([["A",{"five":5,"four":4,5:5,"arrayOfSpecials":["?","#","%"]}]])

/*

Things to store:
--> settings panel
--> current scale info
--> current chord info
--> current instrument settings
--> selected pianokeys / frets

Things to store in JSON:
--> saved chords
--> chord progressions
--> frettings and inversions
--> tabs

*/



/*

TODO:
 * Add octave menus for instruments
 * add octave controls / expand-reduce controls for piano
 * Make piano work like frets do now
 * Piano notes labelled like frets
 * Sync piano to frettings of instrument 1
 * Sync notes to frettings of instrument 1
     * if you modify piano what happens to frettings?
     * light up matching notes on frets?
     * unselectify?
 * add hover: hovering over piano keys shows that note on frets?
 
 * mini instrument fretboards! Scalable!
 
Big thing:
 * tooltips! Add tooltips everywhere!
 * tutorial!

*/


var TUTORIAL_CIRCLED_ELEMENT = false;
var TUTORIAL_CIRCLE_SHADOW   = false;

window.addEventListener('resize', evt => {
     if(TUTORIAL_CIRCLED_ELEMENT){
         var elemRect = TUTORIAL_CIRCLED_ELEMENT.getBoundingClientRect();
         TUTORIAL_CIRCLE_SHADOW.style["top"]     = (elemRect["top"]-5)+"px";
         TUTORIAL_CIRCLE_SHADOW.style["left"]    = (elemRect["left"]-5)+"px";
         TUTORIAL_CIRCLE_SHADOW.style["width"]   = (5+elemRect["right"] - elemRect["left"])+"px";
         TUTORIAL_CIRCLE_SHADOW.style["height"]  = (5+elemRect["bottom"] - elemRect["top"])+"px";
     }
})

function tutorial_circleElement(ee){
    var elemRect = ee.getBoundingClientRect()
    var nn = document.createElement("div");
    nn.classList.add("DIV_SHADOW_HOLE")

    nn.style["position"] = "absolute";
    nn.style["top"]     = (elemRect["top"]-5)+"px";
    nn.style["left"]    = (elemRect["left"]-5)+"px";
    nn.style["width"]   = (5+elemRect["right"] - elemRect["left"])+"px";
    nn.style["height"]  = (5+elemRect["bottom"] - elemRect["top"])+"px";
    if(TUTORIAL_CIRCLE_SHADOW){
        document.body.removeChild(TUTORIAL_CIRCLE_SHADOW);
    }
    document.body.appendChild(nn)
    TUTORIAL_CIRCLE_SHADOW = nn;
    TUTORIAL_CIRCLED_ELEMENT = ee;
}

function tutorial_endCircleElement(){
    if(TUTORIAL_CIRCLE_SHADOW){
        document.body.removeChild(TUTORIAL_CIRCLE_SHADOW);
    }
}


function createMiniFret(notes){
    
}
/*
<div class="MINIFRET_HOLDER">
<div class="MINIFRET_FRETBOARD">
<div class="MINIFRET_POSLABEL">2</div>
<div class="MINIFRET_OPEN"></div>
<div class="MINIFRET_STRINGLINE S0"></div>
<div class="MINIFRET_STRINGLINE S1"></div>
<div class="MINIFRET_STRINGLINE S2"></div>
<div class="MINIFRET_STRINGLINE S3"></div>
<div class="MINIFRET_FRET"></div>
<div class="MINIFRET_FRET"></div>
<div class="MINIFRET_FRET"></div>
<div class="MINIFRET_FRET"></div>
<div class="MINIFRET_NOTE"></div>

</div></div>
*/
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                         Chord panelset controls
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


var CHORD_PANELSET_EXPANDALL_BUTTON = document.createElement("button");
CHORD_PANELSET_EXPANDALL_BUTTON.textContent = "SHOW ALL";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

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

var CHORD_PANELSET_CURRVIS_CT  = 20;
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
CHORD_PANELSET_EXPANDALL_BUTTON.onclick = function(){
   CHORD_PANELSET_CURRVIS_IDX = 0;
   CHORD_PANELSET_CURRVIS_CT  = CHORD_PANELSET_PANELS.length;
    chordPanelSet_setVisiblePanels();

}

document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_EXPAND_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_REDUCE_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_UP_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_DN_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_EXPANDALL_BUTTON)

