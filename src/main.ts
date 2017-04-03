import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as jQuery from 'jquery';
import 'bootstrap-material-design/dist/js/material';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

//jQuery.material.init();

jQuery(document).ready(function ($) {

  var bg_pos_init_x = $('.home .header-site').css('background-position-x');
  var offsetTop;
  $('.slogan').addClass('anim');
  var timeout = new Array();
  var bubble_tab = new Array();
  var bubble_interval = new Array();
  // menu
  $('.navbar-toggle').on('click', function(e){console.log( $(this).data('target'));
    var id_menu = $(this).data('target');
    $(this).toggleClass('open');
    $(id_menu).toggleClass('open');
  });
  //
  $(window).on('scroll', function () {
    // parallax
    if ($('.bg-parallax').length > 0) {
      var position = get_position($('.bg-parallax'), 1);
      $('.bg-parallax').css({
        'background-position': 'center ' + position
      });
    }
    // slogan animate
    if ($('.slogan').length > 0) {
      var position = get_position($('.header-site'), 1.5);
      $('.slogan').css({
        'transform': 'translateY(' + position + ')'
      });
    }

    // Block anim
    $('.block-anim, .dash').each(function (index_anim) {
      if ($(this).hasClass('pop-item') || $(this).hasClass('fade-item') || $(this).find('.pop-item, .fade-item')) {
        timeout[index_anim] = new Array();
      }
      if (element_visible_value($(this)) > 0.5) {
        $(this).addClass('anim');
        var timer = $(this).hasClass('pop-item') ? 150 : $(this).hasClass('fade-item') ? 300 : 300;

        if ($(this).hasClass('pop-item') || $(this).hasClass('fade-item')) {
          $(this).children().each(function (index) {
            var item = $(this);
            if (!$(this).hasClass('anim')) {
              timeout[index_anim][index] = setTimeout(function () {
                item.addClass('anim');
              }, (index) * timer);
            }
          });
        }

        if ($(this).find('.pop-item, .fade-item').length > 0) {
          $(this).find('.pop-item, .fade-item').children().each(function (index2) {
            var item = $(this);
            if (!$(this).hasClass('anim')) {
              timeout[index_anim][index2] = setTimeout(function () {
                item.addClass('anim');
              }, (index2) * timer);
            }
          });
        }
      }
      else if (element_visible_value($(this)) < 0.1) {
        $(this).removeClass('anim');
        if (timeout[index_anim] !== undefined) {
          for (var i = 0; i < timeout[index_anim].length; i++) {
            clearTimeout(timeout[index_anim][i]);
          }
        }
        $(this).find('.pop-item, .fade-item').children().removeClass('anim');
        if ($(this).hasClass('pop-item') || $(this).hasClass('fade-item')) {
          $(this).children().removeClass('anim');
        }
      }

    });

    $('.pop-bubble').each(function (index_anim) {
      if (element_visible_value($(this)) > 0.5) {
        bubble_tab[index_anim] = new Array();
        anim_bubble($(this), index_anim);
        if (bubble_interval[index_anim] === undefined)
          bubble_interval[index_anim] = anim_bubble_interval($(this), index_anim);
      }
      else {
        //anim_bubble_clear(bubble_tab, index_anim);
      }
    });
  });
  function anim_bubble_clear(bubble_tab, index_anim) {
    if (bubble_interval[index_anim] !== undefined) {
      for (var i = 0; i < bubble_interval[index_anim].length; i++) {
        clearInterval(bubble_interval[i]);
      }
    }
  }
  function anim_bubble_interval(element, index_anim) {
    var timer = 1000;
    var time2 = 500;
    return setInterval(function () {
      element.children().removeClass('anim');
      element.children().each(function (index) {
        if (index == 0) time2 = 300;
        else time2 = 500;
        var item = $(this);
        clearTimeout(bubble_tab[index_anim][index]);
        if (!$(this).hasClass('anim')) {
          bubble_tab[index_anim][index] = setTimeout(function () {
            item.addClass('anim');
          }, (index + 1) * time2);
        }
      });
    }, timer * (element.children().length));
  }
  function anim_bubble(element, index_anim) {
    var timer = 500;
    element.children().each(function (index) {
      var item = $(this);
      if (!$(this).hasClass('anim')) {
        bubble_tab[index_anim][index] = setTimeout(function () {
          item.addClass('anim');
        }, (index) * timer);
      }
    });
  }

  function element_visible_value(element) {
    var percentage = ($(window).scrollTop() + $(window).height() - element.offset().top) / element.height();
    return percentage;
  }

  function get_position(element, vitesse) {
    if (!vitesse) vitesse = 1;
    offsetTop = element.offset().top;
    var position = -(((($(window).scrollTop()) - offsetTop) * 100 / element.height()));
    position = position * vitesse;

    return position + '%';
  }


});
