function modula_pro_get_url_parameters(name) {
	return (
		decodeURIComponent(
			(new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [ , '' ])[1]
				.replace(/\+/g, '%20')
		) || false
	);
}

function modulacheckDevice( opts ) {

	if ( 'undefined' != typeof opts ) {

		var devices = true;
		if ( 'undefined' != typeof opts.lightbox_devices && 'both' !== opts.lightbox_devices ) {
			if ( 'mobile' == opts.lightbox_devices ) {
				devices = (1024 > jQuery( window ).width());
			} else {
				devices = (1024 < jQuery( window ).width());
			}
		}

		return devices;
	}

	return false;
}

(function($) {
	'use strict';

	function ModulaPRO(modula) {
		this.instance = modula;
		this.filter = '*';
		this.hiddenItems = modula.$element.find('.hidden-items .modula-hidden-item');

		if (this.instance.options.haveFilters) {
			this.initFilters();
		}

		if ('fancybox' == this.instance.options['lightbox']) {
			this.initLightbox();
		}
	}

	ModulaPRO.prototype.initLightbox = function() {
		var self   = this,
		    inst   = self.instance,
		    tapped = false,
		    tappedTimeout,
		    doubleTap = false,
		    doubleTapTimeout,
			tappedImage;

		inst.$element.on('click', '.modula-item-link:not( .modula-simple-link )', function(evt) {
			evt.preventDefault();

			var items       = inst.$items.filter( self.filter ).filter( ':not( .modula-simple-link )' ),
			    links       = jQuery.map( items, function ( o ) {
				    var link  = jQuery( o ).find( '.modula-item-link' ),
				        image = jQuery( o ).find( '.pic' );
				    return {
					    src : link.attr( 'href' ),
					    opts: {
						    $thumb  : image.parents( '.modula-item' ),
						    caption : link.data( 'caption' ),
						    alt     : image.attr( 'alt' ),
						    thumb   : link.attr( 'data-thumb' ),
						    image_id: link.attr( 'data-image-id' )
					    }
				    };
			    } ),
			    modulaImage = $( this ).parent().find( 'img.pic' );

			if (self.hiddenItems.length > 0) {
				var hiddenLinks = jQuery.map(self.hiddenItems.filter(self.filter), function(o) {
					var link = jQuery(o);
					return {
						src: link.attr('href'),
						opts: {
							caption: link.data('caption'),
							alt: '',
							thumb: link.attr('data-thumb'),
							image_id: link.attr('data-image-id')
						}
					};
				});

				links = links.concat(hiddenLinks);
			}

			var index = items.index(jQuery(this).parents('.modula-item'));

			inst.options.lightboxOpts['beforeLoad'] = function() {
				jQuery(document).trigger('modula_fancybox_lightbox_before_load', [ inst, this ]);
			};
			inst.options.lightboxOpts['afterLoad'] = function() {
				jQuery(document).trigger('modula_fancybox_lightbox_after_load', [ inst, this ]);
			};
			inst.options.lightboxOpts['beforeShow'] = function() {
				jQuery(document).trigger('modula_fancybox_lightbox_before_show', [ inst, this ]);
			};
			inst.options.lightboxOpts['afterShow'] = function() {
				jQuery(document).trigger('modula_fancybox_lightbox_after_show', [ inst, this ]);
			};
			inst.options.lightboxOpts['beforeClose'] = function() {
				jQuery(document).trigger('modula_fancybox_lightbox_before_close', [ inst, this ]);
			};
			inst.options.lightboxOpts['afterClose'] = function() {
				jQuery(document).trigger('modula_fancybox_lightbox_after_close', [ inst, this ]);
			};
			inst.options.lightboxOpts['onInit'] = function() {
				jQuery(document).trigger('modula_fancybox_lightbox_on_init', [ inst, this ]);
			};
			inst.options.lightboxOpts['onActivate'] = function() {
				jQuery(document).trigger('modula_fancybox_lightbox_on_activate', [ inst, this ]);
			};
			inst.options.lightboxOpts['onDeactivate'] = function() {
				jQuery(document).trigger('modula_fancybox_lightbox_on_deactivate', [ inst, this ]);
			};
			if ( modulacheckDevice( inst.options ) ) {

				// Let's see if user selected to double click on mobile view
				if ( inst.options.mobileDoubleClick && 1024 > $( window ).width() ) {

					if ( !doubleTap ) { //if tap is not set, set up single tap
						doubleTap = true;

						doubleTapTimeout = setTimeout( function () {
							doubleTap = false;
						}, 300 );
					} else {    //tapped within 300ms of last tap. double tap
						clearTimeout( doubleTapTimeout ); //stop single tap callback
						doubleTap = false;
						// Check to see if is same image or another
						if ( tappedImage && tappedImage.is( modulaImage ) ) {
							jQuery.modulaFancybox.open( links, inst.options.lightboxOpts, index );
						}
					}
					// Update the tapped image
					tappedImage = modulaImage;

				} else {
					jQuery.modulaFancybox.open( links, inst.options.lightboxOpts, index );
				}
			}
		});

		// Copy caption on double tap
		if ( 'undefined' != typeof inst.options.copyCaptionMobile && '1' == inst.options.copyCaptionMobile ) {

			jQuery( document ).on( 'click', 'html body .modula-fancybox-container.modula-lightbox-' + inst.element.id + ' .modula-fancybox-caption__body', function ( e ) {

				if ( !tapped ) { //if tap is not set, set up single tap
					tapped = true;
					tappedTimeout = setTimeout( function () {
						tapped = false;
					}, 300 );
				} else {    //tapped within 300ms of last tap. double tap
					clearTimeout( tappedTimeout ); //stop single tap callback
					tapped = false;
					var $temp = $( "<input id='modula-temp-field'>" );
					$( "body" ).append( $temp );
					$temp.val( $( this ).text() ).select();
					document.execCommand( "copy" );
					$temp.remove();
				}
			} );
		}
	};

	ModulaPRO.prototype.initFilters = function() {
		var self = this,
			inst = self.instance;

		if ('undefined' != typeof inst.options.defaultActiveFilter) {
			if ('All' == inst.options.defaultActiveFilter) {
				self.filter = '*';
			} else {
				self.filter = '.jtg-filter-' + inst.options.defaultActiveFilter;
			}
		}
		var urlFilter = modula_pro_get_url_parameters('jtg-filter');
		if (urlFilter) {
			self.filter = '.jtg-filter-' + urlFilter;
		}

		// Dropdown Filter value
		var dropdownFilters = inst.options.dropdownFilters;

		if ('1' == dropdownFilters) {
			inst.$element.on('change', '.filters', function(e) {
				if (jQuery(this).hasClass('modula_menu__item--current')) {
					return;
				}

				self.filter = '.jtg-filter-' + this.value;

				inst.$element.find('.filters .modula_menu__item--current').removeClass('modula_menu__item--current');
				inst.$element
					.find(".filters option[value='" + this.value + "']")
					.addClass('modula_menu__item--current')
					.prop('selected', 'selected');

				if (inst.isIsotope) {
					inst.$items.removeClass('jtg-hidden');
					inst.$items.not(self.filter).addClass('jtg-hidden');
					inst.reset();

					inst.$itemsCnt.modulaisotope({ filter: self.filter }).modulaisotope('layout');

					if ( 'creative-gallery' == inst.options.type ) {
						inst.$items.not( '.jtg-hidden' ).each( function ( i, item ) {
							inst.placeImage(i);
						} );
					}

					if ( 'custom-grid' == inst.options.type ) {

						var containerWidth = inst.$element.find( '.modula-items' ).width(),
						    size,
						    columns        = inst.options.columns;

						if ( inst.options.gutter > 0 ) {
							size = (containerWidth - inst.options.gutter * (columns - 1)) / columns;
						} else {
							size = Math.floor( containerWidth / columns * 1000 ) / 1000;
						}

						inst.$items.not( '.jtg-hidden' ).each( function ( i, item ) {
							inst.placeImage(i);
						} );
					}

				} else {
					inst.$itemsCnt.justifiedGallery({ filter: self.filter });
				}
			});
		} else {
			inst.$element.on('click', '.filters a', function(e) {
				if ('0' == inst.options.filterClick) {
					e.preventDefault();
				} else {
					return true;
				}

				if (jQuery(this).parent().hasClass('modula_menu__item--current')) {
					return;
				}

				self.filter = '.jtg-filter-' + jQuery(this).data('filter');

				inst.$element.find('.filters .modula_menu__item--current').removeClass('modula_menu__item--current');
				inst.$element
					.find(".filters a[data-filter='" + jQuery(this).attr('data-filter') + "']")
					.parent()
					.addClass('modula_menu__item--current');

				if (inst.isIsotope) {
					inst.$items.removeClass('jtg-hidden');
					inst.$items.not(self.filter).addClass('jtg-hidden');
					inst.reset();

					inst.$itemsCnt.modulaisotope({ filter: self.filter }).modulaisotope('layout');

					if ( 'creative-gallery' == inst.options.type ) {
						inst.$items.not( '.jtg-hidden' ).each( function ( i, item ) {
							var slot = inst.tiles[i];

							$( item ).data( 'size', slot );

							$( item ).addClass( 'tiled' ).addClass( slot.width > slot.height ? 'tile-h' : 'tile-v' ).data( 'position' );

							$( item ).css( {
								width : slot.width,
								height: slot.height
							} );

							$( item ).find( '.figc' ).css( {
								width : slot.width,
								height: slot.height
							} );

							inst.loadImage( i );
						} );
					}

					if ( 'custom-grid' == inst.options.type ) {

						var containerWidth = inst.$element.find( '.modula-items' ).width(),
						    size,
						    columns        = inst.options.columns;

						if ( inst.options.gutter > 0 ) {
							size = (containerWidth - inst.options.gutter * (columns - 1)) / columns;
						} else {
							size = Math.floor( containerWidth / columns * 1000 ) / 1000;
						}

						inst.$items.not( '.jtg-hidden' ).each( function ( i, item ) {
							var slot = {},
							    widthColumns,
							    heightColumns,
							    auxWidth,
							    auxHeight;

							widthColumns = $( item ).data( 'width' );
							heightColumns = $( item ).data( 'height' );

							if ( widthColumns > 12 ) {
								widthColumns = 12;
							}

							if ( '1' == inst.options.enableResponsive ) {
								auxWidth = widthColumns;
								auxHeight = heightColumns;

								if ( 1 == columns ) {
									widthColumns = 1;
									heightColumns = widthColumns * auxHeight / auxWidth;
								} else {
									widthColumns = Math.round( columns * auxWidth / 12 );
									if ( widthColumns < 1 ) {
										widthColumns = 1;
									}

									heightColumns = Math.round( widthColumns * auxHeight / auxWidth );
									if ( heightColumns < 1 ) {
										heightColumns = 1;
									}
								}
							}

							slot.width = size * widthColumns + inst.options.gutter * (widthColumns - 1);
							slot.height = Math.round( size ) * heightColumns + inst.options.gutter * (heightColumns - 1);

							$( item )
								.data( 'size', slot )
								.addClass( 'tiled' )
								.addClass( slot.width > slot.height ? 'tile-h' : 'tile-v' )
								.data( 'position' );

							$( item ).css( $( item ).data( 'size' ) );
							$( item ).find( '.figc' ).css( {
								width : $( item ).data( 'size' ).width,
								height: $( item ).data( 'size' ).height
							} );

							// Load Images
							inst.loadImage( i );
						} );
					}

				} else {
					inst.$itemsCnt.justifiedGallery({ filter: self.filter });
				}
			});
		}

		inst.$element.find('.filter-by-wrapper').click(function() {
			var wrapper = jQuery(this);
			if (inst.$element.find('.filters').hasClass('active')) {
				inst.$element.find('.filters').hide(600).removeClass('active');
				wrapper.removeClass('opened');
			} else {
				inst.$element.find('.filters').show(600).addClass('active');
				wrapper.addClass('opened');
			}
		});

		if ('*' != self.filter && '' != self.filter) {
			if (inst.isIsotope) {
				inst.$items.removeClass('jtg-hidden');
				inst.$items.not(self.filter).addClass('jtg-hidden');
				inst.reset();

				inst.$itemsCnt.modulaisotope({ filter: self.filter });
			} else {
				inst.$itemsCnt.justifiedGallery({ filter: self.filter });
			}
		}
	};

	$(document).on('modula_api_after_init', function(event, inst) {
		new ModulaPRO(inst);
	});
})(jQuery);
