// This script initializes all of th cards by creating them, setting there visibility to hide,
// and placing them inside the all-cards div. 
// Inside eventHandle.js is the code where the visibility is modified on hover.
(function ($, window, document, undefined) {
    $(document).ready(function () {

        // Initialize bootstrap tooltip used in the Page selection Nav Card.
        $('[data-toggle="tooltip"]').tooltip({
            placement: 'bottom',
            trigger: "hover"
        });

        // Gets query params to set the initial floor to be what was clicked on exterior
        var params = window.location.search
        var pnum = window.location.pathname.split("/").length - 2

        var map_name = window.location.pathname.split("/")[pnum] // this will be either "brown_hall" or "edmund_center"
        const floor_num = params ? params.charAt(params.length -1) : "1"
        // Navigate to the selected floor
        $.imageMapProGoToFloor(map_name, "Floor " + floor_num);

        // Get the configuration json for the floor.
        $.getJSON(`../${map_name}/config_data/floor_data.json`, function (json) {
            const d = Object.entries(json)
            // Iterate through each card and initialize it
            $.each(d, function (obj, i) {
                var element = i[1]
                var id = i[0]
                const htmlCode = `
                        <div class="card-left" id="card-${id}">
                            <div>
                                <img src="${element.img_path}" alt="alt here" width="100%">
                            </div> 
                            <div class="card-body">
                                <h3 class="card-title">${element.name}</h3>
                                <p class="card-price">${element.price}</p>
                                <p class="card-text mt-2 mb-2">${element.description}</p>
                            </div>
                        </div>              
                    `;
                $(".all-cards").append(htmlCode)
            })
            // Set the cards visibility to none.
            $.each(d, function (obj, i) {
                var id = i[0]
                $(`#card-${id}`).hide()
            })
        })

    });
})(jQuery, window, document);