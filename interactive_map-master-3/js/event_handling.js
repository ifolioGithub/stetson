// This script handles all of the event handling in the interactive map.
// Uses the imageMapPro plugin, can find the documentation here https://imagemappro.com/documentation/
// All event handling includes: showing/hiding cards on hover and exit hover, opening modals on click,
// and the Navigation to other floors using buttons on Nav Card.
(function ($, window, document, undefined) {
    $(document).ready(function () {

        // On shape highlight (mouseover shape) show the card corresponding to this shape
        $.imageMapProEventHighlightedShape = function (imageMapName, shapeName) {
            var wd = $(window).width()
            if (wd >= 1024) {
                console.log(shapeName)
                $(`#card-${shapeName}`).show();
            }
        }

        // On shape unhighlight (mouseout shape) hide the card.
        $.imageMapProEventUnhighlightedShape = function (imageMapName, shapeName) {
            $(`#card-${shapeName}`).hide();
        }

        // On shape click, dynamically set the modal content to correspond to the shape. 
        $.imageMapProEventClickedShape = function (imageMapName, shapeTitle) {
            $.getJSON(`../${imageMapName}/config_data/floor_data.json`, function (json) {
                const element = json[shapeTitle]
                const html2 = `
                    <div class="card-popup" id="popup-${shapeTitle}">
                                <div>
                                    <img src="${element.img_path}" alt="alt here" width="100%">
                                </div> 
                                <div class="card-body">
                                    <h3 class="card-title">${element.name}</h3>
                                    <p class="card-price">${element.price}</p>
                                    <p class="card-text mt-3">${element.description}</p>
                                </div>
                                <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
    
                            </div>
                    `
                $('.modal-content').html(html2);
            })
            $('#myModal').modal("show")
        }

        // Nav card buttons change the floor.
        $(".button-list").click(function (e) {
            let arr = e.target.id.split("-")
            let str = arr.slice(1).join(" ")
            // If exterior is clicked, route the page to the exterior route.
            if (str === "Exterior") {
                window.open(`index.html`, "_self")
            } else {
                var map_name = window.location.pathname.split("/")[1]
                $.imageMapProGoToFloor(map_name, str);
            }
        })

    });
})(jQuery, window, document);