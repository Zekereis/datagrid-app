import React from 'react';

const Modal = ({ modalRef,handleClosePopup, handleSave, handleCancel, input1, input2, input3, setInput1, setInput2, setInput3 }) => {
  return (
    <div id='myModal' className='modal' ref={modalRef}>
        <div className='modal-content'>
          <span className='close' onClick={handleClosePopup}>&times;</span>
          <div className="form-group">
            <label htmlFor="input1">Sosyal Medya Linki</label>
            <input type='text' id="input1" value={input1} onChange={e => setInput1(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="input2">Sosyal Medya Adı</label>
            <input type='text' id="input2" value={input2} onChange={e => setInput2(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="input3">Açıklama</label>
            <input type='text' id="input3" value={input3} onChange={e => setInput3(e.target.value)} />
          </div>
          <div className="button-container">
            <button className='cancel-button' onClick={handleCancel}>Vazgeç</button>
            <button className='save-button' onClick={handleSave}>Kaydet</button>
          </div>
        </div>
      </div>
    
  );
};

export default Modal;
