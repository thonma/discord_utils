(() => {
  'use strict';

  // Enter送信のイベントハンドラは #app-mount に定義されていたのでそれを取得
  const app = document.querySelector('#app-mount');

  // ===============================================================
  // メッセージのテキストボックスで単体の Enter が入力されたとき、
  // イベント伝播を停止することで送信をキャンセルする
  // ===============================================================
  // 既存のイベントハンドラよりも先に動かしたいので true
  const useCapture = true;
  app.addEventListener('keydown', (event) => {
    const isMsgTextbox = event.target.role === 'textbox' && event.target.ariaMultiline;
    if (isMsgTextbox === false) {
      return;
    }

    const pressedShiftEnter = event.shiftKey && event.key === 'Enter';
    if (pressedShiftEnter) {
      return;
    }

    const pressedEnter = event.altKey === false && event.ctrlKey === false && event.key === 'Enter';
    if (pressedEnter) {
      event.stopPropagation();
    }
  }, useCapture);

})();