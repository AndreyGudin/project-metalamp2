"use strict";

/* global jQuery */
// plugin styles

/* eslint-disable func-names */
(function ($) {
  var defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'item',
    textPlural: 'items',
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-content',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter'
    },
    items: {},
    onChange: function onChange() {},
    beforeDecrement: function beforeDecrement() {
      return true;
    },
    beforeIncrement: function beforeIncrement() {
      return true;
    },
    setSelectionText: function setSelectionText(itemCount, totalItems) {
      var usePlural = totalItems !== 1 && this.textPlural.length > 0;
      var text = usePlural ? this.textPlural : this.selectionText;
      return "".concat(totalItems, " ").concat(text);
    }
  };

  $.fn.iqDropdown = function (options) {
    this.each(function () {
      var $this = $(this);
      var $selection = $this.find('p.iqdropdown-selection').last();
      var $menu = $this.find('div.iqdropdown-menu');
      var $items = $menu.find('div.iqdropdown-menu-option'); //************************ */

      var $btnapply = $("<button class=\"button-apply\">\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C</button>"); // Кнопка Подтвердить

      var $btnclear = $("<button class=\"button-clear\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>"); // Кнопка Очистить
      //************************** */

      var dataAttrOptions = {
        selectionText: $selection.data('selection-text'),
        textPlural: $selection.data('text-plural')
      };
      var settings = $.extend(true, {}, defaults, dataAttrOptions, options);
      var itemCount = {};
      var totalItems = 0;

      function updateDisplay() {
        $selection.html(settings.setSelectionText(itemCount, totalItems));
      }

      function setItemSettings(id, $item) {
        var minCount = Number($item.data('mincount'));
        var maxCount = Number($item.data('maxcount'));
        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount
        };
      }

      function addControls(id, $item) {
        var $controls = $('<div />').addClass(settings.controls.controlsCls);
        var $decrementButton = $("\n          <button class=\"button-decrement\">\n            <i class=\"icon-decrement\"></i>\n          </button>\n        ");
        var $incrementButton = $("\n          <button class=\"button-increment\">\n            <i class=\"icon-decrement icon-increment\"></i>\n          </button>\n        ");
        var $counter = $("<span>".concat(itemCount[id], "</span>")).addClass(settings.controls.counterCls);
        $item.children('div').addClass(settings.controls.displayCls);
        $controls.append($decrementButton, $counter, $incrementButton);

        if (settings.controls.position === 'right') {
          $item.append($controls);
        } else {
          $item.prepend($controls);
        }

        $decrementButton.click(function (event) {
          var items = settings.items,
              minItems = settings.minItems,
              beforeDecrement = settings.beforeDecrement,
              onChange = settings.onChange;
          var allowClick = beforeDecrement(id, itemCount);

          if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
            itemCount[id] -= 1;
            totalItems -= 1;
            $counter.html(itemCount[id]);
            if (itemCount[id] == 0) $decrementButton.css({
              opacity: 0.10
            });
            if (totalItems == 0) $btnclear.css({
              visibility: 'hidden'
            });
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
          }

          event.preventDefault();
        });
        $incrementButton.click(function (event) {
          var items = settings.items,
              maxItems = settings.maxItems,
              beforeIncrement = settings.beforeIncrement,
              onChange = settings.onChange;
          var allowClick = beforeIncrement(id, itemCount);

          if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
            itemCount[id] += 1;
            totalItems += 1;
            $counter.html(itemCount[id]);

            if (totalItems >= 1) {
              $decrementButton.css({
                opacity: 0.25
              });
              $btnclear.css({
                visibility: 'visible'
              });
            }

            updateDisplay();
            onChange(id, itemCount[id], totalItems);
          }

          event.preventDefault();
        }); //************************************* */

        if (!$(".button-apply").length) // Проверка на наличие уже созданных кнопок
          {
            $menu.append($btnclear, $btnapply); // Добавление кнопок в конец меню

            $(".button-apply,.button-clear").wrapAll("<div class='button-wrapper' />"); // 
          } //************************************** */


        $btnclear.click(function () {
          // Событие Нажатие кнопки Очистить
          totalItems = 0;
          itemCount[id] = 0;
          $counter.html(itemCount[id]);
          $decrementButton.css({
            opacity: 0.10
          });
          $btnclear.css({
            visibility: 'hidden'
          });
          updateDisplay();
          event.preventDefault();
          event.stopPropagation();
        }); //**************************************** */

        $item.click(function (event) {
          return event.stopPropagation();
        });
        return $item;
      }

      $this.click(function () {
        $this.toggleClass('menu-open');
      });
      $items.each(function () {
        var $item = $(this);
        var id = $item.data('id');
        var defaultCount = Number($item.data('defaultcount') || '0');
        itemCount[id] = defaultCount;
        totalItems += defaultCount;
        setItemSettings(id, $item);
        addControls(id, $item);
      });
      updateDisplay();
    });
    return this;
  };
})(jQuery);