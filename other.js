
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



