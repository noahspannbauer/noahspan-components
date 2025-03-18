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
  faBars,
  faBaseball,
  faCalendar,
  faCamera,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faCloud,
  faCubes,
  faEdit,
  faEllipsisVertical,
  faEye,
  faFileArrowDown,
  faFileArrowUp,
  faGear,
  faGlobe,
  faHeart,
  faMapLocationDot,
  faMobile,
  faPen,
  faPlane,
  faPlus,
  faPuzzlePiece,
  faSave,
  faSignOut,
  faTicket,
  faTrash,
  faTriangleExclamation,
  faTruckFast,
  faUserTie,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export enum IconName {
  ANGULAR = 'fa-angular',
  ARROW_UP_RIGHT_FROM_SQUARE = 'fa-arrow-up-right-from-square',
  BARS = 'fa-bars',
  BASEBALL = 'fa-baseball',
  CALENDAR = 'fa-calendar',
  CAMERA = 'fa-camera',
  CHEVRON_DOWN = 'fa-chevron-down',
  CHEVRON_LEFT = 'fa-chevron-left',
  CHEVRON_RIGHT = 'fa-chevron-right',
  CHEVRON_UP = 'fa-chevron-up',
  CIRCLE_CHECK = 'fa-circle-check',
  CIRCLE_INFO = 'fa-circle-info',
  CIRCLE_XMARK = 'fa-circle-xmark',
  CLOUD = 'fa-cloud',
  CUBES = 'fa-cubes',
  DOWNLOAD = 'fa-file-arrow-down',
  EDIT = 'fa-edit',
  ELLIPSIS_VERTICAL = 'fa-ellipsis-vertical',
  EYE = 'fa-eye',
  GEAR = 'fa-gear',
  GITHUB = 'fa-github',
  GLOBE = 'fa-globe',
  GOLANG = 'fa-golang',
  HEART = 'fa-heart',
  JAVA = 'fa-java',
  JAVASCRIPT = 'fa-js',
  LINKEDIN = 'fa-linkedin',
  MAP_LOCATION_DOT = 'fa-map-location-dot',
  MOBILE = 'fa-mobile',
  PLANE = 'fa-plane',
  PLUS = 'fa-plus',
  PEN = 'fa-pen',
  PUZZLE_PIECE = 'fa-puzzle-piece',
  PYTHON = 'fa-python',
  SAVE = 'fa-save',
  SIGN_OUT = 'fa-sign-out',
  TICKET = 'fa-ticket',
  TRASH = 'fa-trash',
  TRANGLE_EXCLAMATION = 'fa-triangle-exclamation',
  TRUCK_FAST = 'fa-truck-fast',
  UPLOAD = 'fa-file-arrow-up',
  USER_TIE = 'fa-user-tie',
  VUE = 'fa-vuejs',
  XMARK = 'fa-xmark'
}

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface IconProps extends FontAwesomeIconBaseProps {
  iconName: IconName;
}

export const Icon = ({ iconName, ...rest }: IconProps) => {
  const icons = [
    {
      name: IconName.ANGULAR,
      icon: faAngular
    },
    {
      name: IconName.ARROW_UP_RIGHT_FROM_SQUARE,
      icon: faArrowUpRightFromSquare
    },
    {
      name: IconName.BARS,
      icon: faBars
    },
    {
      name: IconName.BASEBALL,
      icon: faBaseball
    },
    {
      name: IconName.CALENDAR,
      icon: faCalendar
    },
    {
      name: IconName.CAMERA,
      icon: faCamera
    },
    {
      name: IconName.CHEVRON_DOWN,
      icon: faChevronDown
    },
    {
      name: IconName.CHEVRON_LEFT,
      icon: faChevronLeft
    },
    {
      name: IconName.CHEVRON_RIGHT,
      icon: faChevronRight
    },
    {
      name: IconName.CHEVRON_UP,
      icon: faChevronUp
    },
    {
      name: IconName.CIRCLE_CHECK,
      icon: faCircleCheck
    },
    {
      name: IconName.CIRCLE_INFO,
      icon: faCircleInfo
    },
    {
      name: IconName.CIRCLE_XMARK,
      icon: faCircleXmark
    },
    {
      name: IconName.CLOUD,
      icon: faCloud
    },
    {
      name: IconName.CUBES,
      icon: faCubes
    },
    {
      name: IconName.DOWNLOAD,
      icon: faFileArrowDown
    },
    {
      name: IconName.EDIT,
      icon: faEdit
    },
    {
      name: IconName.ELLIPSIS_VERTICAL,
      icon: faEllipsisVertical
    },
    {
      name: IconName.EYE,
      icon: faEye
    },
    {
      name: IconName.GEAR,
      icon: faGear
    },
    {
      name: IconName.GITHUB,
      icon: faGithub
    },
    {
      name: IconName.GLOBE,
      icon: faGlobe
    },
    {
      name: IconName.GOLANG,
      icon: faGolang
    },
    {
      name: IconName.HEART,
      icon: faHeart
    },
    {
      name: IconName.JAVA,
      icon: faJava
    },
    {
      name: IconName.JAVASCRIPT,
      icon: faJs
    },
    {
      name: IconName.LINKEDIN,
      icon: faLinkedin
    },
    {
      name: IconName.MAP_LOCATION_DOT,
      icon: faMapLocationDot
    },
    {
      name: IconName.MOBILE,
      icon: faMobile
    },
    {
      name: IconName.PEN,
      icon: faPen
    },
    {
      name: IconName.PLANE,
      icon: faPlane
    },
    {
      name: IconName.PLUS,
      icon: faPlus
    },
    {
      name: IconName.PUZZLE_PIECE,
      icon: faPuzzlePiece
    },
    {
      name: IconName.PYTHON,
      icon: faPython
    },
    {
      name: IconName.SAVE,
      icon: faSave
    },
    {
      name: IconName.SIGN_OUT,
      icon: faSignOut
    },
    {
      name: IconName.TRASH,
      icon: faTrash
    },
    {
      name: IconName.TICKET,
      icon: faTicket
    },
    {
      name: IconName.TRANGLE_EXCLAMATION,
      icon: faTriangleExclamation
    },
    {
      name: IconName.TRUCK_FAST,
      icon: faTruckFast
    },
    {
      name: IconName.UPLOAD,
      icon: faFileArrowUp
    },
    {
      name: IconName.USER_TIE,
      icon: faUserTie
    },
    {
      name: IconName.VUE,
      icon: faVuejs
    },
    {
      name: IconName.XMARK,
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
