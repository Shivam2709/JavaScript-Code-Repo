const btns = document.querySelectorAll(".button");
        const body = document.querySelector('body');

        btns.forEach(function (btn) {
            
            btn.addEventListener('click', function(e) {

                switch(e.target.id) {
                    case "grey":
                        body.style.backgroundColor = e.target.id;
                        break;
                    case "purple":
                        body.style.backgroundColor = e.target.id;
                        break;
                    case "aquamarine":
                        body.style.backgroundColor = e.target.id;
                        break;
                    case "Pink":
                        body.style.backgroundColor = e.target.id;
                        break;

                    default:
                        console.log("Please Click any box");
                        break;
                }
            })
        })