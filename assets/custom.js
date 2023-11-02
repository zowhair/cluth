const minusBtn = document.querySelectorAll(".product_custom_qty .minus-btn"),
      plusBtn = document.querySelectorAll(".product_custom_qty .plus-btn");
let   quantityInput = ''

plusBtn?.forEach(element => {
  element?.addEventListener("click", (e) => {

    quantityInput = e.target.previousElementSibling;
    quantityInput.value = Number(quantityInput.value) + 1;

  });
});

minusBtn?.forEach(element => {
  element?.addEventListener("click", (e) => {

    quantityInput = e.target.nextElementSibling;

    if (quantityInput.value > 1) {
      quantityInput.value = Number(quantityInput.value) - 1;
    }

  });
});

window.addEventListener("load", (event) => {

  $('.tabs_container.show_on_mobile').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true
  });

  $('.carrousel_container').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          dots: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.videos-container').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    draggable: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: true,
          draggable: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,
          adaptiveHeight: true
        }
      }
    ]
  });


  //function in charge of Tab selection on hovering - Landing Page Clutch Pro

  // Show the first tab and hide the rest
  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  // Click function
  $('#tabs-nav li').mouseenter(function(){
    $('#tabs-nav li').removeClass('active');
  // $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  $('#tabs-nav li').mouseleave(function(){
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
  });

  if (document.querySelector('.template-product')) {

    document.querySelector('.product-single__meta .overlay-preview-badges').addEventListener('click', (e) => {

      const element = document.querySelector('#judgeme_product_reviews'),
            imagesHeight = document.querySelector('.comparation-table .comparation-table__table').offsetHeight,
            offset = element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({ top: offset - 100, behavior: 'smooth' });

    });
  
  }

});

document.addEventListener("change", (e) => {
  if(e.target.classList.contains('color_swatches__card-product')){
      let card_patern = e.target.closest('.card_product'),
          image_change = card_patern.querySelector('.image_product_card'),
          src_image = e.target.dataset.image;
         
      image_change.src = src_image;
  }
});

document.addEventListener("click", function(e) {
  if(e.target.classList.contains('btn_atc_landing')){
      let card = e.target.closest('.card_product'),
          color_swatches = card.querySelectorAll('.color_swatches__card-product'),
          quantity = card.querySelector('.product__quantity #quantity-input').value,
          dataVariant, formData = {};

      color_swatches.forEach((element)=>{

          if(element.checked){
              dataVariant = element.value;
          }
      } );

       console.log(dataVariant, quantity);

      formData = {
          'items': [
            {
              'id': dataVariant,
              'quantity': quantity
            }
          ]
        };

      fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'dataType': 'json'
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                CartDrawerSite.updateCartDrawer();
                CartDrawerSite.openCartDrawer();
                console.log('Added');
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
  }

  if(document.getElementById('product_buy')){
    let overlay = document.querySelector('.overlay_popup'), 
        tech_popup = document.querySelector('.tech_popups'), 
        devices_popup = document.querySelector('.compatible_popups'), 
        patern_close;
         
  
 
         if(e.target.classList.contains('tech_button')){  
             overlay.classList.toggle('hide_popup');
             tech_popup.classList.toggle('hide_popup');
             
         }else if(e.target.classList.contains('devices_button')){
             overlay.classList.toggle('hide_popup');
             devices_popup.classList.toggle('hide_popup');
             
         }else if(e.target.classList.contains('close_popup')){
             overlay.classList.toggle('hide_popup');
             patern_close = e.target.closest('.popup__container');
             patern_close.classList.toggle('hide_popup');
         }
    }  
});

document.querySelectorAll('.variant-images img').forEach(element => {

  element.addEventListener('click', (e) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  })

  element.addEventListener('touchend', (e) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  })

});

$(document).ready(function(){
  const bundleAccordion = $("[js-accordion]");
  const bundleAccordionHeader = $("[js-accordion-header]");
  const bundleAccordionPanel = $("[js-accordion-panel]");
  bundleAccordionHeader.click(function(){
    console.log(".sdfasdasdasdasd")
    $(this).parent(bundleAccordion).toggleClass("active");
    $(this).siblings(bundleAccordionPanel).slideToggle();
  })
})


