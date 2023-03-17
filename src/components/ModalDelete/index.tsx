import React from 'react';
import Modal from 'react-modal';
import { useSolutionsContext } from '../../contexts/solutions/solutions';
import { ContainerModal } from './style';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
Modal.setAppElement(document.getElementById('root')!);

const ModalDelete = () => {
  const {
    deleteSolution,
    visibilityDeleteSolution,
    setVisibilityDeleteSolution,
  } = useSolutionsContext();

  const styleModal: Modal.Styles = {
    overlay: {
      position: 'fixed',
      display: 'flex',
      width: '100vw',
      height: '100vh',
      zIndex: '1',
      justifyContent: 'center',
      alignItems: 'center',
      backdropFilter: 'blur(2px)',
      backgroundColor: '#4087d74f',
    },
    content: {
      position: 'relative',
      inset: '0',
      width: '25rem',
      height: '15rem',
      background: '#e4e4c8',
      color: '#00207C',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '10px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '0',
      boxShadow: '3px 3px 5px #4f4f4fb0',
    },
  };

  return (
    <Modal
      isOpen={visibilityDeleteSolution}
      onRequestClose={() => setVisibilityDeleteSolution(false)}
      style={styleModal}
      parentSelector={() => document.body}
    >
      <ContainerModal>
        <div>
          <h3>Tem certeza que desejar excluir essa solução?</h3>
        </div>
        <div className='Container-buttons'>
          <button type='button' onClick={() => deleteSolution()}>
            Sim
          </button>
          <button
            type='button'
            onClick={() => setVisibilityDeleteSolution(false)}
          >
            Não
          </button>
        </div>
      </ContainerModal>
    </Modal>
  );
};

export default ModalDelete;
