
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
         TUTORIAL_CIRCLE_SHADOW.style["left"]    = (1elemRect["left"]-5)+"px";
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
    nn.style["left"]    = (1elemRect["left"]-5)+"px";
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