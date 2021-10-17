import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const icons = [
    {
        isActive: true,
        icon: HomeIcon,
        desc: 'Home',
    },
    {
        isActive: false,
        icon: TagIcon,
        desc: 'Explore',
    },
    {
        isActive: false,
        icon: NotificationsNoneIcon,
        desc: 'Notifications',
    },
    {
        isActive: false,
        icon: MailOutlineIcon,
        desc: 'Messages',
    },
    {
        isActive: false,
        icon: BookmarkBorderIcon,
        desc: 'Bookmarks',
    },
    {
        isActive: false,
        icon: ListAltIcon,
        desc: 'Lists',
    }, {
        isActive: false,
        icon: PermIdentityIcon,
        desc: 'Profile',
    },
    {
        isActive: false,
        icon: MoreHorizIcon,
        desc: 'More',
    }
]

export default icons;