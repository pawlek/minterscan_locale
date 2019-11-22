export default {
  title: 'Рeйтинг валидатора',
  power: 'Сила голоса',
  disclaimer: `
    <img class="minter-guy" src="https://www.minter.network/img/hero-minter.svg" />
    <p class="title is-size-6">Ключевая идея</p>
    <p>
      Minterscan предлагает всем пользователям сети Minter составить честный, прозрачный рейтинг,
      основанный на симпатии пользователей. Не зависящий от того, насколько давно валидатор работает в сети.
      Новички тоже имеют право на место вверху таблицы, если они предоставляют первоклассные услуги своим делегаторам.
      Если делегаторы довольны сервисом — им не составит труда потратить одну минуту своего времени для голосования.
    </p>
    <p><b>Все данные о валидаторе, включая рейтинг, хранятся в блокчейне</b></p>
    <p>
      Голосование осуществляется при помощи <a href="/pco">монеты MSCAN</a>.
      Если отправитель не является делегатором валидатора, его голос учитываться не будет.
      Обновление рейтинга происходит моментально.
      Сила голоса зависит от суммарного стейка делегатора в мастерноде, за которую отдаётся голос,
      на момент голосования:
    </p>
  `,
  text1: `
    <p><b>Как проголосовать</b></p>
    1. Зайдите в <a href="https://console.minter.network/" target="_blank">Minter консоль</a>
    или откройте мобильный кошелек и отправьте 1 MSCAN на адрес:
  `,
  text2: `
    2. В поле "Message" впишите публичный ключ валидатора, за которого голосуете.
    Ключ можно найти <a href="/validators">на этой странице</a>`,
  table0: `от 100 миллионов BIP`,
  table1: `от 10 миллионов BIP`,
  table2: `от миллиона BIP`,
  table3: `от 100 тысяч BIP`,
  table4: `от 10 тысяч BIP`,
  table5: `от 1000 до 10000 BIP`,
  table6: `менее 1000 BIP`
}