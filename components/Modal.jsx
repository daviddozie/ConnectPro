import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, closeModal, title, paragraph, children,modalTitleStyle }) => {
  // close the modal when the overlay is clicked
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center'>
      <div className='modal-overlay bg-black fixed inset-0 opacity-50 z-40'></div>
      
      <div className='modal-container max-w-[550px] bg-white border rounded-md shadow-md mx-auto flex items-center justify-center z-50'>
        <div className='modal-content py-10 px-8 relative'>
          <Link to = "/"
            // onClick={closeModal}
            className='absolute top-2 right-2  bg-red-500 w-[2rem] h-[2rem] flex justify-center items-center text-white rounded-full p-2'
          >
            X
          </Link>
          <div className='modal-header flex flex-col text-center pb-4 w-full'>
            <h3 className={`font-bold md:text-[25px] text-[20px] ${modalTitleStyle}`}>{title}</h3>
            <p className={`md:text-base font-normal text-textColor text-[14px] ${modalTitleStyle}`}>{paragraph}</p>
          </div>
          <div className='modal-body'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
