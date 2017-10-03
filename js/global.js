$(document).ready(function() {
  $(':input[placeholder]').each(function() {

    var $this = $(this)
    var placeholder = $this.attr('placeholder')
    var is_empty_or_placeholder = function() {
      var current_val = $this.val()
      return current_val == '' || current_val == placeholder
    }

    $this.addClass('placeholder').val(placeholder).bind({

      focus: function() {
        if(is_empty_or_placeholder()) $this.removeClass('placeholder').val('')
      },

      blur: function() {
        if(is_empty_or_placeholder()) $this.addClass('placeholder').val(placeholder)
      }

    })

  })
})


$(function() {
  var signup_form = $('#mailing_list_signup')

  $('.join_mailing_list, #mailing_list_signup .cancel').click(function(event) {
    event.preventDefault()

    if(signup_form.is(':hidden')) {
      var original_height = signup_form.height()

      signup_form
        .stop(true)
        .css({height: 0, display: 'block'})
        .animate({height: original_height})
      
      $('html, body')
        .stop(true)
        .animate({
          scrollTop: Math.max($(document).height() - $(window).height() + original_height, 0)
        })
    }

    else {
      signup_form
        .stop(true)
        .animate({height: 0}, function() {signup_form.hide().css('height', 'auto')})
    }
  })
})

$(function() {
  
  var is_mobile_safari = !!navigator.userAgent.match(/AppleWebKit.*?Mobile/)
  var modal
  var video


  
  var exit_modal = function() {
    modal.stop().fadeOut(200, function() {
      modal.remove()
    })
  }
  

})

$(function() {

  var bod = $('body')

  var is_safari = $.browser.safari && !/chrome/.test(navigator.userAgent.toLowerCase())
  var is_ie6 = $.browser.msie && $.browser.version < 7
  var supports_canvas_element = !!$('<canvas />').attr('getContext')

  var resize_timer = null


  var draw_with_canvas = function (img, transition_mode, dest) {
    var window_width = $(window).width()
    var window_height = $(window).height()

    var starting_offset = '50%'
    if(transition_mode == 'slide_left') starting_offset = '150%'
    else if(transition_mode == 'slide_right') starting_offset = '-50%'

    var canvas = $('<canvas />')
      .addClass('background')
      .attr({width: window_width, height: window_height})
      .insertBefore(nav)
      .css({
        marginTop: -.5 * window_height,
        marginLeft: -.5 * window_width,
        opacity: (transition_mode == 'fade' ? 0 : 1),
        left: starting_offset
      })
      .bind('webkitTransitionEnd', function(e) {
        canvas.css({
          left: '50%',
          webkitTransitionDuration: '0s',
          webkitTransform: 'none'
        })
        cull_old_slides(e.target)
      })

      canvas[0].getContext('2d').drawImage(img, 0, 0, img.width, img.height, dest.offset.x, dest.offset.y, dest.dim.width, dest.dim.height)

      if(transition_mode == 'fade') 
        canvas.animate({opacity: 1}, 400, function() {cull_old_slides(this)})
      else {
        if(is_safari){
          canvas.css('-webkit-transform')
          canvas.css('-webkit-transform', 'translate3d(' + (transition_mode == 'slide_left' ? -1 : 1) * window_width + 'px, 0, 0)')
        }
        else{
          canvas.animate({left: '50%'}, 400, function() {cull_old_slides(this)})
        }
      }
  }
  
  var draw_with_img = function(img, transition_mode, dest) {
    var window_width = $(window).width()
    var window_height = $(window).height()

    var starting_offset = '50%'
    if(transition_mode == 'slide_left') starting_offset = '150%'
    else if(transition_mode == 'slide_right') starting_offset = '-50%'

    $(img)
      .addClass('background')
      .css({
        marginTop: -.5 * window_height,
        marginLeft: -.5 * window_width,
        width: dest.dim.width,
        height: dest.dim.height,
        opacity: (transition_mode == 'fade' ? 0 : 1),
        left: starting_offset
      })
      .insertBefore(nav)
      .stop()
      .clearQueue()
      .animate({opacity: 1, left: '50%'}, 400, function() {cull_old_slides(img)})
  }
  
  var cull_old_slides = function(newest_slide) {
    newest_slide = $(newest_slide)
    var old_slides = newest_slide.prevAll('.background').stop(true)
    old_slides.remove()
  }

  var scaling_maths = function(options) {
    var ratioX = options.dest_width / options.src_width
    var ratioY = options.dest_height / options.src_height
        
    if(options.method == 'fit')
      var scale = ratioX < ratioY ? ratioX: ratioY
    else if(options.method == 'fill')
      var scale = ratioX > ratioY ? ratioX: ratioY

    var new_width = options.src_width * scale
    var new_height = options.src_height * scale

    var offset_x = (options.dest_width - new_width) / 2
    var offset_y = (options.dest_height - new_height) / 2
   
    if(options.hCropAlign == 'left') offset_x = 0
    else if(options.hCropAlign == 'right') offset_x = options.dest_width - new_width

    if(options.vCropAlign == 'top') offset_y = 0
    else if(options.vCropAlign == 'bottom') offset_y = options.dest_height - new_height

    return {
      dim: {
        width: parseInt(new_width, 10),
        height: parseInt(new_height, 10)
      },
      offset: {
        x: parseInt(offset_x, 10),
        y: parseInt(offset_y, 10)
      },
      draw_mode: options.method
    }
  }



})

