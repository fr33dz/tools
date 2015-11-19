function VerifierTel(){
    // var regex = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;
    var regexp1 = /^0(5|6|7)[0-9]{8}$/;
    var regexp2 = /^0[0-9]{4}$/;

    var tel = document.forms["FormConfirm"]["phone"].value;
    console.log("tel : "+ tel)
    console.log(" len (tel) : "+ tel.length)
    if(!regexp1.test(tel) && !regexp2.test(tel))
    {
      alert("un numero de telephone doit avoir 7 chiffres pour le fixe et 10 chiffres pour le mobile");
      document.forms["FormConfirm"]["phone"].style.value ="";
      document.forms["FormConfirm"]["phone"].style.border="red";
      return false;
    }
    else
    {
      return true;
    }
}
