

function instrument(
   instrumentName,
   stringIIX,
   fretSpacing,
   fretDots,
   fretDoubleDots,
   abbrivName
  ){
    this.instrumentName = instrumentName;
    this.stringIIX = stringIIX;
    this.fretSpacing = fretSpacing;
    this.fretDots = fretDots;
    this.fretDoubleDots = fretDoubleDots;
    this.abbrivName = abbrivName;
    
    this.copyInstrument = function(){
       return new instrument(this.instrumentName,
                         this.stringIIX.slice(),
                         this.fretSpacing.slice(),
                         this.fretDots.slice(),
                         this.fretDoubleDots.slice(),
                         this.abbrivName)
    }
}



var STAFF_HOLDER = document.getElementById("STAFF_HOLDER");
var STAVES = STAFF_HOLDER.getElementsByClassName("STAFF_LINE")

var INSTRUMENT_COUNTER = 0;


















