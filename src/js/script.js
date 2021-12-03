window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu_item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		});
	});

	class MobileCard {
		constructor(subtitle, item, parentSelector, ...classes) {
			this.subtitle = subtitle;
			this.item = item;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
		}

		render() {
			const element = document.createElement('div');
			if (this.classes.length == 0) {
				this.classes = 'col-12 col-sm-6 col-md-6 col-lg-4'.split(' ');
			}
			this.classes.forEach(className => element.classList.add(className));
			element.innerHTML = `
			<div class="mobile_item mobile_item_${this.item}">
				<div class="mobile_item_subtitle">${this.subtitle}</div>
				<div class="mobile_item_plus"></div>
			</div>`;
			this.parent.append(element);
		}
	}

	class ReasonsCard {
		constructor(src, alt, title, text, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.text = text;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
		}

		render() {
			const element = document.createElement('div');
			if (this.classes.length == 0) {
				this.classes.push('col-md-6');
			}
			this.classes.forEach(className => element.classList.add(className));
			element.innerHTML = `
			<div class="reasons_item">
                        <div class="reasons_item_round">
                            <img src="${this.src}" alt="${this.alt}" class="reason_item_img">
                        </div>
                        <div class="reasons_item_descr">
                            <p class="reasons_item_descr_title">${this.title}</p>
                            <p class="reasons_item_descr_text">${this.text}</p>
                        </div>
                    </div>`;
			this.parent.append(element);
		}
	}

	new MobileCard(`оформление заказа одним касанием`,
		1,
		`.mobile .row`, ).render();

	new MobileCard(`надежная подача`,
		2,
		`.mobile .row`, ).render();

	new MobileCard(`прозрачные цены`,
		3,
		`.mobile .row`, ).render();

	new MobileCard(`безналичная оплата`,
		4,
		`.mobile .row`, ).render();

	new MobileCard(`обратная связь`,
		5,
		`.mobile .row`, ).render();

	new MobileCard(`разделить стоимость поездки`,
		6,
		`.mobile .row`, ).render();

	new ReasonsCard(`icons/reasons/cash_icon.png`,
		`cash icon`,
		`Никаких наличных, оплата происходит
	автоматически`,
		`Стоимость поездки оплачивается пассажиром с привязанной
	банковской карты, т.е. нет никаких рисков связанных с перевозкой наличности как для
	пассажира, так и для водителя, Вам не нужно искать мелкие деньги для размена.`,
		`.reasons .row`,
		`col-md-6`).render();

		new ReasonsCard(`icons/reasons/chart_icon.png`,
		`chart icon`,
		`Комиссия 8% + БОНУСЫ`,
		`У нас минимальная комиссия и мы выплачиваем бонусы за
		каждую
		поездку, некоторые наши конкуренты оставляют бонусы себе. Мы работаем честно и с
		нами
		водители зарабатывают больше!`,
		`.reasons .row`,
		`col-md-6`).render();

		new ReasonsCard(`icons/reasons/money_icon.png`,
		`money icon`,
		`Высокий доход с гарантированными выплатами`,
		`Мы выплачиваем заработную плату на личную банковскую
		карту
		водителя! Вам не нужно оформлять ООО, ИП, платить налоги, подавать декларацию,
		оплачивать бухгалтерские услуги и ведение банковского счета.`,
		`.reasons .row`,
		`col-md-6`).render();

		new ReasonsCard(`icons/reasons/calendar_icon.png`,
		`calendar icon`,
		`Работа в удобное время, никаких
		графиков`,
		`Вы просто нажимаете кнопку выйти на линию для начала
		работы,
		когда решите закончить, нажимаете выйти с линии. Вы можете подрабатывать только
		утром,
		вечером, в выходные или праздничные дни!`,
		`.reasons .row`,
		`col-md-6`).render();

		new ReasonsCard(`icons/reasons/key_icon.png`,
		`key icon`,
		`Комфортное, прозрачное и простое
		подключение`,
		`Мы подключаем дистанционно и бесплатно, Вам нет
		необходимости приезжать к нам! Вы
		присылаете нам копии документов, мы регистрируем Вас и присылаем данные для
		подключения, через 1-2 дня Вы можете начинать работать!`,
		`.reasons .row`,
		`col-md-6`).render();

		new ReasonsCard(`icons/reasons/map_icon.png`,
		`map icon`,
		`Всегда большое количество заказов`,
		`Приложение показывает, где на данный момент больше всего
		заказов и где действуют повышенные тарифы. У Вас не будет простоя и холостых
		пробегов.
		Наши пассажиры всегда приятные и абсолютно неконфликтные люди, которых приятно
		возить.`,
		`.reasons .row`,
		`col-md-6`).render();

		new ReasonsCard(`icons/reasons/support_icon.png`,
		`support icon`,
		`Круглосуточная поддержка`,
		`В Uber действует круглосуточная поддержка водителей по
		электронной почте. Если что-то непонятно, Вы всегда можете задать вопрос через
		On-line
		консультацию.`,
		`.reasons .row`,
		`col-md-6`).render();

		new ReasonsCard(`icons/reasons/car_icon.png`,
		`car icon`,
		`Без шашечек и наклеек`,
		`Вам не нужно менять цвет, устанавливать «шашки» на
		автомобиль
		и обклеивать его наклейками.`,
		`.reasons .row`,
		`col-md-6`).render();
});