$(function() {

  var searching = false
  var modal
  var map
  var loc
  var close_link

  var find_theaters = function() {
    if(searching) return
    searching = true
    $('#search_form input').attr('disabled', true).addClass('disabled')

    new google.maps.Geocoder().geocode(
      {address: $('#address').val()},
      function(results, status) {
        searching = false
        $('#search_form input').attr('disabled', false).removeClass('disabled')

        if(status == google.maps.GeocoderStatus.OK) {

          loc = results[0].geometry.location
          $.ajax({
            url: 'distance.php',
            data: {lat: loc.lat(), lng: loc.lng()},
            success: function(data) {show_map(data)}
          })

        }

        else alert('We\'re having some trouble finding your address. Try being more (or less) specific.')
      }
    )

  }

  var show_map = function(theaters) {
    theaters = $(theaters)
    modal = $('<div id="modal" />').addClass('map').appendTo('body').click(exit_modal)
    map = $('<div id="map" />').appendTo(modal).click(function(e) {e.stopPropagation()})
    close_link = $('<div class="contiene-linkclose" ><a class="close_link" /></div>').click(exit_modal).text('Exit the map').insertAfter(map)
    
    modal.stop().fadeIn(200, function() {

    var theater_map = new google.maps.Map($('#map')[0], {
        zoom: 3,
        center: loc,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      })

      var marker = new google.maps.Marker({
        position: loc,
        map: theater_map,
        title: 'You!'
      })

      var bounds = new google.maps.LatLngBounds()

      var image = new google.maps.MarkerImage('http://moleculestothemax.com/images/map/flag.png', new google.maps.Size(20, 32), new google.maps.Point(0,0), new google.maps.Point(0, 32))
      var shadow = new google.maps.MarkerImage('http://moleculestothemax.com/images/map/shadow.png', new google.maps.Size(37, 32), new google.maps.Point(0,0), new google.maps.Point(0, 32))
      var shape = {coord: [1, 1, 1, 20, 18, 20, 18 , 1], type: 'poly'}

      theaters.each(function() {
        var theater_loc = new google.maps.LatLng(this.lat, this.lng)
        bounds.extend(loc)
        bounds.extend(theater_loc)
        
        var infowindow = new google.maps.InfoWindow({
          maxWidth: 280,
          content:  '<h1>' + this.name + '</h1>' +
                    '<p>Roughly ' + parseInt(Math.ceil(this.dist*10))/10 + ' miles away.</p>' +
                    '<form action="http://maps.google.com/maps" method="get"" target="_blank">' +
                      '<input value="Get Directions" type="submit" />' +
                      '<input type="hidden" name="saddr" value="' + loc.lat() + ',' + loc.lng() +'" />' +
                      '<input type="hidden" name="daddr" value="' + this.address + '" />' +
                    '</form>'
        })
        
        var marker = new google.maps.Marker({
          position: theater_loc,
          map: theater_map,
          title: this.name,
          shadow: shadow,
          icon: image,
          shape: shape
        })
        
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(theater_map, marker);
        })
      })
      
      theater_map.fitBounds(bounds)
    })
  }

  var exit_modal = function() {
    modal.stop().fadeOut(200, function() {
      modal.remove()
    })
  }

  $('#search_form').submit(function(event) {
    event.preventDefault()
    find_theaters()
  })

})