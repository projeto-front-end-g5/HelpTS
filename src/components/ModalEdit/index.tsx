import React from 'react';
import Modal from 'react-modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  IDataEdit,
  useSolutionsContext,
} from '../../contexts/solutions/solutions';
import { ContainerModal } from './style';
import { formEditSolution } from '../../validator/schema';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
Modal.setAppElement(document.getElementById('root')!);

const ModalEdit = () => {
  const {
    visibilityEditSolution,
    setVisibilityEditSolution,
    RequestEdit,
    contentTextSolution,
    contentTag,
    contentCodeSolution,
    titleSolution,
  } = useSolutionsContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataEdit>({
    resolver: yupResolver(formEditSolution),
  });

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
      width: '35rem',
      height: '45rem',
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
      isOpen={visibilityEditSolution}
      onRequestClose={() => setVisibilityEditSolution(false)}
      style={styleModal}
      parentSelector={() => document.body}
    >
      <ContainerModal>
        <div>
          <h3>Editar solução</h3>
        </div>
        <form onSubmit={handleSubmit(RequestEdit)}>
          <label htmlFor='title'>Titulo</label>
          <input
            type='text'
            value={titleSolution}
            id='title'
            {...register('title')}
          />
          {errors && <p>{errors.title?.message}</p>}
          <label htmlFor='tag'>Tag</label>
          <select id='tag' {...register('tag')}>
            <option value={contentTag}>{contentTag}</option>
            <option value='state'>state</option>
            <option value='function'>function</option>
            <option value='png'>png</option>
            <option value='axios'>axios</option>
            <option value='props'>props</option>
            <option value='contextApi'>contextApi</option>
            <option value='parameter'>parameter</option>
          </select>
          {errors && <p>{errors.tag?.message}</p>}
          <label htmlFor='contentText'>solução</label>
          <textarea
            id='contentText'
            value={contentTextSolution}
            {...register('contentText')}
          />
          {errors && <p>{errors.contentText?.message}</p>}
          <label htmlFor='contentCode'>Código</label>
          <textarea
            id='contentCode'
            value={contentCodeSolution}
            {...register('contentCode')}
          />
          {errors && <p>{errors.contentCode?.message}</p>}
          <div className='Container-buttons'>
            <button type='submit'>Editar</button>
            <button
              type='button'
              onClick={() => setVisibilityEditSolution(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </ContainerModal>
    </Modal>
  );
};

export default ModalEdit;
