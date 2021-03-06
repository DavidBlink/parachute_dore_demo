(function (blink) {
	'use strict';

	var parachute_dore_demoStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	parachute_dore_demoStyle.prototype = {
		bodyClassName: 'content_type_clase_parachute_dore_demo',
		toolbar: { name: 'editorial' },
		extraPlugins: ['blink_popover'],
		ckEditorStyles: {	
			
			
			name: 'parachute_dore_demo',
			styles: [
				{ name: 'Título Intro', element: 'h2', attributes: { 'class': 'bck-title-intro'} },
				{ name: 'Título BlancoInicio', element: 'h2', attributes: { 'class': 'bck-title-1'} },
				{ name: 'Título ColorUnidad', element: 'h3', attributes: { 'class': 'bck-title-2'} },
				{ name: 'Título BlogClaire', element: 'h3', attributes: { 'class': 'bck-title-7'} },
				{ name: 'Título VersleDelf', element: 'h3', attributes: { 'class': 'bck-title-8'} },
				{ name: 'AmarilloFondoNegro', element: 'h3', attributes: { 'class': 'bck-title-3'} },
				{ name: 'JevalueNaranja', element: 'h3', attributes: { 'class': 'bck-title-4'} },
				{ name: 'MoradoSubrayado', element: 'h3', attributes: { 'class': 'bck-title-5'} },
				{ name: 'NaranjaBauhaus', element: 'h3', attributes: { 'class': 'bck-title-6'} },
				{ name: 'Titulo123', element: 'h3', attributes: { 'class': 'bck-title-9'} },
				
				

				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} },
				{ name: 'NúmeroTitulo', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'PointsMorados', element: 'span', attributes: { 'class': 'bck-enfasis-14'} },
				{ name: 'ColorNaranja', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'ColorBorde', element: 'span', attributes: { 'class': 'bck-enfasis-17'} },
				{ name: 'ColorRojo', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
				{ name: 'ColorFucsia', element: 'span', attributes: { 'class': 'bck-enfasis-20'} },
				{ name: 'ColorAzul', element: 'span', attributes: { 'class': 'bck-enfasis-9'} },
				{ name: 'ColorAzulCeleste', element: 'span', attributes: { 'class': 'bck-enfasis-16'} },
				{ name: 'ColorAzulClaro', element: 'span', attributes: { 'class': 'bck-enfasis-13'} },
				{ name: 'ColorMorado', element: 'span', attributes: { 'class': 'bck-enfasis-15'} },
				{ name: 'ColorVerde', element: 'span', attributes: { 'class': 'bck-enfasis-18'} },
				{ name: 'ColorVerdeAgua', element: 'span', attributes: { 'class': 'bck-enfasis-21'} },
				{ name: 'ColorVerdeGris', element: 'span', attributes: { 'class': 'bck-enfasis-22'} },
				{ name: 'ColorRosa', element: 'span', attributes: { 'class': 'bck-enfasis-7'} },
				{ name: 'Azul-Bauhaus', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'Bauhaus', element: 'span', attributes: { 'class': 'bck-enfasis-23'} },
				{ name: 'CochinFont', element: 'span', attributes: { 'class': 'bck-enfasis-11'} },
				{ name: 'GraphiteFont', element: 'span', attributes: { 'class': 'bck-enfasis-19'} },
				{ name: 'GrilledFont', element: 'span', attributes: { 'class': 'bck-enfasis-12'} },
				{ name: 'LobsterFont', element: 'span', attributes: { 'class': 'bck-enfasis-8'} },
				{ name: 'YanoneFont', element: 'span', attributes: { 'class': 'bck-enfasis-6'} },
				{ name: 'WendyFont', element: 'span', attributes: { 'class': 'bck-enfasis-10'} },
				{ name: 'Enfasis123', element: 'span', attributes: { 'class': 'bck-enfasis-25'} },

				{ name: 'Lista Triangulo', element: 'ul', attributes: { 'class': 'bck-ul-1'} },
				{ name: 'Lista DesordPrincipal', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista DesGris', element: 'ul', attributes: { 'class': 'bck-ul-4'} },
				{ name: 'Lista Tick', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				{ name: 'Lista 123', element: 'ul', attributes: { 'class': 'bck-ul-5'} },
				
				{ name: 'Lista OrdenadaPrincipal', element: 'ol', attributes: { 'class': 'bck-ol-1' } },
				{ name: 'Lista Negrita', element: 'ol', attributes: { 'class': 'bck-ol-7' } },
				{ name: 'Lista OrdAmarilla', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista CirRosaNumero', element: 'ol', attributes: { 'class': 'bck-ol-6' } },
				{ name: 'Lista CirRosaLetra', element: 'ol', attributes: { 'class': 'bck-ol-9' } },
				{ name: 'Lista Numero', element: 'ol', attributes: { 'class': 'bck-ol-8' } },
				{ name: 'Lista LetraMinus', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista LetraMinusMorada', element: 'ol', attributes: { 'class': 'bck-ol-5' } },
				{ name: 'Lista LetraMinusAzulClaro', element: 'ol', attributes: { 'class': 'bck-ol-10' } },
				{ name: 'Lista LetraMinusRosa', element: 'ol', attributes: { 'class': 'bck-ol-11' } },
				{ name: 'Lista RectaAmarilla', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista 123', element: 'ol', attributes: { 'class': 'bck-ol-12' } },
								

				{ name: 'CajaInicio', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-1' } },
				{ name: 'CajaLeson', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-2' } },
				{ name: 'CajaUnite', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-14' } },
				{ name: 'CajaUniteCahier', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-17' } },
				{ name: 'CajaLesonCahier', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-13' } },
				{ name: 'CajaIMGBillan', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-18' } },
				{ name: 'CajaEsquinaVerde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-3' } },
				{ name: 'CajaTaches', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-10' } },
				{ name: 'CajaBordeColor', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-11' } },
				{ name: 'CajaAmarilla', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-4' } },
				{ name: 'CajaATOI', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-5' } },
				{ name: 'CajaFondoColor', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-6' } },
				{ name: 'CajaBlog', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-7' } },
				{ name: 'CajaJeJoue', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-8' } },
				{ name: 'CajaBlanca', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-9' } },
				{ name: 'CajaStrategies', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-12' } },

				{ name: 'Tabla', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table'} },
				{ name: 'TablaAzul', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-2'} },
				
				{ name: 'Celda 1', element: 'td', attributes: { 'class': 'bck-td bck-td-1'} },
				{ name: 'Celda-bordeAzul', element: 'td', attributes: { 'class': 'bck-td-2'} },
				
				
				{ name: 'Enlace web', element: 'a', attributes: { 'class': 'bck-link'} },
				
				{ name: 'Icono Hablar', element: 'span', attributes: { 'class': 'icon icon-hablar' } },
				{ name: 'Icono Boligrafo', element: 'span', attributes: { 'class': 'icon icon-boli' } },

				{ name: 'Desplegable 1', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown-1' } },
				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown-2' } }
			]
		},
		slidesTitle: {},
		subunits: [],
		totalSlides: 0,

		init: function () {
			var parent = blink.theme.styles.basic.prototype,
				that = this;
			parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.fillSlidesTitle();
			that.getActualUnitActivities();
			blink.events.on("course_loaded", function(){
				that.formatCarouselindicators();
				that.enableSliders();
			});
			that.animateNavbarOnScroll();
			parent.initInfoPopover();
			that.addSlideNavigators();
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return blink.courseInfo.unit + ' > ' + $(this).html();
			})
		},

		fillSlidesTitle: function () {
			var self = this.slidesTitle;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = window['t'+index+'_slide'];
				var slideTitle = slide.title;
				slideTitle = slideTitle.replace(/<span class="index">\s*([\d]+)\s*<\/span>/i, '$1. ');
				slideTitle = slideTitle.replace(/\s+/, ' ');
				slideTitle = stripHTML(slideTitle);

				self['t'+index+'_slide'] = slideTitle;
			}
		},

		/**
		 * @summary Gets the activity type subunits of the actual unit.
		 * @return {Object} Object of the actual unit filtering the not activity type subunits
		 */
		getActualUnitActivities: function () {
			var curso = blink.getCourse(idcurso),
				that = this,
				units,
				unitSubunits,
				actualActivity,
				unitActivities = [];

			curso.done(function () {
				units = curso.responseJSON.units;

				$.each(units, function () {
					if (this.title && this.title == blink.courseInfo.unit) {
						unitSubunits = this.subunits.concat(this.resources);
					}
				});

				actualActivity = _.find(unitSubunits, function(subunit) {
					return subunit.id == idclase;
				});

				if (actualActivity.level == '6') {
					unitActivities.push(actualActivity);
				} else {
					unitActivities = _.filter(unitSubunits, function(subunit) {
						return subunit.type == 'actividad' && subunit.level !== '6';
					});
				}

				that.subunits = unitActivities;
			}).done(function(){
				blink.events.trigger('course_loaded');
			});
		},

		/**
		 * @summary Getting active slide position in relation with the total of the
		 *          unit slides.
		 * @param {Array} $subunits Array of activity type objects
		 * @return {int} Slide position
		 */
		getActualSlideNumber: function (subunits) {
			var actualSlideIndex = $('.swipeview-active').attr('data-page-index'),
				actualSlide = 1;

			for (var i in subunits) {
				if (subunits[i].id && parseInt(subunits[i].id) != idclase) {
					actualSlide += parseInt(subunits[i].pags);
				} else {
					actualSlide += parseInt(actualSlideIndex);
					break;
				}
			}

			return actualSlide;
		},

		formatCarouselindicators: function () {
			var that = this,
				$navbarBottom = $('.navbar-bottom'),
				firstSlide = eval('t0_slide');
			if(blink.courseInfo && blink.courseInfo.courseDateCreated) var courseYearCreated = new Date(blink.courseInfo.courseDateCreated).getFullYear();
			var yearCopy = courseYearCreated !== undefined ? courseYearCreated : 2016;
			$navbarBottom
				.attr('class', 'parachute_dore_demo-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before('<span class="copyright">&copy;' +  yearCopy + '</span>')
					.wrap('<div id="top-navigator"/>')
					.remove()
					.end();

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			});

			var subunits = that.subunits,
				totalSlides = 0,
				subunit_index,
				subunit_pags;

			// Different behaviour depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (subunits.length !== 0) {
				for (var i in subunits) {
					if (subunits[i].pags) {
						var subunitSlides = parseInt(subunits[i].pags);
						totalSlides += subunitSlides;
					}
					if (subunits[i].id && subunits[i].id == idclase) {
						subunit_index = i;
						subunit_pags = parseInt(subunits[i].pags);
					}
				}

				that.totalSlides = totalSlides;

				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter" data-subunit-index="' + subunit_index +
						'" data-subunit-pags="' + subunit_pags + '">' +
						that.getActualSlideNumber(subunits) + ' / ' + totalSlides +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html(that.getActualSlideNumber(subunits) +
						' / ' + totalSlides);
				});
			} else {
				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter">' + (window.activeSlide + 1) +
						' / ' + window.secuencia.length +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html((window.activeSlide + 1) +
						' / ' + window.secuencia.length);
					$('.bck-dropdown-2').hideBlink();
				});
			}

			blink.events.on('section:shown', function() {
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) +
					'_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}

			blink.events.trigger(true, 'style:endFormatCarousel');
		},

		addSlideNavigators: function () {
			blink.events.on("course_loaded", function(){
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index'));

				$('.slider-control').off('click');

				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (that.subunits.length !== 0) {
					// Slider controls must allow navigation among all the activity subunits
					// in the current unit.
					$('.left.slider-control, .left.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == 0) {
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo=0&numSec=' +
									that.subunits[subunit_index - 1].numSlides, false, undefined);
							} else {
								blink.activity.showPrevSection();
						}
						}
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == parseInt(that.subunits[subunit_index].pags) - 1) {
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo=0' + ((typeof window.esPopup !== "undefined" && window.esPopup)?"&popup=1":""),
									false, undefined);
							} else {
								blink.activity.showNextSection();
							}
						}
					});
				} else {
					$('.left.slider-control, .left.slider-navigator').click(function () {
						blink.activity.showPrevSection();
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						blink.activity.showNextSection();
					});
				}

				$(document).ready(function() {
					blink.events.on('showSlide:after', function() {
						that.enableSliders();
					});
				});
			});
		},

		/**
		 * @summary Enables all slider controls and disables when appropiate
		 */
		enableSliders: function () {
			// Removes disabled class to all navigation buttons and applies
			// just if its first or last slide of all activities
			$('.slider-control, .slider-navigator').removeClass('disabled');
			var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index'));

			// Navigation change depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (this.subunits.length !== 0 && modoVisualizacionLabel != "standalone") {
				if (this.getActualSlideNumber(this.subunits) == 1) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
				if (this.getActualSlideNumber(this.subunits) == this.totalSlides) {
					$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			} else {
				if (window.activeSlide == 0) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
				if(window.activeSlide == parseInt(that.subunits[subunit_index].pags) - 1){
					$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			}
		},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		},

		showBookIndexInClass: function () {
			return modoVisualizacionLabel != "standalone";

		},

		animateNavbarOnScroll: function () {
			if (!blink.isApp) return;
			var $navbar = $('.parachute_dore_demo-navbar');
			var lastScrollTop = 0;
			$('.js-slider-item').scroll(function () {
				var scrollTop = $(this).scrollTop();
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		}
	};

	parachute_dore_demoStyle.prototype = _.extend({}, new blink.theme.styles.basic(), parachute_dore_demoStyle.prototype);

	blink.theme.styles['parachute_dore_demo'] = parachute_dore_demoStyle;

})( blink );

$(document).ready(function() {

	if (!$('body').hasClass('edit')) {
		$(document).on('click', '.nav-tabs a', function() {
			var actividad = $(this).attr('href');
			var index = actividad.split('-').pop();
			var slide = window['t' + index + '_slide'];
			slide.onAfterShowSlide();
		});
	}

	$(document).on('click', '.bck-dropdown .class_slide, .nav-tabs a', function(e){
		var activePane;
		if (!!$(e.target).closest('.nav-tabs').length) {
			activePane = $(e.target).attr('href');
		} else {
			activePane = '#' + $(e.target).closest('.tab-pane').attr('id');
		}
		blink.activity.currentStyle.setActivePane(activePane);
	});

});
