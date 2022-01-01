function username()
{
    pn1 = document.getElementById("player1").value;
    pn2 = document.getElementById("player2").value;

    localStorage.setItem("pn1", pn1);
    localStorage.setItem("pn2", pn2);

    window.location = "Math.html";
}

