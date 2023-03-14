 /* pikk kommentaar */ 
        //lühike kommnetaar 
        /*
        let first = document.getElementById('first');
        console.log(first);
        console.error('Siin on mingi error');
        first.innerHTML = "<p>Mingi teine tekst</p>";

        first = document.getElementById('second');
        console.log(first); */

        document.getElementById('first').innerHTML = "asdas";

        let suvaline = document.getElementById('second');

        suvaline.style.display = "none";
        suvaline.style.display = "flex";
        suvaline.style.backgroundColor = "yellow";
        suvaline.style.fontSize = "4em";

        let array = ["banaan", "õun", "pirn", "ploom"];

        for(let i = 0; i<array.length; i++){
            console.log(i);
            const puuvili = document.createElement('P');
            puuvili.textContent = array[i];
            document.getElementById('third').appendChild(puuvili);
        }


    


        let number = 6;
        console.log(typeof number);
        let textnumber = "7";
        console.log(typeof textnumber);
        console.log(number+textnumber);

        
        let object = {liik:"hobune", color:"punane"};

        console.log(typeof array);
        console.log(typeof object);