var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

function setDetails(imgUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imgUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}



function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}



function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');


  console.log(title);
  return title;
}



function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}



function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}



function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function (event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

var counter =0;


function go_back()
{
  if(counter == 0)
    counter=0;
    else {
      counter--;
    }

    if (counter ==0) {
      setDetails("img/otter1.jpg", "Stayin' Alive");
      showDetails();
    }
     if (counter =1) {
      setDetails("img/otter2.jpg", "How Deep is Your Love");
      showDetails();
    }
      if (counter ==2) {
        setDetails("img/otter3.jpg", "You should be Dancing");
        showDetails();
      }
       if (counter ==3) {
        setDetails("img/otter4.jpg", "Saturday Night Fever");
        showDetails();
      }
     if (counter ==4) {
    setDetails("img/otter5.jpg", "To Love Somebody");
    showDetails();
    }
     if (counter ==5) {
    setDetails("img/flexfroggy1.jpg", "Never Gonna Give You Up");
    showDetails();
    }
    if (counter ==6) {
    setDetails("img/gridgarden1.jpg", "Never Gonna Let You Down");
    showDetails();
    }

}

function go_for()
{
  if(counter == 6)
  counter=6;
  else {
    counter++;
  }
  if (counter ==0) {
    setDetails("img/otter1.jpg", "Stayin' Alive");
    showDetails();
  }
  if (counter =1) {
    setDetails("img/otter2.jpg", "How Deep is Your Love");
    showDetails();
  }
    if (counter ==2) {
      setDetails("img/otter3.jpg", "You should be Dancing");
      showDetails();
    }
    if (counter ==3) {
      setDetails("img/otter4.jpg", "Saturday Night Fever");
      showDetails();
    }
if (counter ==4) {
  setDetails("img/otter5.jpg", "To Love Somebody");
  showDetails();
}
if (counter ==5) {
  setDetails("img/flexfroggy1.jpg", "Never Gonna Give You Up");
  showDetails();
}
if (counter ==6) {
  setDetails("img/gridgarden1.jpg", "Never Gonna Let You Down");
  showDetails();
}
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
   addKeyPressHandler();
}

initializeEvents();
