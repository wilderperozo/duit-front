import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'ft-layout',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/profiles',
        title: 'Perfiles',
        icon: 'ft-user',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/projects',
        title: 'Proyectos',
        icon: 'ft-folder',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/personal',
        title: 'Personal',
        icon: 'ft-briefcase',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Configuraciones',
        icon: 'ft-settings',
        class: 'has-sub',
        badge: '1',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: [
            {
                path: 'javascript:;',
                title: 'Second Level',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: true,
                submenu: []
            },
            {
                path: '',
                title: 'Second Level Child',
                icon: '',
                class: 'has-sub',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: [
                    {
                        path: 'javascript:;',
                        title: 'Third Level 1.1',
                        icon: '',
                        class: '',
                        badge: '',
                        badgeClass: '',
                        isExternalLink: true,
                        submenu: []
                    },
                    {
                        path: 'javascript:;',
                        title: 'Third Level 1.2',
                        icon: '',
                        class: '',
                        badge: '',
                        badgeClass: '',
                        isExternalLink: true,
                        submenu: []
                    }
                ]
            }
        ]
    }
];
