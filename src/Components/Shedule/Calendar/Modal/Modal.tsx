import React from 'react';
interface NoteModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: (title: string, time: string) => void;
}
const NoteModal: React.FC<NoteModalProps> = ({
  isVisible,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = React.useState('');
  const [time, setTime] = React.useState('');
  if (!isVisible) return null;
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          ×
        </span>
        <input
          type='text'
          placeholder='Название заметки'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Время (например, 10:00 - 12:00)'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          onClick={() => {
            onSave(title, time);
            setTitle('');
            setTime('');
          }}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};
export default NoteModal;
