;(function ($, window, document, undefined) {
    $(document).ready(function() {
        $('#image-map-pro-container').imageMapPro({
            "id": 2874,
            "editor": {
                "tool": "rect",
                "shapeCounter": {
                    "spots": 1,
                    "rects": 4
                }
            },
            "general": {
                "name": "edmunds_center",
                "shortcode": "demo"
            },
            "layers": {
                "enable_layers": 1,
                "layers_list": [{
                    "id": 0,
                    "title": "Floor 2",
                    "image_url": "../assets/images/Edmunds_Center/floorplan/StetsonU_EdmundsCenter_shadows_level 2.png",
                    "image_width": 4565,
                    "image_height": 2063
                }, {
                    "id": 1,
                    "title": "Floor 1",
                    "image_url": "../assets/images/Edmunds_Center/floorplan/StetsonU_EdmundsCenter_shadows_level 1.png",
                    "image_width": 4507,
                    "image_height": 2166
                }]
            },
            "spots": [{
                "id": "rect-8008",
                "title": "vip_room",
                "type": "rect",
                "x": 44.909,
                "y": 31.636,
                "width": 22.176,
                "height": 33.948,
                "x_image_background": 44.909,
                "y_image_background": 31.636,
                "width_image_background": 22.176,
                "height_image_background": 33.948,
                "default_style": {
                    "border_radius": 10
                },
                "mouseover_style": {
                    "border_radius": 10
                },
                "tooltip": {
                    "enable_tooltip": 0
                },
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-403761",
                            "settings": {
                                "elements": [{
                                    "settings": {
                                        "name": "Heading",
                                        "iconClass": "fa fa-header"
                                    },
                                    "options": {
                                        "heading": {
                                            "text": "Rect 0"
                                        }
                                    }
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "rect-9352",
                "title": "lounge",
                "type": "rect",
                "x": 42.259,
                "y": 37.666,
                "width": 26.778,
                "height": 31.923,
                "x_image_background": 42.259,
                "y_image_background": 37.666,
                "width_image_background": 26.778,
                "height_image_background": 31.923,
                "layerID": "1",
                "default_style": {
                    "border_radius": 10
                },
                "mouseover_style": {
                    "border_radius": 10
                },
                "tooltip": {
                    "enable_tooltip": 0
                },
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-403761",
                            "settings": {
                                "elements": [{
                                    "settings": {
                                        "name": "Heading",
                                        "iconClass": "fa fa-header"
                                    },
                                    "options": {
                                        "heading": {
                                            "text": "Rect 2"
                                        }
                                    }
                                }]
                            }
                        }]
                    }
                }
            }]
        });
    });
})(jQuery, window, document);