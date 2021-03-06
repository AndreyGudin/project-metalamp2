/* global jQuery */

// plugin styles
/* eslint-disable func-names */
(function ($) {
  const defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'item',
    textPlural: 'items',
    hide: 0, //************************** */
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-content',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
    },
    items: {},
    onChange: () => {},
    hideButtons: () => {},
    beforeDecrement: () => true,
    beforeIncrement: () => true,
    setSelectionText (itemCount, totalItems) {
      const usePlural = totalItems !== 1 && this.textPlural.length > 0;
      const text = usePlural ? this.textPlural : this.selectionText;
      return `${totalItems} ${text}`;
    },
  };

  $.fn.iqDropdown = function (options) {
    this.each(function () {
      const $this = $(this);
      const $selection = $this.find('p.iqdropdown-selection').last();
      const $menu = $this.find('div.iqdropdown-menu');
      const $items = $menu.find('div.iqdropdown-menu-option');
      //************************ */
      const classDropdown= $this.attr('class').split(' ');
      const $btnapply= $(`<button class="${classDropdown[0]} button-apply">Применить</button>`); // Кнопка Подтвердить
      const $btnclear= $(`<button class="${classDropdown[0]} button-clear">Очистить</button>`); // Кнопка Очистить
      //************************** */
      const dataAttrOptions = {
        selectionText: $selection.data('selection-text'),
        textPlural: $selection.data('text-plural'),
      };
      const settings = $.extend(true, {}, defaults, dataAttrOptions, options);
      const itemCount = {};
      let totalItems = 0;
      let hide = 0; //******************************* */
      function updateDisplay () {
        $selection.html(settings.setSelectionText(itemCount, totalItems));
      }

      function setItemSettings (id, $item) {
        const minCount = Number($item.data('mincount'));
        const maxCount = Number($item.data('maxcount'));

        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
        };
      }

      function addControls (id, $item) {
        const $controls = $('<div />').addClass(settings.controls.controlsCls);
        const $decrementButton = $(`
          <button class="button-decrement">
            <i class="icon-decrement"></i>
          </button>
        `);
        const $incrementButton = $(`
          <button class="button-increment">
            <i class="icon-decrement icon-increment"></i>
          </button>
        `);
        const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);
        $item.children('div').addClass(settings.controls.displayCls);
        $controls.append($decrementButton, $counter, $incrementButton);

        if (settings.controls.position === 'right') {
          $item.append($controls);
        } else {
          $item.prepend($controls);
        }

        $decrementButton.click((event) => {
          const { items, minItems, beforeDecrement, onChange } = settings;
          const allowClick = beforeDecrement(id, itemCount);
          if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
            itemCount[id] -= 1;
            totalItems -= 1;
            $counter.html(itemCount[id]);
            //********************************************************** */
            if (itemCount[id] == 0) $decrementButton.css({opacity:0.10});
            if (totalItems == 0) $btnclear.css({visibility:'hidden'});
            //*********************************************************** */
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
          }
          
          event.preventDefault();
        });

        $incrementButton.click((event) => {
          const { items, maxItems, beforeIncrement, onChange } = settings;
          const allowClick = beforeIncrement(id, itemCount);
          if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
            itemCount[id] += 1;
            totalItems += 1;
            $counter.html(itemCount[id]);
            //***************************************** */
            if (totalItems >= 1){
              $decrementButton.css({opacity:0.25});
              $btnclear.css({visibility:'visible'});
            }
            //********************************************* */
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
          }
          
          event.preventDefault();
        });
        
        //************************************* */
        if (!($(`.${classDropdown[0]} .button-apply`).length)&& hide == 0)  // Проверка на наличие уже созданных кнопок
        {
          $menu.append($btnclear,$btnapply);  // Добавление кнопок в конец меню
          $(`.${classDropdown[0]} .button-apply,.${classDropdown[0]} .button-clear`).wrapAll("<div class='button-wrapper' />"); // 
 
        }
        //************************************** */
        $btnclear.click(function () { // Событие Нажатие кнопки Очистить
          totalItems=0;
          itemCount[id]=0;
          $counter.html(itemCount[id]);
          $decrementButton.css({opacity:0.10})
          $btnclear.css({visibility:'hidden'});
          updateDisplay();
          event.preventDefault();
          event.stopPropagation()
        })
        //**************************************** */
        $item.click(event => event.stopPropagation());

        return $item;
      }

      $this.click(() => {
        $this.toggleClass('menu-open');
      });

      $items.each(function () {
        const $item = $(this);
        const id = $item.data('id');
        const defaultCount = Number($item.data('defaultcount') || '0');
        hide = Number($(`.${classDropdown[0]}.iqdropdown-menu`).data('hide'));//************************ */
        itemCount[id] = defaultCount;
        totalItems += defaultCount;
        setItemSettings(id, $item);
        addControls(id, $item);
      });

      updateDisplay();
    });

    return this;
  };
}(jQuery));
