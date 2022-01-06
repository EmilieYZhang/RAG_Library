
        window.onscroll = function () {
            myFunction()
        };
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }

        // When the user clicks myBtn, open modal
        function myBtnClick(i) {
            var modal = document.getElementById("myModal" + i);
            modal.style.display = "block";
        }

        // When the user clicks span, close modal
        function spanClick(i) {
            var modal = document.getElementById("myModal" + i);
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {



            for (var i = 0; i < 10; i++) {
                var modal = document.getElementById("myModal" + i);
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }

