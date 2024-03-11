// import { HiBars3 } from 'react-icons/hi2';
import {
  IoSettingsOutline,
  IoInformationCircleOutline,
  IoBowlingBallOutline,
} from 'react-icons/io5';
import { CgUndo } from 'react-icons/cg';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { BsClockHistory } from 'react-icons/bs';

export const icons = [
  { id: 'new-game', icon: <IoBowlingBallOutline /> },
  { id: 'undo', icon: <CgUndo /> },

  { id: 'settings', icon: <IoSettingsOutline /> },
  {
    id: 'about',
    icon: <IoInformationCircleOutline />,
  },

  { id: 'rules', icon: <HiOutlineBookOpen /> },
  { id: 'history', icon: <BsClockHistory /> },
];


