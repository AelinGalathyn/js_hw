class Szemely{
    vezeteknev;
    keresztnev;
    hobby;
    eletkor;

    constructor(vezeteknev, keresztnev, eletkor, hobby){
        this.vezeteknev=vezeteknev;
        this.keresztnev=keresztnev;
        this.eletkor=eletkor;
        this.hobby=hobby;
    }
}

function teljesnev(keresztnev, vezeteknev){
    return `${vezeteknev} ${keresztnev}`;
}

function hozzaAd(){
    const input_vnev = document.getElementById('vnev').value;
    const input_knev = document.getElementById('knev').value;
    const input_kor = document.getElementById('kkor').value;
    const input_hobby = document.getElementById('khobby').value;
    
    const kisskati= new Szemely(input_vnev, input_knev, input_kor, input_hobby);
    
    document.getElementById('tnev').innerHTML="Teljes neve: " + teljesnev(kisskati.keresztnev, kisskati.vezeteknev);
    document.getElementById('kor').innerHTML="Életkora: " + kisskati.eletkor;
    document.getElementById('hobby').innerHTML="Kedvenc elfoglaltsága: "+kisskati.hobby;
}