export default {
  title: 'Генератор Minter кошельков',
  text0: `
    <p>
      <b>Minter Wallet Generate</b> это удобная утилита для генерации Minter кошельков с открытым исходным кодом.
      Код был проверен Frontend-разработчиком команды Minter
      <a href="https://github.com/shrpne" target="_blank">Никитой Ейбогом</a> и он не обнаружил
      явных уязвимостей для утечки seed фразы или приватного ключа.
    </p>
  `,
  text1: `
    <p>
      <p class="title is-size-6">Назначение</p>
      Генерация большого количества кошельков одной кнопкой.
    </p>
  `,
  text2: `
    <p>
      <p class="title is-size-6">Возможности утилиты</p>
      <ul>
        <li>Генерация seed-фраз</li>
        <li>Ручное копирование адресов</li>
        <li>Экспорт данных в CSV формате</li>
        <li>Просмотр сгенерированных кошельков на Minterscan</li>
      </ul>
    </p>
    <p>
      <p class="title is-size-6">Как использовать</p>
      Скачайте архив на свой компьютер, разархивируйте и запустите в браузере файл <b>index.html</b>
    </p>
    <p>
      <p class="title is-size-6">Безопасность при работе с утилитой</p>
      Несмотря на то, что код открыт и выполняет только одну функцию — генерацию seed фраз.
      И невзирая на то, что код был проанализирован разработчиками Minter.
      При работе с утилитой <b>ВСЕГДА</b> нужно соблюдать меры безопасности.
    </p>
    <p>
      <ul>
        <li>
          Внимательно проверьте откуда вы скачиваете архив с утилитой.
          Единственная верная ссылка это
          <a href="https://github.com/minterscan/minter_wallet_generate" target="_blank">наш профиль на Github</a>.
          Мы сознательно не сделали онлайн версии, чтобы исключить возможность фишинга.
        </li>
        <li>
          Используйте последнюю версию браузера без установленных расширений.
          Любое расширение, которое требует доступ ко всем вкладкам потенциально может быть опасным.
        </li>
      </ul>
    </p>
  `,
  text3: `
    <p>
      Код открыт. Приглашаем всех разработчиков проанализировать код и сделать свой вывод о его безопасности.
      Если вы нашли ошибку — оформляйте pull request на Github.
    </p>
    <p>
      И да пребудет с вами KARMA 🙏
    </p>
  `,
  buttonLabel0: 'Исходный код',
  buttonLabel1: 'Скачать утилиту'
}
