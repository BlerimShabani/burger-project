var messageCounter = document.getElementsByTagName('p').length;
document.getElementById('nmr').textContent = messageCounter;

for (var i= 0; i<document.getElementsByClassName("recycle").length; i++) {

    document.getElementsByClassName("recycle")[i].addEventListener("click",
    function() {
        this.parentNode.remove();
        var messageCounter = document.getElementsByTagName('p').length ;
        document.getElementById('nmr').textContent= messageCounter;

    })
}





