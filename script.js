/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
function saveEdits() {
    //get the editable elements.
    var editElems = {
        'edit1': document.getElementById('edit1').innerHTML,
        'edit2': document.getElementById('edit2').innerHTML,
        'edit3': document.getElementById('edit3').innerHTML,
'edit4': document.getElementById('edit4').innerHTML,
'edit5': document.getElementById('edit5').innerHTML,
'edit6': document.getElementById('edit6').innerHTML,
'edit7': document.getElementById('edit7').innerHTML,
'edit8': document.getElementById('edit8').innerHTML,
'edit9': document.getElementById('edit9').innerHTML,
'edit10': document.getElementById('edit10').innerHTML,
'edit11': document.getElementById('edit11').innerHTML,
'edit12': document.getElementById('edit12').innerHTML,
'edit13': document.getElementById('edit13').innerHTML,
'edit14': document.getElementById('edit14').innerHTML,
'edit15': document.getElementById('edit15').innerHTML,
'edit16': document.getElementById('edit16').innerHTML,
'edit17': document.getElementById('edit17').innerHTML,
'edit18': document.getElementById('edit18').innerHTML,
'edit19': document.getElementById('edit19').innerHTML,
'edit20': document.getElementById('edit20').innerHTML,
'edit21': document.getElementById('edit21').innerHTML,
'edit22': document.getElementById('edit22').innerHTML,
'edit23': document.getElementById('edit23').innerHTML,
'edit24': document.getElementById('edit24').innerHTML,
'edit25': document.getElementById('edit25').innerHTML,
'edit26': document.getElementById('edit26').innerHTML,
'edit27': document.getElementById('edit27').innerHTML,
'edit28': document.getElementById('edit28').innerHTML,
'edit29': document.getElementById('edit29').innerHTML,
'edit30': document.getElementById('edit30').innerHTML,
'edit31': document.getElementById('edit31').innerHTML,
'edit32': document.getElementById('edit32').innerHTML,
'edit33': document.getElementById('edit33').innerHTML,
'edit34': document.getElementById('edit34').innerHTML,
'edit35': document.getElementById('edit35').innerHTML,
'edit36': document.getElementById('edit36').innerHTML,
'edit37': document.getElementById('edit37').innerHTML,
'edit38': document.getElementById('edit38').innerHTML,
'edit39': document.getElementById('edit39').innerHTML,
'edit40': document.getElementById('edit40').innerHTML,
'edit41': document.getElementById('edit41').innerHTML,
'edit42': document.getElementById('edit42').innerHTML,
'edit43': document.getElementById('edit43').innerHTML,
'edit44': document.getElementById('edit44').innerHTML,
'edit45': document.getElementById('edit45').innerHTML,
'edit46': document.getElementById('edit46').innerHTML,
'edit47': document.getElementById('edit47').innerHTML,
'edit48': document.getElementById('edit48').innerHTML,
'edit49': document.getElementById('edit49').innerHTML,
'edit50': document.getElementById('edit50').innerHTML,
'edit51': document.getElementById('edit51').innerHTML,
'edit52': document.getElementById('edit52').innerHTML
    };

    //save the content to local storage. Stringify object as localstorage can only support string values
    localStorage.setItem('userEdits', JSON.stringify(editElems));

    //write a confirmation to the user
    document.getElementById("update").innerHTML="Edits saved!";
}


function checkEdits(){
    //find out if the user has previously saved edits
    var userEdits = localStorage.getItem('userEdits');
    if(userEdits){
        userEdits = JSON.parse(userEdits);
        for(var elementId in userEdits){
          document.getElementById(elementId).innerHTML = userEdits[elementId];
        }
    }
}