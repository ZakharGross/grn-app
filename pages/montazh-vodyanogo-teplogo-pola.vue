<template>
  <div class="service-page">
		<div class="service-montazh-vodyanoy-background">
	  	<div class="container is-more-padding-vertical">
		  	<div class="content">
			  	<section class="hero is-content">
						<div class="hero-body">
				  		<div class="columns">
				  			<div class="column">
				  				<div class="subtitle is-blue">
				  					<span class="icon"><i class="fa fa-fire"></i></span>
				  					Монтаж тёплого пола
				  				</div>
				  				<h1 class="title is-green">Монтаж водяного тёплого пола</h1>
								</div>	  				
				  			<div class="column">
				  				<p>Монтаж водяного тёплого пола очень серьезное направление, но как ни странно у некоторых он поставлен на поток, а другие вообще сами пытаются смонтировать, зачастую не понимая цену ошибки. У меня бригада профессиональных монтажников, которые более 10 лет занимаются монтажом водяных тёплых полов, но и они не могут сказать, что все досконально знают.</p>
                  <p>Я бесплатно сделаю проект монтажа, вам только нужно предоставить чертёж дома. Цена монтажа у меня средне-городская, а вот качество работы на высшем уровне! Обещаю вам, что Вы получите эстетическое удовольствие от моей работы.</p>
                  <p>Также могу сделать водяной теплый пол «под ключ» с обвязкой котельной, автоматикой и так далее.</p>
				  			</div>
				  		</div>
			  		</div>
			  	</section>
		  	</div>
	  	</div>
  	</div>
    <div class="container">
      <div class="content">
        <section class="hero is-medium">
          <div class="hero-body">
            <div class="menu-page-app">
              <div class="columns has-text-centered">
                <div class="column is-full-mobile">
                  <img class="image is-128x128" src="~assets/img/viezd.svg" alt="Шаг 1"/><br/>Выезд сметчика на объект бесплатно
                </div>
                <div class="column is-full-mobile">
                  <img class="image is-128x128" src="~assets/img/dogovor.svg" alt="Шаг 2"/><br/>Предварительная смета за 1 рабочий день
                </div>
                <div class="column is-full-mobile">
                  <img class="image is-128x128" src="~assets/img/proektirovanie.svg" alt="Шаг 3"/><br/>Предоплата 20 тыс. руб., выполнение проекта до 2х недель
                </div>
                <div class="column is-full-mobile">
                  <img class="image is-128x128" src="~assets/img/oplata-50.svg" alt="Шаг 4"/><br/>Подписание договора и оплата материалов
                </div>
                <div class="column is-full-mobile">
                  <img class="image is-128x128" src="~assets/img/money.svg" alt="Шаг 5"/><br/>Оплата 50% выполненных работ
                </div>
                <div class="column is-full-mobile">
                  <img class="image is-128x128" src="~assets/img/oplata-100.svg" alt="Шаг 6"/><br/>Подписание акта выполненных работ, финальный расчёт
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="is-gray">
      <div class="container">
        <div class="content">
          <section class="hero is-small">
            <div class="hero-body">
              <h2 class="has-text-centered">Стоимость работ по монтажу основания для водяного тёплого пола</h2>
              <br/>
              <br/>
              <div class="columns has-text-centered">
                <div class="column">
                  <div class="white-background is-block-link" v-on:click="toggleModal(1)">
                    <h3>Для сухого монтажа в помещении</h3>
                    <p>Подходит для помещений, где нельзя заливать стяжку (деревянные перекрытия).</p>
                    <h4>300 руб./м<sup>2</sup></h4>
                    <hr>
                    <button class="button is-outlined is-info">Что входит в стоимость?</button>
                  </div>
                  <div class="modal var-1 has-text-left">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                      <header class="modal-card-head">
                        <p class="modal-card-title">Монтаж пола 300 руб./м<sup>2</sup></p>
                        <button v-on:click="toggleModal(1)" class="delete"></button>
                      </header>
                      <section class="modal-card-body">
                        <h5>В стоимость 1 м<sup>2</sup> входит:</h5>
                        <table class="table is-striped">
                          <tbody>
                            <tr><td>Укладка универсальной фольгированной системы (30 мм)</td><td>150 руб./м<sup>2</sup></td></tr>
                            <tr><td>Монтаж трубы водяного пола</td><td>150 руб./м<sup>2</sup></td></tr>
                          </tbody>
                        </table>
                        <br/>
                        <h5>Дополнительно Вы можете заказать:</h5>
                        <table class="table is-striped">
                          <tbody>
                            <tr><td>Укладка гипсоволокнистого листа (ГВЛ)</td><td>200 руб./м<sup>2</sup></td></tr>
                            <tr><td>Уборка помещения (швабра + строительный пылесос)</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Утепление стыков и щелей монтажной пеной</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Приклеивание фольгированного утеплителя к черновому полу</td><td>50 руб./м<sup>2</sup></td></tr>
                          </tbody>
                        </table>
                      </section>
                      <footer class="modal-card-foot">
                        <app-modal-order-form/>
                      </footer>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="white-background is-block-link" v-on:click="toggleModal(2)">
                    <h3>Хорошо утепленные помещения</h3>
                    <p><span class="tag is-warning">Хит!</span> Подходит для хорошо утепленных помещений с полами без магистралей.</p>
                    <h4>400 руб./м<sup>2</sup></h4>
                    <hr>
                    <button class="button is-warning">Что входит в стоимость?</button>
                  </div>
                  <div class="modal var-2 has-text-left">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                      <header class="modal-card-head">
                        <p class="modal-card-title">Монтаж пола 400 руб./м<sup>2</sup></p>
                        <button v-on:click="toggleModal(2)" class="delete"></button>
                      </header>
                      <section class="modal-card-body">
                        <h5>В стоимость 1 м<sup>2</sup> входит:</h5>
                        <table class="table is-striped">
                          <tbody>
                            <tr><td>Укладка экструдированного пенополистерола</td><td>150 руб./м<sup>2</sup></td></tr>
                            <tr><td>Укладка технической плёнки</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Укладка арматурной сетки</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Монтаж трубы водяного пола</td><td>150 руб./м<sup>2</sup></td></tr>
                          </tbody>
                        </table>
                        <br/>
                        <h5>Дополнительно Вы можете заказать:</h5>
                        <table class="table is-striped">
                          <tbody>
                            <tr><td>Уборка помещения (швабра + строительный пылесос)</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Утепление стыков и щелей монтажной пеной</td><td>50 руб./м<sup>2</sup></td></tr>
                          </tbody>
                        </table>
                      </section>
                      <footer class="modal-card-foot">
                        <app-modal-order-form/>
                      </footer>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="white-background is-block-link" v-on:click="toggleModal(3)">
                    <h3>Средне утеплённые помещения</h3>
                    <p>Подходит для помещений, где уже есть магистрали, а так же для подъёма финишного пола.</p>
                    <h4>550 руб./м<sup>2</sup></h4>
                    <hr>
                    <button class="button is-outlined is-info">Что входит в стоимость?</button>
                  </div>
                  <div class="modal var-3 has-text-left">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                      <header class="modal-card-head">
                        <p class="modal-card-title">Монтаж пола 550 руб./м<sup>2</sup></p>
                        <button v-on:click="toggleModal(3)" class="delete"></button>
                      </header>
                      <section class="modal-card-body">
                        <h5>В стоимость 1 м<sup>2</sup> входит:</h5>
                        <table class="table is-striped">
                          <tbody>
                            <tr><td>Укладка экструдированного пенополистерола (в 2 слоя)</td><td>300 руб./м<sup>2</sup></td></tr>
                            <tr><td>Укладка технической плёнки</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Укладка арматурной сетки</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Монтаж трубы водяного пола</td><td>150 руб./м<sup>2</sup></td></tr>
                          </tbody>
                        </table>
                        <br/>
                        <h5>Дополнительно Вы можете заказать:</h5>
                        <table class="table is-striped">
                          <tbody>
                            <tr><td>Уборка помещения (швабра + строительный пылесос)</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Утепление стыков и щелей монтажной пеной</td><td>50 руб./м<sup>2</sup></td></tr>
                          </tbody>
                        </table>
                      </section>
                      <footer class="modal-card-foot">
                        <app-modal-order-form/>
                      </footer>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="white-background is-block-link" v-on:click="toggleModal(4)">
                    <h3>Плохо утеплённые помещения</h3>
                    <p>Подходит для первых холодных этажей в плохо утеплённых помещениях.</p>
                    <h4>600 руб./м<sup>2</sup></h4>
                    <hr>
                    <button class="button is-outlined is-info">Что входит в стоимость?</button>
                  </div>
                  <div class="modal var-4 has-text-left">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                      <header class="modal-card-head">
                        <p class="modal-card-title">Монтаж пола 600 руб./м<sup>2</sup></p>
                        <button v-on:click="toggleModal(4)" class="delete"></button>
                      </header>
                      <section class="modal-card-body">
                        <h5>В стоимость 1 м<sup>2</sup> входит:</h5>
                        <table class="table is-striped">
                          <tbody>
                            <tr><td>Укладка экструдированного пенополистерола (в 2 слоя)</td><td>300 руб./м<sup>2</sup></td></tr>
                            <tr><td>Утепление стыков и щелей монтажной пеной</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Укладка технической плёнки</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Укладка арматурной сетки</td><td>50 руб./м<sup>2</sup></td></tr>
                            <tr><td>Монтаж трубы водяного пола</td><td>150 руб./м<sup>2</sup></td></tr>
                          </tbody>
                        </table>
                        <br/>
                        <h5>Дополнительно Вы можете заказать:</h5>
                        <table class="table is-striped">
                          <tbody>
                            <tr><td>Уборка помещения (швабра + строительный пылесос)</td><td>50 руб./м<sup>2</sup></td></tr>
                          </tbody>
                        </table>
                      </section>
                      <footer class="modal-card-foot">
                        <app-modal-order-form/>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <div class="columns">
                <div class="column is-full-mobile">
                  <h3>Монтаж коллектора</h3>
                  <table class="table is-striped">
                    <tbody>
                      <tr><td>Монтаж магистралей к коллектору тёплого пола</td><td>200&nbsp;руб./пог.м</td></tr>
                      <tr><td>Установка коллектора тёплого пола</td><td>1500&nbsp;руб./шт.</td></tr>
                      <tr><td>Установка смесительного узла тёплого пола</td><td>1500&nbsp;руб./шт.</td></tr>
                      <tr><td>Заполнение системы (воздух, вода или антифриз)</td><td>500&nbsp;руб./коллектор</td></tr>
                    </tbody>
                  </table>
                  <h3>Монтаж автоматики (термостатов)</h3>
                  <table class="table is-striped">
                    <tbody>
                      <tr><td>Монтаж термостата проводного</td><td>500&nbsp;руб./шт.</td></tr>
                      <tr><td>Монтаж датчика температуры</td><td>500&nbsp;руб./шт.</td></tr>
                      <tr><td>Монтаж комутационного блока проводного</td><td>1500&nbsp;руб./шт.</td></tr>
                      <tr><td>Монтаж сервомотора</td><td>300&nbsp;руб./шт.</td></tr>
                      <tr><td>Прокладка провода от коллектора на термостаты в защитной гофротрубе</td><td>20&nbsp;руб./пог.м</td></tr>
                      <tr><td>Штробление под гофротрубу (простое)</td><td>100 руб./пог.м</td></tr>
                      <tr><td>Штробление под гофротрубу (сложное)</td><td>200 руб./пог.м</td></tr>
                    </tbody>
                  </table>
                  <h3>Радиаторы, конвекторы</h3>
                  <table class="table is-striped">
                    <tbody>                       
                      <tr><td>Монтаж конвектора в пол</td><td>2000&nbsp;руб./шт.</td></tr>
                      <tr><td>Монтаж радиатора на стену</td><td>2000&nbsp;руб./шт.</td></tr>
                    </tbody>
                  </table>
                  <h3>Стяжка</h3>
                  <table class="table is-striped">
                    <tbody>                       
                      <tr><td>Монтаж полусухой стяжки (от 100 м<sup>2</sup>)</td><td>600&nbsp;руб./м<sup>2</sup></td></tr>
                      <tr><td>Монтаж полусухой стяжки (до 100 м<sup>2</sup>)</td><td>650&nbsp;руб./м<sup>2</sup></td></tr>
                    </tbody>
                  </table>
                  <h3>Возможно понадобится</h3>
                  <table class="table is-striped">
                    <tbody>                       
                      <tr><td>Монтаж коллекторного шкафа (наружного)</td><td>1000&nbsp;руб./шт.</td></tr>
                      <tr><td>Монтаж коллекторного шкафа (внутруннего)</td><td>от 1500&nbsp;руб./шт.</td></tr>
                      <tr><td>Монтаж демпферной ленты</td><td>10&nbsp;руб./пог.м</td></tr>
                      <tr><td>Прохождение стены (простое)</td><td>50 руб./отверстие</td></tr>
                      <tr><td>Прохождение стены (сложное)</td><td>100 руб./отверстие</td></tr>
                    </tbody>
                  </table>
                  <h3>Выезд на объект</h3>
                  <table class="table is-striped">
                    <tbody>
                      <tr><td>Транспортные расходы (в черте города)</td><td>400 руб./поездка</td></tr>
                      <tr><td>Транспортные расходы (по Лен. обл.)</td><td>от 600 руб./поездка</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="column is-full-mobile">
                  <h2>Принципы моей работы</h2>
                  <ul>
                    <li>Я не работаю без <a href="/proektirovanie/">проекта монтажа</a> (я сделаю его Вам бесплатно за 2 недели);</li>
                    <li>Я работаю только с шведским заводом Thermotech;</li>
                    <li>В своей работе использую дорогой качественный инструмент;</li>
                    <li>Я не оставляю кучу лишнего строительного материала;</li>
                    <li>Всегда полный отчёт (чеки) по стройматериалам;</li>
                    <li>Довожу до финала, не берусь за два объекта одновременно;</li>
                    <li>Работаю по договору с нашим юр. лицом (ООО «Изи Групп»);</li>
                    <li>Одна русская бригада уже более 10 лет (Юрий и Ростислав);</li>
                    <li>Я даю 1 год настоящей гарантии на все свои работы.</li>
                  </ul>
                  <h3>Полезные советы <span class="tag is-medium is-success">Бонус!</span></h3>
                  <ul>
                    <li>Я точно знаю какой высоты должна быть стяжка и почему;</li>
                    <li>Я точно знаю почему лучше укладывать трубы на сетку, а не «бобышки»;</li>
                    <li>Я точно знаю, какой теплоноситель лучше залить именно Вам;</li>
                    <li>Даже у крепления трубы к сетке (с помощью хомута) есть хитрости&nbsp;&mdash; нельзя крепить её на месте сгиба;</li>
                    <li>Я точно знаю какой высоты должен быть утеплитель на первых этажах и перекрытиях, чтобы было тепло;</li>
                    <li>Я не буду предлагать Вам теплоотражающую подложку, так как она бесполезна и долго не прослужит в стяжке.</li>
                  </ul>
                  <h3>Скидки от моих партнёров</h3>
                  <ul>
                    <li>СТД Петрович — максимальная скидка по золотой карте</li>
                    <li>Thermotech — 15% от розницы</li>
                  </ul>
                  <h2>Новые разработки Thermotech <span class="tag is-medium is-danger">Новинка!</span></h2>
                  <!--<br/>
                  <div class="columns">
                    <div class="column"><img class="image" src="~assets/img/tmix-me-2000.jpg" alt="TMix ME-2000"/></div>
                    <div class="column">
                      <h3>Смесительный узел TMix ME-2000 (Мини-2000)</h3>
                      <p><span class="tag is-warning">Без котла</span>&nbsp;<span class="tag is-warning">Автономный</span>&nbsp;<span class="tag is-warning">2 кВт</span></p>
                      <p>Автономный смесительный узел. Является самой компактной системой водяных теплых полов, не требующей подключение к котлу.</p>
                      <p>Оснащён блоком управления и встроенным нагревателем (мощность: 2 кВт). Предназначен для обогрева площадей до 100 м<sup>2</sup>.</p>
                      <p>Цена: <strong>24&nbsp;750 руб./система</strong></p>
                    </div>
                  </div>-->
                  <br/>
                  <div class="columns">
                    <div class="column">
                      <img class="image" src="~assets/img/univers-folg-system.jpg" alt="univers folg system"/><br/>
                      <img class="image" src="~assets/img/univers-folg-system-detail.png" alt="univers folg system detail"/>
                    </div>
                    <div class="column">
                      <h3>Универсальная фольгированная система (400x600 мм)</h3>
                      <p><span class="tag is-warning">Толщина 30 мм</span>&nbsp;<span class="tag is-warning">Без стяжки</span>&nbsp;<span class="tag is-warning">Лёгкий</span></p>
                      <p>Основой системы является универсальный элемент, сочетающий в себе слой экструдированного пенополистирола высокой плотности и теплораспределительный слой из алюминиевой фольги.</p>
                      <p>Система может монтироваться как на бетонное основание, так и на черновой (дощатый) пол, уложенный на деревянные лаги.</p>
                      <p>Цена: <strong>255 руб./шт.</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="hero is-small">
            <div class="hero-body">
              <h2 class="has-text-centered">Выполненые монтажи водяного пола</h2>
              <br/>
              <br/>
              <div class="white-background">
                <div class="columns">
                  <div class="column">
                    <img class="image is-256x256" src="~assets/img/project-syargi.svg" alt="project syargi"/>
                  </div>
                  <div class="column">
                    <h3>Проект в пос. Сярьги (Лен. Обл.)</h3>                    
                    <p>Площадь 190 м<sup>2</sup>, тёплый пол на 3-х этажах, средне утепленный дом</p>
                    <ul>
                      <li>Сухая система&nbsp;&mdash; 58.5 м<sup>2</sup></li>
                      <li>Мокрая система (в один слой)&nbsp;&mdash; 26 м<sup>2</sup></li>
                      <li>Мокрая система (в два слоя)&nbsp;&mdash; 100 м<sup>2</sup></li>
                    </ul>
                    <p>
                      <span class="icon"><i class="fa fa-download"></i></span>&nbsp;
                      <a href="/downloads/project-syargi.pdf" target="_blank">Посмотреть проект водяного пола</a><br/>
                      <span class="icon"><i class="fa fa-download"></i></span>&nbsp;
                      <a href="https://yadi.sk/d/7JxpSUR83GgRa5" target="_blank">Посмотреть смету проекта</a>
                    </p>
                    <br/>
                    <h4>Итого «под ключ»:&nbsp;&nbsp;879.975,- руб.</h4>
                  </div>
                  <div class="column">
                    <ul>
                      <li>Интегрированные коллекторы&nbsp;&mdash; 3 шт.</li>
                      <li>Магистральный коллектор&nbsp;&mdash; 1 шт.</li>
                      <li>Полная автоматика по всем этажам</li>
                      <li>Монтаж котла и бойлера косвенного нагрева</li>
                      <li>Система котельной собрана из медных труб</li>
                      <li>В стоимость, также, входят: котёл (15 кВт), бойлер косвенного нагрева (200 л), 2х конвектора в полу (3 м), расширительный бак (12 л), сопутствующие товары</li>
                      <li>Стяжка полусухая&nbsp;&mdash; 128 м<sup>2</sup></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="is-order-form">
      <div class="container">
        <div class="content">
          <section class="hero is-medium">
            <div class="hero-body">
              <app-order-form/>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <section class="hero is-small">
          <div class="hero-body">
            <h2 class="title has-text-centered">Рабочий процесс, выполненные проекты</h2>
            <h4 class="subtitle has-text-centered"><a href="https://www.instagram.com/gderemonta_net/" target="_blank">@gderemonta_net</a> #водянойтеплыйпол</h4>
            <br/>
            <br/>
            <br/>
            <div class="columns is-mobile is-multiline">
              
            </div>
            <br/>
            <!--<div class="has-text-centered">
              <button class="is-medium is-info is-outlined button" id="load-more">Посмотреть ещё!</button>
            </div>-->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import AppOrderForm from '~components/OrderForm.vue';
  import AppModalOrderForm from '~components/ModalOrderForm.vue';
  import AppInstagramFeed from '~components/InstagramFeed.vue';
  
  export default {
    components: {
      AppOrderForm,
      AppModalOrderForm,
      AppInstagramFeed
    },
    head () {
      return {
        title: 'Монтаж водяного тёплого пола. Водяной пол «под ключ» в Санкт-Петербурге и Лен. области от профессионалов с гарантией',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'Монтаж водяного тёплого пола очень серьезное направление, но как не странно у некоторых он поставлен на поток, а другие вообще сами пытаются смонтировать, зачастую не понимая цену ошибки. Я бесплатно сделаю проект монтажа, вам только нужно предоставить чертёж дома. Цена монтажа у меня средне-городская, а вот качество работы на высшем уровне! Обещаю вам, что Вы получите эстетическое удовольствие от моей работы.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'монтаж водяного тёплого пола, монтаж тёплого пола, водяной пол под ключ, водяной пол спб, водяной пол лен обл'
          }
        ]
      }
    },
    methods: {
      toggleModal(modal) {
        if (process.BROWSER_BUILD) {
          document.querySelector('.modal.var-' + modal).classList.toggle('is-active');
        }
      }
    }
  }
</script>