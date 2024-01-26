
var row = 0;
var stitch = 0;


function setRow() {
    row++;
    insertRow();
    
    return row;
}

function setStitch() {
    stitch++;
    
    
    insertStitch();
    
    return stitch;
}


function getRow() {
    return row;
}

function getStitch() {
    return stitch;
}




function insertRow() {
    document.getElementById("rownum").innerHTML = `row number is ${getRow()}`;

}

function insertStitch() {
    document.getElementById("stitchNum").innerHTML = `stitch number is ${getStitch()}`;


}