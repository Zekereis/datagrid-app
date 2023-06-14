import React, { useEffect, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import FilterInput from './FilterInput';
import Modal from './Modal';
const HomeTable = () => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('homeTableData');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState([]);
  const modalRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('homeTableData', JSON.stringify(data)); // Verileri localStorage'a kaydetme
  }, [data]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentPageData = data.slice(startIndex, endIndex);

    // Eğer sayfa verisi, perPage değerinden daha az ise boş satırlar eklenir
    if (currentPageData.length < perPage) {
      const emptyRowsCount = perPage - currentPageData.length;
      const emptyRows = Array(emptyRowsCount).fill({});
      setFilteredData([...currentPageData, ...emptyRows]);
    } else {
      setFilteredData(currentPageData);
    }
  }, [data, currentPage, perPage]);

  const handleSave = () => {
    const newData = {
      input1,
      input2,
      input3
    };
    setData(prevData => [...prevData, newData]); //Yeni veriyi ekleyerek tabloyu güncelleme
    setInput1('');
    setInput2('');
    setInput3('');
    handleClosePopup();
  };

  const handleOpenPopup = () => {
    modalRef.current.style.display = 'block';//Modalı açma
  };

  const handleClosePopup = () => {
    modalRef.current.style.display = 'none';//Modalı kapatma
  };

  const handleCancel = () => {
    handleClosePopup();
  };

  const handleFilter = e => {
    const keyword = e.target.value.toLowerCase();
    const filteredResults = data.filter(item =>
      item.input1.toLowerCase().includes(keyword) ||
      item.input2.toLowerCase().includes(keyword) ||
      item.input3.toLowerCase().includes(keyword)
    );
    setFilteredData(filteredResults);
    setCurrentPage(1); // Filtreleme yapıldığında ilk sayfaya geri dön
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handlePerPageChange = value => {
    setPerPage(value);
    setCurrentPage(1); // Her sayfa değiştiğinde ilk sayfaya geri dön
  };

  const columns = [
    {
      name: 'Sosyal Medya Linki',
      selector: 'input1',
      sortable: true
    },
    {
      name: 'Sosyal Medya Adı',
      selector: 'input2',
      sortable: true
    },
    {
      name: 'Açıklama',
      selector: 'input3',
      sortable: true
    }
  ];

  const customPaginationOptions = {
    rowsPerPageText: 'Show:', // Sayfa başına öğe sayısı metni
    rangeSeparatorText: ' / ', // Sayfa numarası ayracı metni
    selectAllRowsItem: true, // Tüm satırları seçme seçeneği
    selectAllRowsItemText: 'Tümünü Seç', // Tüm satırları seçme metni
  };
  


  return (
    <div className='table-body'>
      <div className='btn-container'>
        <button id='myBtn' onClick={handleOpenPopup}>Yeni Hesap Ekle</button>
      </div>
      <Modal
        handleClosePopup={handleClosePopup}
        handleSave={handleSave}
        handleCancel={handleCancel}
        input1={input1}
        input2={input2}
        input3={input3}
        setInput1={setInput1}
        setInput2={setInput2}
        setInput3={setInput3}
        modalRef={modalRef}
      />

      <FilterInput
        handleFilter={handleFilter}
      />


      <DataTable
        className='table data-table-custom'
        columns={columns}
        data={filteredData}
        pagination
        paginationServer
        paginationTotalRows={data.length}
        paginationPerPage={perPage}
        paginationComponentOptions={customPaginationOptions}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handlePerPageChange}
        noHeader

      />

    </div>
  );
};

export default HomeTable;