document.addEventListener('DOMContentLoaded', function() {
  const atcBtn = document.querySelector('[data-add-to-cart]')
  console.log({atcBtn})
  const form_ = atcBtn.closest('form')
  if(window.location.pathname == '/pages/gifting') {
    atcBtn.setAttribute('disabled', true)
    atcBtn.innerText = '(1 of 4)'
    form_.querySelector('input[name="product-id"]').remove()

    if(document.querySelectorAll('[js-accordion-panel]')[0]) {
      document.querySelectorAll('[js-accordion-panel]')[0].style.display = 'block';
    }
  }
  const containerSelector  = '[js-custom-bundle-product-container]'
  const bundleProductSelector_1 = '[js-bundle-product-select-1]'
  const bundleProductSelector_2 = '[js-bundle-product-select-2]'
  const productParentSelector = '[js-bundle-product-details]'
  const productDetailsJsonSelector = '[js-product-details-json]'




  const bundleContainers = document.querySelectorAll(containerSelector)
  let bundleProducts=[]
  bundleContainers.forEach(container => {
    bundleProducts.push(container.querySelectorAll(`${bundleProductSelector_1},${bundleProductSelector_2}`))

  })
 

  const accordionHeaders = document.querySelectorAll('[js-accordion-header]')
  accordionHeaders.forEach(accordion => {
    accordion.classList.add('deactive-accordion')
  })

  accordionHeaders[0].classList.remove('deactive-accordion')


  bundleProducts.forEach(products => {

    products.forEach(product =>{
      product.addEventListener('click' , function(e) {
        const parent = this.closest(productParentSelector)
        const currentProduct = JSON.parse(parent.querySelector(productDetailsJsonSelector).innerHTML)
        const variants = currentProduct.variants
        let selectedVariant = 0
        let totalPrice= 0

        const containerTitle = parent.querySelector('[js-bundle-product-title]')
        const currentFirstOptionTitle = parent.querySelector('[data-color-new-label]')
        const currentSecondtOptionTitle = parent.querySelector('[data-device-label]')
        
  
        const selected_1 = parent?.querySelector(`${bundleProductSelector_1}:checked`).value
        const selected_2 = parent?.querySelector(`${bundleProductSelector_2}:checked`).value
        
        const selectedVariantTitle = selected_1 + ' / ' + selected_2
  
        variants.map(variant => {
          if(variant.title == selectedVariantTitle) {
            selectedVariant = variant
          }
        })
        

        
  
        parent.setAttribute('data-variant-id',selectedVariant.id )
        parent.setAttribute('data-variant-title',selectedVariantTitle)
        parent.setAttribute('data-variant-price', selectedVariant.price)

        let price_ = 0; 
        const bundleContainer = document.querySelectorAll(productParentSelector)
        let allPrices= []
        bundleContainer.forEach(data => {
          allPrices.push(data.getAttribute('data-variant-price'))
        })

        allPrices.map(p => {
          price_ += parseInt(p)
        })
        let currentAccordionIndex= parent.getAttribute('data-accordion-index')
        parent.setAttribute('data-variant-selected', "true")
        atcBtn.innerText = `(${currentAccordionIndex} of 4)`

        // accordion enable
        accordionHeaders[currentAccordionIndex]?.classList.remove('deactive-accordion')
        accordionHeaders[currentAccordionIndex]?.click()

        if(currentAccordionIndex == 4) {
          let spanEl_ = `<span data-add-to-cart-text >Add to cart </span><span class="dash_new">–</span><span class="product-block--price"><span js-data-product-total-price="" class="product__price_new">
          </span>${theme.Currency.formatMoney(price_, theme.settings.moneyFormat)}
              </span>` 
          atcBtn.innerText = ''
          atcBtn.insertAdjacentHTML('beforeEnd', spanEl_)
        }
        // form_.querySelector('[js-data-product-total-price]').innerText= theme.Currency.formatMoney(price_, theme.settings.moneyFormat)
        
        containerTitle.innerText = selectedVariantTitle.replace('/', '+')
        currentFirstOptionTitle.innerText = selected_1
        if(selected_2) {
          if(currentSecondtOptionTitle)  currentSecondtOptionTitle.innerText = selected_2
          let newIdIndex = currentSecondtOptionTitle.getAttribute('data-panel-index')
          let newIdName = selected_2
          let popupId = newIdName+'-'+newIdIndex

          currentSecondtOptionTitle.setAttribute('popup_id', popupId.split(' ').join('-').toLowerCase())

        }

        let allSelectedProducts = document.querySelectorAll('[data-variant-selected="true"]')


        if(allSelectedProducts.length >= 4 ) {
          atcBtn.removeAttribute('disabled')
          const bundleContainer = document.querySelectorAll(productParentSelector)
          let allIds=[]
          // let allPrices= []
         
          bundleContainer.forEach(data => {
            allIds.push(data.getAttribute('data-variant-id'))
            // allPrices.push(data.getAttribute('data-variant-price'))
          })

          let newFormItem=''
          if(!form_.querySelector(`input[name='items[3][id]']`)) {
            allIds.map((vId, index) => {
              newFormItem += `<input type="hidden" value='1' name='items[${index}][quantity]'>
              <input type="hidden" name='items[${index}][id]' value='${vId}' >`
            })
            form_.insertAdjacentHTML('beforeEnd', newFormItem)
            newFormItem=''
           /*
            allPrices.map(p => {
              price_ += parseInt(p)
            })

            console.log({price_})
          */
          } else {
            let targetIndex = this.closest('fieldset').getAttribute('data-input-position-index')
         
            form_.querySelector(`input[name='items[${targetIndex-1}][id]']`).value = allIds[targetIndex-1]
            atcBtn.innerText = ''

            let atcBtn_ = `<span data-add-to-cart-text >Add to cart </span><span class="dash_new">–</span><span class="product-block--price"><span js-data-product-total-price="" class="product__price_new">
            </span>${theme.Currency.formatMoney(price_, theme.settings.moneyFormat)}
                </span>` 
            
            atcBtn.insertAdjacentHTML('beforeEnd', atcBtn_)


          }
         
        }

      })
    })
  })




})