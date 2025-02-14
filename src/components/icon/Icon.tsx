import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faGithub,
  faGolang,
  faJava,
  faJs,
  faLinkedin,
  faPython,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBaseball,
  faCalendar,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faEdit,
  faEllipsisVertical,
  faEye,
  faGear,
  faGlobe,
  faHeart,
  faPen,
  faPlane,
  faPlus,
  faPuzzlePiece,
  faSave,
  faSignOut,
  faTrash,
  faTriangleExclamation,
  faTruckFast,
  faUserTie,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface IconProps extends FontAwesomeIconBaseProps {
  iconName:
    | 'fa-angular'
    | 'fa-arrow-up-right-from-square'
    | 'fa-baseball'
    | 'fa-calendar'
    | 'fa-chevron-down'
    | 'fa-chevron-left'
    | 'fa-chevron-right'
    | 'fa-chevron-up'
    | 'fa-circle-check'
    | 'fa-circle-info'
    | 'fa-circle-xmark'
    | 'fa-edit'
    | 'fa-ellipsis-vertical'
    | 'fa-eye'
    | 'fa-gear'
    | 'fa-github'
    | 'fa-globe'
    | 'fa-golang'
    | 'fa-heart'
    | 'fa-java'
    | 'fa-js'
    | 'fa-linkedin'
    | 'fa-pen'
    | 'fa-plane'
    | 'fa-plus'
    | 'fa-puzzle-piece'
    | 'fa-python'
    | 'fa-save'
    | 'fa-sign-out'
    | 'fa-trash'
    | 'fa-triangle-exclamation'
    | 'fa-truck-fast'
    | 'fa-user-tie'
    | 'fa-vuejs'
    | 'fa-xmark';
}

export const Icon = ({ iconName, ...rest }: IconProps) => {
  const icons = [
    {
      name: 'fa-angular',
      icon: faAngular
    },
    {
      name: 'fa-arrow-up-right-from-square',
      icon: faArrowUpRightFromSquare
    },
    {
      name: 'fa-baseball',
      icon: faBaseball
    },
    {
      name: 'fa-calendar',
      icon: faCalendar
    },
    {
      name: 'fa-chevron-down',
      icon: faChevronDown
    },
    {
      name: 'fa-chevron-left',
      icon: faChevronLeft
    },
    {
      name: 'fa-chevron-right',
      icon: faChevronRight
    },
    {
      name: 'fa-chevron-up',
      icon: faChevronUp
    },
    {
      name: 'fa-circle-check',
      icon: faCircleCheck
    },
    {
      name: 'fa-circle-info',
      icon: faCircleInfo
    },
    {
      name: 'fa-circle-xmark',
      icon: faCircleXmark
    },
    {
      name: 'fa-edit',
      icon: faEdit
    },
    {
      name: 'fa-ellipsis-vertical',
      icon: faEllipsisVertical
    },
    {
      name: 'fa-eye',
      icon: faEye
    },
    {
      name: 'fa-gear',
      icon: faGear
    },
    {
      name: 'fa-github',
      icon: faGithub
    },
    {
      name: 'fa-globe',
      icon: faGlobe
    },
    {
      name: 'fa-golang',
      icon: faGolang
    },
    {
      name: 'fa-heart',
      icon: faHeart
    },
    {
      name: 'fa-java',
      icon: faJava
    },
    {
      name: 'fa-js',
      icon: faJs
    },
    {
      name: 'fa-linkedin',
      icon: faLinkedin
    },
    {
      name: 'fa-pen',
      icon: faPen
    },
    {
      name: 'fa-plane',
      icon: faPlane
    },
    {
      name: 'fa-plus',
      icon: faPlus
    },
    {
      name: 'fa-puzzle-piece',
      icon: faPuzzlePiece
    },
    {
      name: 'fa-python',
      icon: faPython
    },
    {
      name: 'fa-save',
      icon: faSave
    },
    {
      name: 'fa-sign-out',
      icon: faSignOut
    },
    {
      name: 'fa-trash',
      icon: faTrash
    },
    {
      name: 'fa-triangle-exclamation',
      icon: faTriangleExclamation
    },
    {
      name: 'fa-truck-fast',
      icon: faTruckFast
    },
    {
      name: 'fa-user-tie',
      icon: faUserTie
    },
    {
      name: 'fa-vuejs',
      icon: faVuejs
    },
    {
      name: 'fa-xmark',
      icon: faXmark
    }
  ];

  return (
    <span>
      <FontAwesomeIcon
        icon={icons.find((icon) => icon.name === iconName)?.icon as IconProp}
        {...rest}
      />
    </span>
  );
};
