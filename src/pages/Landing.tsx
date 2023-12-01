// Landing Page
import { FC, useState, ReactNode } from 'react';
import {
  FaCheck,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaPiggyBank,
} from 'react-icons/fa';
import Modal from '../components/Modal';
import '../styles/pages/landing.css';
import bg from '../assets/bg1.jpg';

import MyForm from '../components/forms/Login';

const landing: FC = () => {
  const date = new Date();
  const [modalContent, setModalContent] = useState<ReactNode | null>(null); // Annotate modalContent
  const [isOpen, setIsModalOpen] = useState<boolean>(false);

  // Handle Modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  //   Set Modal Content
  const handleModalOpen = () => {
    setIsModalOpen(true);
    setModalContent(<MyForm />);
  };

  return (
    <>
      <div className='landing-page container'>
        {/* Header Section */}
        <header>
          <nav>
            <div className='logo'>
              <FaPiggyBank />
            </div>
            <button className='btn sign-in' onClick={handleModalOpen}>
              Sign In
            </button>
          </nav>
        </header>

        {/* Main section */}
        <main>
          <section className='hero-text'>
            <div>
              <p>DISCOVER A SMARTER WAY TO SAVE WITH</p>
              <p className='smart-thrift'>SMART THRIFT</p>
            </div>
            <ul className='check-list'>
              <li>
                Print finacial statement <FaCheck className='checklist-icon' />
              </li>
              <li>
                Request loan <FaCheck className='checklist-icon' />
              </li>
              <li>
                Recommend new members <FaCheck className='checklist-icon' />
              </li>
              <li>
                Interest on savings <FaCheck className='checklist-icon' />
              </li>
            </ul>
          </section>
          <section>
            <div className='bg-image'>
              <span></span>
              <img src={bg} alt='Background Image' />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer>
          <ul>
            <li>
              <a href=''>
                <FaGithub />
              </a>
            </li>
            <li>
              <a href=''>
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href=''>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href=''>
                <FaFacebook />
              </a>
            </li>
          </ul>
          <p>
            copyright - CloobTech, <span>{date.getFullYear()}</span>
          </p>
        </footer>
      </div>
      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        modalContent={modalContent}
      />
    </>
  );
};

export default landing;
