export default {
  title: 'Верификация профиля',
  labelTrue: 'Профиль подтвержден',
  labelFalse: 'Профиль не подтвержден',
  text0: `
    Верифицированный профиль — это знак того, что кошелек действительно принадлежит тому, кто указан в профиле.
    Если вы видите профиль, в котором написано, что он принадлежит Евгению Гордееву,
    но там нет зеленого бейджика, который выглядит вот так:
  `,
  text1: `
    то скорее всего этот кошелек не принадлежит Евгению.
    Если человек или сервис просит вас отправить ему деньги и представляется кем-то,
    но не имеет статуса верифицированного аккаунта — то скорее всего это мошенник.
  `,
  text2: `
    Чтобы получить верифицированный аккаунт, пожалуйста <a href="/faq/profile">заполните профиль</a> и
    <a href="https://t.me/minterscan_verification_bot" target="_blank">напишите боту</a>
    и мы свяжемся с вами в короткий срок.
  `,
  text3: `
    <p><b>Важное уточнение</b></p>
    <p>
    Данные профиля обновляются автоматически, это может сделать владелец кошелька в любое время при помощи специальной
    Transakcije. Как это сделать <a href="/faq/profile">написано здесь</a>.
    </p>
    <p class="has-text-danger">
      Каждый раз, когда вы обновляете профиль, статус верификации нужно получать заново.
    </p>
    <p>
      Почему? Представим простую ситуацию.  Некто Василий Пупкин получил верифицированный аккаунт на Minterscan.
      Затем он меняет свои данные и указывает что его зовут Евгений Гордеев. Проблема!
      Теперь у Василия верифицированный аккаунт, в котором указано, что это Евгений, но Евгением он не является.
      Поэтому, каждый раз, когда данные профиля изменились, статус верификации будет обнуляться, во избежание
      возможности мошенничества.
    </p>
  `
}
